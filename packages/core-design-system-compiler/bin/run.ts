import { compile } from '../src/compile.js';
import { loadDotEnv } from '@newrade/core-node-utils';
import { Env, ENV } from '../types/dot-env.js';
import path from 'path';
import packageJson from '../package.json';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '..', '.env'),
  packageName: packageJson.name,
  printEnvVariables: true,
});

compile({
  figmaFile: env.FIGMA_FILE,
  figmaToken: env.FIGMA_TOKEN,
  inputColorThemeNamespace: true,
  outputDir: path.join(__dirname, '..', 'figma-export'),
  outputColorNamespace: '',
});
