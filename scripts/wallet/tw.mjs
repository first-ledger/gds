import StyleDictionaryModule from 'style-dictionary';
import pkg from '../../dist/src/index.js';
const { makeSdTailwindConfig, buildThemes } = pkg;

const PREFIX = 'wds-';

const path = 'styles/wds';
const file = 'static/wallet.json';

const sdConfig = makeSdTailwindConfig({
  source: [file],
  type: 'all',
  formatType: 'js',
  isVariables: true,
  prefix: PREFIX,
  extend: true,
  transforms: ['attribute/cti', 'name/kebab'],
  buildPath: `${path}/tailwind/`,
  tailwind: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: ['typography', 'container-queries'],
  },
});

const run = async () => {
  const StyleDictionary = new StyleDictionaryModule(sdConfig);

  await StyleDictionary.hasInitialized;
  await StyleDictionary.buildAllPlatforms();
};

const build = async () => {
  const PREFIX = 'WDS';
  const modes = ['Globals', 'Dark', 'Light'];
  const submodes = ['Default', 'Accent', 'Red', 'Green'];
  const typography_modes = [];

  const path = 'styles/wds/tailwind';
  const file = 'static/wallet.json';

  await buildThemes({
    prefix: PREFIX,
    modes,
    submodes,
    typography_modes,
    path,
    file,
  });
};

run().then(() => build());
