import { Dictionary } from 'style-dictionary/types';
import type { Config } from 'style-dictionary/types';
import type { SdTailwindConfigType, TailwindFormatObjType } from './types.js';
import utils from './utils.js';
export { build as buildThemes } from './theme.js';

const handleTokenAttribute = (
  type: SdTailwindConfigType['type'],
  isVariables: SdTailwindConfigType['isVariables'],
  prefix: SdTailwindConfigType['prefix'],
  cur: any,
  acc: any,
  arr: string[] | any
) => {
  if (cur.attributes.category === type || type === 'all') {
    /**
     * Make sure screens values are not using CSS variables as
     * CSS @media queries do not support CSS variables
     */
    const isNeg = arr.join('-').includes('(-)');

    let key = `--${arr.join('-').replaceAll(' ', '-').toLowerCase()}`;
    let name = cur.name;

    if (isNeg) {
      key = `${key.replace('-(-)-', '')}-neg`;
      name = `${cur.name.toLowerCase()}-neg`;
    }

    if (isVariables && cur.attributes.category !== 'screens') {
      acc[key] = prefix ? `var(--${utils.addHyphen(prefix) + name})` : `var(--${name})`;
    } else {
      acc[key] = cur['$value'] || cur['value'];
    }
  }
};

const formatTokens = (
  tokens: Dictionary['allTokens'],
  type: SdTailwindConfigType['type'],
  isVariables: SdTailwindConfigType['isVariables'],
  prefix: SdTailwindConfigType['prefix']
) => {
  const allTokenObj = tokens.reduce<Record<string, string>>((acc: any, cur: any) => {
    if (cur.attributes === undefined) {
      throw new Error(`Token ${cur.name} has no attributes`);
    }

    if (typeof cur.$value === 'object' && cur.$type === 'typography') {
      Object.entries(cur.$value).map(([key, value]) => {
        let temp = Object.assign({}, cur);
        temp.name = `${cur.name}-${String(key).replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}`;
        //@ts-ignore
        temp.$value = String(value).replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
        let k = key;
        if (key === 'fontFamily') k = 'font-family';
        if (key === 'fontWeight') k = 'font-weight';
        if (key === 'fontStyle') k = 'font-style';
        if (key === 'fontSize') k = 'font-size';
        if (key === 'lineHeight') k = 'line-height';
        if (key === 'letterSpacing') k = 'letter-spacing';
        if (key === 'paragraphSpacing') k = 'paragraph-spacing';
        if (key === 'paragraphIndent') k = 'paragraph-indent';
        if (key === 'textDecoration') k = 'text-decoration';
        if (key === 'textCase') k = 'text-case';

        let attributes = [k, Object.values(cur.attributes).splice(2).join('-')];
        handleTokenAttribute(type, isVariables, prefix, temp, acc, attributes);
      });
    } else if (typeof cur.$value === 'object' && cur.$type === 'shadow') {
      let temp = Object.assign({}, cur);
      temp.name = `${cur.name}`;
      //@ts-ignore
      temp.$value = cur.$value
        .map((v: any) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
        .join(',');
      let attributes = ['boxShadow', Object.values(cur.attributes).join('-')];
      handleTokenAttribute(type, isVariables, prefix, temp, acc, attributes);
    } else if (typeof cur.$value === 'object' && cur.$type === 'blur') {
      let temp = Object.assign({}, cur);
      temp.name = `${cur.name}`;
      //@ts-ignore
      temp.$value = cur.$value.blur;
      let attributes = ['backdropBlur', Object.values(cur.attributes).join('-')];
      handleTokenAttribute(type, isVariables, prefix, temp, acc, attributes);
    } else if (cur.$type == 'color') {
      // Force colors attribute on color token types
      cur.path = ['color', cur.path[cur.path.length - 1]];
      handleTokenAttribute(type, isVariables, prefix, cur, acc, cur.path);
    } else {
      if (cur.scopes && cur.scopes.length > 0) {
        cur.scopes.map((scope: any) => {
          let path = [Object.values(cur.path).join('-')];
          if (scope === 'LINE_HEIGHT') path = ['line-height', ...cur.path[cur.path.length - 1]];
          if (scope === 'FONT_SIZE') path = ['font-size', ...cur.path[cur.path.length - 1]];
          if (scope === 'FONT_FAMILY') path = ['font-family', ...cur.path[cur.path.length - 1]];
          if (scope === 'FONT_WEIGHT') path = ['font-weight', ...cur.path[cur.path.length - 1]];
          if (scope === 'LETTER_SPACING') path = ['letter-spacing', ...path];
          handleTokenAttribute(type, isVariables, prefix, cur, acc, path);
        });
      } else {
        handleTokenAttribute(type, isVariables, prefix, cur, acc, cur.path);
      }
    }

    return acc;
  }, {});

  const result = {};

  Object.keys(allTokenObj).forEach((key) => {
    const keys = key.split('.').filter((k) => k !== type);
    utils.makeSdObject(result, keys, allTokenObj[key]);
  });

  //return JSON.stringify(result, null, 2);
  return Object.entries(allTokenObj)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; \n');
};

export const getTailwindFormat = ({
  dictionary: { allTokens },
  type,
  isVariables,
  prefix,
  extend,
  tailwind,
}: TailwindFormatObjType) => {
  const content = formatTokens(allTokens, type, isVariables, prefix);

  if (type === 'all') {
    const darkMode = utils.getConfigValue(tailwind?.darkMode, 'class');

    const tailwindContent = utils.getConfigValue(
      Array.isArray(tailwind?.content)
        ? tailwind?.content.map((content) => `"${content}"`)
        : tailwind?.content,
      [`"./src/**/*.{ts,tsx}"`]
    );

    const plugins = utils.getConfigValue(
      tailwind?.plugins?.map((plugin) => {
        return `require("@tailwindcss/${plugin}")`;
      }),
      []
    );

    const configs = utils.getTemplateConfigByType(
      type,
      content,
      darkMode,
      tailwindContent,
      extend,
      plugins
    );

    return configs;
  } else {
    return `module.exports = ${utils.unquoteFromKeys(content)}`;
  }
};

export const makeSdTailwindConfig = ({
  type,
  formatType = 'js',
  isVariables = false,
  extend = true,
  source,
  transforms,
  buildPath,
  prefix,
  tailwind,
  preprocessors,
}: SdTailwindConfigType): Config => {
  if (type === undefined) {
    throw new Error('type is required');
  }

  if (formatType !== 'js' && formatType !== 'cjs') {
    throw new Error('formatType must be "js" or "cjs"');
  }

  const destination = 'theme.css';
  return {
    preprocessors,
    source: utils.getConfigValue(source, ['tokens/**/*.json']),
    hooks: {
      formats: {
        tailwindFormat: ({ dictionary }: { dictionary: Dictionary }) => {
          return getTailwindFormat({
            dictionary,
            formatType,
            isVariables,
            extend,
            prefix,
            type,
            tailwind,
          });
        },
      },
    },
    platforms: {
      [type !== 'all' ? `tailwind/${type}` : 'tailwind']: {
        transforms: utils.getConfigValue(transforms, ['attribute/cti', 'name/kebab']),
        buildPath: utils.getConfigValue(buildPath, 'build/web/'),
        files: [
          {
            destination,
            format: 'tailwindFormat',
          },
        ],
      },
    },
  };
};
