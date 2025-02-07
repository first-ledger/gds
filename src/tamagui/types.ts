import { Dictionary } from 'style-dictionary/types/DesignToken';
import type { Config, PlatformConfig } from 'style-dictionary/types/Config';

export type SdObjType<T extends Record<string, any>> = {
  [P in keyof T]: Record<P, SdObjType<T>> | T[P];
};

export type TamaguiFormatType = 'js' | 'cjs';

export type SdTamaguiConfigType = {
  type: 'all' | string;
  formatType?: TamaguiFormatType;
  isVariables?: boolean;
  source?: Config['source'];
  preprocessors?: Config['preprocessors'];
  transforms?: PlatformConfig['transforms'];
  buildPath?: PlatformConfig['buildPath'];
  prefix?: PlatformConfig['prefix'];
  extend?: boolean;
};

export type TailwindFormatObjType = Pick<
  SdTamaguiConfigType,
  'type' | 'isVariables' | 'prefix' | 'extend'
> & {
  dictionary: Dictionary;
  formatType: TamaguiFormatType;
};
