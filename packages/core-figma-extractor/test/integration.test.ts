import fs from 'fs';
import path from 'path';

import { jest } from '@jest/globals';

describe(`figma-sync command`, () => {
  it('should produce the correct tokens from the figma reference file (https://www.figma.com/file/Hcc7o8UnlnL6UOaVDnBhpm/integration-test?node-id=2233%3A5341)', async () => {
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
