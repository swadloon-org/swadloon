import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { compile } from '../src/compile.js';

describe(`${compile} command`, () => {
  it('should produce the correct color objects from reference figma tokens', () => {
    const cmd = spawnSync(`yarn nr figma-sync --test`, {
      cwd: process.cwd(),
      shell: getShellForPlatform(),
      stdio: ['inherit', 'inherit', 'inherit'],
      env: process.env,
    });

    const figmaColorJsonFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-colors.json'),
      { encoding: 'utf8' }
    );

    expect(figmaColorJsonFile).toMatchSnapshot();

    const figmaColorCssFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-colors.css'),
      { encoding: 'utf8' }
    );

    expect(figmaColorCssFile).toMatchSnapshot();

    const figmaColorScssFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-colors.scss'),
      { encoding: 'utf8' }
    );

    expect(figmaColorScssFile).toMatchSnapshot();

    const figmaColorTsFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-colors.ts'),
      { encoding: 'utf8' }
    );

    expect(figmaColorTsFile).toMatchSnapshot();
  });
});
