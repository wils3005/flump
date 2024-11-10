import { build } from 'esbuild';
import { join } from 'node:path';

export const buildReactApp = async (x: string) => {
  if (!buildMap.has(x)) {
    const { outputFiles } = await build({
      entryPoints: [join(process.cwd(), 'lib', 'web', x)],
      bundle: true,
      write: false,
      format: 'iife',
    });

    buildMap.set(x, outputFiles[0].text);
  }

  return buildMap.get(x);
};

const buildMap = new Map();
