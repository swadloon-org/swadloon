import { spawnSync } from 'child_process';
import { extract } from '../src/extract';
import fs from 'fs';
import path from 'path';

describe(`${extract} command`, () => {
  it('should produce the correct tokens from the figma reference file (https://www.figma.com/file/Hcc7o8UnlnL6UOaVDnBhpm/integration-test?node-id=2233%3A5341)', () => {
    const cmd = spawnSync(`yarn nr figma-sync --test`, {
      cwd: process.cwd(),
      shell: true,
      stdio: ['inherit', 'inherit', 'inherit'],
      env: process.env,
    });

    const figmaColorJsonFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-color.json'),
      { encoding: 'utf8' }
    );

    expect(figmaColorJsonFile).toMatchSnapshot();

    const figmaColorCssFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-color.css'),
      { encoding: 'utf8' }
    );

    expect(figmaColorCssFile).toMatchSnapshot();

    const figmaColorScssFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-color.scss'),
      { encoding: 'utf8' }
    );

    expect(figmaColorScssFile).toMatchSnapshot();

    const figmaColorTsFile = fs.readFileSync(
      path.resolve(process.cwd(), 'figma-export', 'figma-color.ts'),
      { encoding: 'utf8' }
    );

    expect(figmaColorTsFile).toMatchSnapshot();
  });
});
