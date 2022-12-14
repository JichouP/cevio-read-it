/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import esbuild from 'esbuild';
import copyPlugin from './plugins/copyPlugin';

const distDir = `dist`;
const assetDir = 'public';

esbuild.build({
  entryPoints: {
    background: 'src/background/index.ts',
  },
  platform: 'node',
  bundle: true,
  outdir: distDir,
  watch: {
    onRebuild: (err, res) => {
      const now = `[${'\x1b[90m'}${new Date().toLocaleTimeString()}${'\x1b[39m'}]`;
      if (err) {
        return console.error(`${now} ${err}`);
      }
      if (res) {
        if (res.warnings.length) {
          console.log(`${now} ${res.warnings}`);
        }
        console.log(`${now} Rebuild successful!`);
      }
    },
  },
  plugins: [copyPlugin(assetDir, distDir)],
});
