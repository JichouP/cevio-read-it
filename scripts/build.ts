// eslint-disable-next-line import/no-extraneous-dependencies
import esbuild from 'esbuild';
import copyPlugin from './plugins/copyPlugin';
import zipPlugin from './plugins/zipPlugin';

const outDir = 'out';
const distDir = `dist`;
const assetDir = 'public';

esbuild.build({
  entryPoints: {
    background: 'src/background/index.ts',
  },
  platform: 'node',
  bundle: true,
  outdir: distDir,
  minify: true,
  plugins: [
    copyPlugin(assetDir, distDir),
    zipPlugin(distDir, outDir, `cevio-read-it.zip`),
  ],
});
