import { makeSdConfig } from '../../dist/src/index.js';
import path from 'path';

const outputDir = path.join(__dirname, '..', '..', 'styles/wds');
const file = path.join(__dirname, '..', '..', 'static/wallet.json');

const sdConfig = makeSdConfig({
  prefix: 'WDS',
  themes: ['Globals', 'Dark', 'Light'],
  variants: ['Default', 'Accent', 'Red', 'Green'],
  typography: [],
  platforms: ['web', 'ios', 'android'],
  outputDir,
  file,
});

const run = async () => {
  await sdConfig.build();
};

run();
