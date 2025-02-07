import { camelCase } from 'change-case';
import type { SdObjType, SdTamaguiConfigType } from './types';

export const addHyphen = (str: string) => {
  return str.endsWith('-') ? str : `${str}-`;
};

export const makeSdObject = <T extends readonly string[]>(
  obj: SdObjType<{ [key: string]: any }>,
  keys: T,
  value: string
): void => {
  const lastIndex = keys.length - 1;
  for (let i = 0; i < lastIndex; ++i) {
    const key = camelCase(keys[i]);
    if (!(key in obj)) {
      obj[key] = {};
    }
    obj = obj[key];
  }

  // https://v2.tailwindcss.com/docs/upgrading-to-v2#update-default-theme-keys-to-default
  if (keys[lastIndex] === 'DEFAULT') {
    obj[keys[lastIndex]] = value;
  } else {
    obj[camelCase(keys[lastIndex])] = value;
  }
};

export const getConfigValue = <T>(value: T | undefined, defaultValue: T) => {
  if (value === undefined) {
    return defaultValue;
  }

  return value;
};

const joinSpace = (value: string, spaceNum: number, type?: string) => {
  const space = ' '.repeat(spaceNum);

  if (type !== 'all') {
    return value;
  }

  return space + value;
};

export const unquoteFromKeys = (json: string, type?: string, spaceNum = 4) => {
  const result = json.replace(/"(\\[^]|[^\\"])*"\s*:?/g, (match) => {
    if (/[0-9]/.test(match) && /[a-zA-Z]/.test(match)) {
      return match;
    }
    if (/:$/.test(match)) {
      return joinSpace(match.replace(/^"|"(?=\s*:$)/g, ''), spaceNum, type);
    }

    return match;
  });

  return result.replace(/}/g, (match) => joinSpace(match, spaceNum, type));
};

export const getTemplateConfigByType = (
  type: SdTamaguiConfigType['type'],
  content: string,
  extend: SdTamaguiConfigType['extend']
) => {
  const extendTheme = extend
    ? `theme: {
    extend: ${unquoteFromKeys(content, type, 4)},
  },`
    : `theme: ${unquoteFromKeys(content, type, 2)},`;

  const getTemplateConfig = () => {
    let config = `{
  ${extendTheme}`;
    config += '\n}';

    return config;
  };

  const configs = `
    import { createTamagui, createTokens, createThemes } from 'tamagui';

    // Import Colors
    import * as Light from '../Light/tokens';
    import * as Dark from '../Dark/tokens';
    import * as Dire from '../DIRE/tokens';

    // Define all acceptable variable token names
    const colors = createTokens({
      light: { ...Light, Dire },
      dark: { ...Dark, Dire },
    });

    // Create themes based on the color tokens
    const themes = createThemes({
      light: { ...colors.light },
      dark: { ...colors.dark },
    });

    // Create Tamagui config
    const tamaguiConfig = createTamagui({
      themes,
      tokens: {
        color: colors,
      },
    });

    export default tamaguiConfig;
  `;
  /*   ${getTemplateConfig()} */

  return configs;
};

export default {
  makeSdObject,
  addHyphen,
  getTemplateConfigByType,
  unquoteFromKeys,
  getConfigValue,
};
