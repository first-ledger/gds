import { camelCase } from 'change-case';
import type { SdObjType, SdTailwindConfigType, TailwindOptions } from './types';

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
    const key = keys[i];
    if (!(key in obj)) {
      obj[key] = {};
    }
    obj = obj[key];
  }

  // https://v2.tailwindcss.com/docs/upgrading-to-v2#update-default-theme-keys-to-default
  if (keys[lastIndex] === 'DEFAULT') {
    obj[keys[lastIndex]] = value;
  } else {
    obj[keys[lastIndex]] = value;
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
  type: SdTailwindConfigType['type'],
  content: string,
  darkMode: TailwindOptions['darkMode'],
  tailwindContent: TailwindOptions['content'],
  extend: SdTailwindConfigType['extend'],
  plugins: string[]
) => {
  const extendTheme = `@theme inline {
     ${unquoteFromKeys(content, type, 2)}
     `;

  const getTemplateConfig = () => {
    let config = `
        @import "tailwindcss";

        @import "./Light/tokens.css";
        @import "./Dark/tokens.css";
        @import "./Globals/tokens.css";

        ${extendTheme}
      `;

    config += '\n}';

    return config;
  };

  return getTemplateConfig();
};

export default {
  makeSdObject,
  addHyphen,
  getTemplateConfigByType,
  unquoteFromKeys,
  getConfigValue,
};
