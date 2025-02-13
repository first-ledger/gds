import { Dictionary } from 'style-dictionary/types/DesignToken';
import type { Config } from 'style-dictionary/types/Config';
import utils from './utils.js';
import {
  TamaguiFormatType,
  SdTamaguiConfigType,
  TamaguiFormatObjType,
  TamaguiFormatObj,
} from './types.js';
import fs from 'fs-extra';

const formatTokenValue = (str: string) => {
  return str.toUpperCase().replaceAll('--', '').replaceAll('-', '_');
  // return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
};

const handleTokenAttribute = (
  type: SdTamaguiConfigType['type'],
  isVariables: SdTamaguiConfigType['isVariables'],
  prefix: SdTamaguiConfigType['prefix'],
  cur: any,
  acc: any,
  arr: string[] | any
) => {
  if (cur.attributes.category === type || type === 'all') {
    /**
     * Make sure screens values are not using CSS variables as
     * CSS @media queries do not support CSS variables
     */
    if (isVariables && cur.attributes.category !== 'screens') {
      acc[arr.join('.')] = prefix
        ? `${formatTokenValue(utils.addHyphen(prefix) + cur.name)}`
        : `${formatTokenValue(cur.name)}`;
    } else {
      acc[arr.join('.')] = cur['$value'] || cur['value'];
    }
  }
};

const processTokens = (opts: TamaguiFormatObj) => {
  return opts.tokens.reduce<Record<string, string>>((acc: any, cur: any) => {
    if (cur.attributes === undefined) {
      throw new Error(`Token ${cur.name} has no attributes`);
    }

    if (typeof cur.$value === 'object' && cur.$type === 'typography') {
      Object.entries(cur.$value).map(([key, value]) => {
        let temp = Object.assign({}, cur);
        temp.name = `${cur.name}-${String(key).replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}`;
        //@ts-ignore
        temp.$value = String(value).replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
        let attributes = [key, Object.values(cur.attributes).join('-')];
        handleTokenAttribute(opts.type, opts.isVariables, opts.prefix, temp, acc, attributes);
      });
    } else if (typeof cur.$value === 'object' && cur.$type === 'shadow') {
      let temp = Object.assign({}, cur);
      temp.name = `${cur.name}`;
      //@ts-ignore
      temp.$value = cur.$value
        .map((v: any) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
        .join(',');
      let attributes = ['boxShadow', Object.values(cur.attributes).join('-')];
      handleTokenAttribute(opts.type, opts.isVariables, opts.prefix, temp, acc, attributes);
    } else if (typeof cur.$value === 'object' && cur.$type === 'blur') {
      let temp = Object.assign({}, cur);
      temp.name = `${cur.name}`;
      //@ts-ignore
      temp.$value = cur.$value.blur;
      let attributes = ['backdropBlur', Object.values(cur.attributes).join('-')];
      handleTokenAttribute(opts.type, opts.isVariables, opts.prefix, temp, acc, attributes);
    } else if (cur.$type == 'color') {
      // Force colors attribute on color token types
      cur.path = ['colors', ...cur.path];
      handleTokenAttribute(opts.type, opts.isVariables, opts.prefix, cur, acc, cur.path);
    } else {
      if (cur.scopes && cur.scopes.length > 0) {
        cur.scopes.map((scope: any) => {
          let path = [Object.values(cur.path).join('-')];
          if (scope === 'LINE_HEIGHT') path = ['lineHeight', Object.values(cur.path).join('-')];
          if (scope === 'FONT_SIZE') path = ['fontSize', Object.values(cur.path).join('-')];
          if (scope === 'FONT_FAMILY') path = ['fontFamily', Object.values(cur.path).join('-')];
          if (scope === 'FONT_WEIGHT') path = ['fontWeight', Object.values(cur.path).join('-')];
          if (scope === 'LETTER_SPACING')
            path = ['letterSpacing', Object.values(cur.path).join('-')];
          handleTokenAttribute(opts.type, opts.isVariables, opts.prefix, cur, acc, path);
        });
      } else {
        handleTokenAttribute(opts.type, opts.isVariables, opts.prefix, cur, acc, cur.path);
      }
    }

    return acc;
  }, {});
};

const formatTokens = (opts: TamaguiFormatObj) => {
  const allTokenObj = processTokens(opts);

  const result = {};
  Object.keys(allTokenObj).forEach((key) => {
    const keys = key.split('.').filter((k) => k !== opts.type);
    utils.makeSdObject(result, keys, allTokenObj[key]);
  });

  return JSON.stringify(result, null, 2);
};

const formatColorTokens = (opts: TamaguiFormatObj) => {
  const allTokenObj = processTokens(opts);

  const colors = {} as any;

  Object.keys(allTokenObj).forEach((key) => {
    const keys = key.split('.').filter((k) => k !== opts.type);
    if (keys[0] === 'colors' && !key.includes('Modals')) {
      keys.shift();
      let atr = keys.join('-').replace(' ', '-');
      let mod = atr.split('-');
      mod.shift();
      return (colors[mod.join('-')] = allTokenObj[key]);
    }
  });

  return JSON.stringify(colors, null, 2);
};

const formatDesignTokens = (opts: TamaguiFormatObj) => {
  const allTokenObj = processTokens(opts);
  const design_tokens = {} as any;

  Object.keys(allTokenObj).forEach((key) => {
    const keys = key.split('.').filter((k) => k !== opts.type);
    ['Radius', 'Space', 'Border', 'Depth', 'Ring', 'Icon'].forEach((t) => {
      if (key.includes(t)) {
        let lower = t.toLowerCase();
        let atr = keys.join('-').replace(' ', '-');
        if (!design_tokens[lower]) design_tokens[lower] = {};
        return (design_tokens[lower][atr] = allTokenObj[key]);
      }
    });
  });

  return JSON.stringify(design_tokens, null, 2);
};

export const getTamaguiConfigFormat = ({
  dictionary: { allTokens },
  type,
  isVariables,
  prefix,
  extend,
}: TamaguiFormatObjType) => {
  const content = formatTokens({ tokens: allTokens, type, isVariables, prefix });

  if (type === 'all') return utils.getConfigTemplate(type, content, extend);
  return `module.exports = ${utils.unquoteFromKeys(content)}`;
};

export const getTamaguiThemeFormat = ({
  dictionary: { allTokens },
  type,
  isVariables,
  prefix,
  extend,
}: TamaguiFormatObjType) => {
  const content = formatTokens({ tokens: allTokens, type, isVariables, prefix });

  if (type === 'all') return utils.getThemeTemplate(type, content, extend);
  return `module.exports = ${utils.unquoteFromKeys(content)}`;
};

export const makeSdTamagui = ({
  type,
  formatType = 'js',
  isVariables = false,
  extend = true,
  source,
  transforms,
  buildPath,
  prefix,
  preprocessors,
  fileName,
  files,
  hooks,
}: SdTamaguiConfigType): Config => {
  if (type === undefined) {
    throw new Error('type is required');
  }

  if (formatType !== 'js' && formatType !== 'cjs') {
    throw new Error('formatType must be "js" or "cjs"');
  }

  if (!fileName)
    fileName = type !== 'all' ? `${type}.tamagui.${formatType}` : `tamagui.config.${formatType}`;

  return {
    preprocessors,
    source: utils.getConfigValue(source, ['tokens/**/*.json']),
    hooks: utils.getConfigValue(hooks, {
      formats: {
        tamaguiFormat: ({ dictionary }: { dictionary: Dictionary }) => {
          return getTamaguiConfigFormat({
            dictionary,
            formatType,
            isVariables,
            extend,
            prefix,
            type,
          });
        },
      },
    }),
    platforms: {
      [type !== 'all' ? `tamagui/${type}` : 'tamagui']: {
        transforms: utils.getConfigValue(transforms, ['attribute/cti', 'name/kebab']),
        buildPath: utils.getConfigValue(buildPath, 'build/web/'),
        files: utils.getConfigValue(files, [
          {
            destination: fileName,
            format: 'tamaguiFormat',
          },
        ]),
      },
    },
  };
};
