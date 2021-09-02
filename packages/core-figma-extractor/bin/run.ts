import { extract } from '../src/extract';
import { loadDotEnv } from '@newrade/core-utils';
import { Env, ENV } from '../types/dot-env';
import path from 'path';
import packageJson from '../package.json';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '..', '.env'),
  packageName: packageJson.name,
  printEnvVariables: true,
});

extract({
  figmaFile: env.FIGMA_FILE,
  figmaToken: env.FIGMA_TOKEN,
  outputDir: path.join(__dirname, '..', 'figma-export'),
  outputColorNamespace: '',
});
