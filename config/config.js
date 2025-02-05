const esbuild = require('esbuild');
const { execSync } = require('child_process');

const Entries = require('./filepath');
const path = require('path');

module.exports = async () => ({
  logLevel: 'info',
  entryPoints: ['src/index.ts'],
  outdir: 'dist/src',
  tsconfig: './config/tsconfig.build.json',
  format: 'cjs',
  minify: true,
  bundle: true,
  plugins: [
    {
      name: 'TypeScriptDeclarationsPlugin',
      setup(build) {
        build.onEnd((result) => {
          if (result.errors.length > 0) return console.error(result);
          execSync('tsc -P ./config/tsconfig.build.json --emitDeclarationOnly');
        });
      },
    },
    {
      name: 'rebuild-notify',
      setup(build) {
        build.onEnd((result) => {
          console.log(`build ended with ${result.errors.length} errors`);
        });
      },
    },
  ],
});
