import StyleDictionaryModule from 'style-dictionary';
import pkg from '../../dist/src/index.js';
const { makeSdTailwindConfig } = pkg;

const PREFIX = 'FLDS-';
const path = 'styles/flds';
const file = 'static/first-ledger.json';

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

run();
