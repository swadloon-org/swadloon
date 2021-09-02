import chalk from 'chalk';
import debug, { log } from 'debug';
import * as Figma from 'figma-js'; // DON'T import Figma from 'figma-js'
import fs from 'fs';
import path from 'path';
import { extractColorsFromFigmaStyles } from './extractors/colors-extractor';
import { exportCssColorTokens } from './exporters/colors-css-exporter';
import { FileType, defaultOutputColorFiles, PathExport } from './constants/figma-colors.constants';
import { createExportFile, createExportJSONFile } from './service/file.service';
import { logErrorConfig, logConfig, logError, logWarn } from './service/logging.service';
import { exportScssColorTokens } from './exporters/colors-scss-exporter';
import { exportTSColorTokens } from './exporters/colors-ts-exporter';
import { exportJSONColorTokens } from './exporters/colors-json-exporter';

/**
 * Options for the extract function
 */
export type ExtractOptions = {
  /**
   * API Token to connect to the Figma API
   */
  figmaToken?: string;
  /**
   * Id of the file
   */
  figmaFile?: string;
  /**
   * Whether colors use a theme convention
   * @example true would mean that colors are named like this: 'light/primary/500'
   * @default 'true'
   */
  inputColorThemeNamespace?: boolean;
  outputDir: string;
  outputColorFiles?: PathExport;
  /**
   * Export namespace of colors
   * @example 'my-org' would mean that colors are exported with a prefix '--my-org-light-primary-500: red'
   * @default '""'
   */
  outputColorNamespace: string;
};

/**
 * High level function that retrieve style nodes from a figma file and
 * write generated tokens to disk
 */
export async function extract({
  figmaFile,
  figmaToken,
  inputColorThemeNamespace = true,
  outputDir,
  outputColorFiles = defaultOutputColorFiles,
  outputColorNamespace = '',
}: ExtractOptions) {
  const options = {
    figmaFile,
    figmaToken,
    inputColorThemeNamespace,
    outputDir,
    outputColorFiles,
    outputColorNamespace,
  };
  /**
   *
   * Options validation
   *
   */

  if (!figmaFile) {
    logErrorConfig('no figma file specified');
    throw Error('no figma file specified');
  }

  if (!figmaToken) {
    logErrorConfig('no figma token specified');
    throw Error('no figma token specified');
  }

  logConfig(`export directory: ${chalk.blueBright(outputDir)}`);
  logConfig(
    `export color files: ${Object.values(outputColorFiles)
      .map((value) => chalk.blueBright(value))
      .join(', ')}`
  );

  try {
    /**
     *
     * Authentication
     *
     */

    const client = Figma.Client({
      personalAccessToken: figmaToken,
    });

    log(`connecting to Figma API and loading file id: ${chalk.blueBright(figmaFile)}...`);

    const fileData = await client.file(figmaFile, { depth: 1 });

    log(
      `found figma file with name: "${chalk.blueBright(
        fileData.data.name
      )}" with ${chalk.blueBright(fileData.data.document.children.length)} pages`
    );

    /**
     *
     * Preparing export files
     *
     */

    fs.mkdirSync(outputDir, { recursive: true });

    Object.keys(outputColorFiles).forEach((fileType: string) => {
      const type = fileType as FileType;
      const filePath = path.join(outputDir, outputColorFiles[fileType as FileType]);

      log(`creating file: ${chalk.blueBright(filePath)}`);

      if (type === FileType.JSON) {
        createExportJSONFile({
          path: filePath,
        });
        return;
      }
      createExportFile({ path: filePath });
    });

    /**
     *
     * Extracting styles
     *
     */

    log(chalk.greenBright(`extraction starting 🚀 `));

    log(`retrieving file styles...`);

    const stylesData = await client.fileStyles(figmaFile);

    if (!stylesData.data.meta.styles?.length) {
      logError(`no styles found, aborting`);
      return;
    }

    log(`retrieving file styles\t ${chalk.green('ok')}`);

    log(`found ${stylesData.data.meta.styles.length} file styles`);

    /**
     * Exporting raw styles
     */

    const figmaStylesFilePath = path.join(outputDir, 'figma-styles.json');
    log(`creating file: ${chalk.blueBright(figmaStylesFilePath)}`);

    createExportJSONFile({
      path: figmaStylesFilePath,
      data: JSON.stringify(stylesData.data.meta.styles, null, 2),
    });

    log(`extracting color styles...`);

    const colorTokens = await extractColorsFromFigmaStyles(stylesData.data.meta.styles, options);

    if (!colorTokens) {
      logError(`extracting colors failed ❌ `);
      throw new Error('extracting colors failed ❌ ');
    }

    const colorsNumber = Object.keys(colorTokens).length;

    if (!colorsNumber) {
      logWarn(`no colors were extracted ❌ `);
      return;
    }

    log(chalk(`found ${colorsNumber} colors`));

    /**
     * Exporting tokens
     */

    log(chalk(`found ${colorsNumber} colors`));

    exportCssColorTokens(colorTokens, path.join(outputDir, outputColorFiles.CSS));
    exportScssColorTokens(colorTokens, path.join(outputDir, outputColorFiles.SCSS));
    exportTSColorTokens(colorTokens, path.join(outputDir, outputColorFiles.TS));
    exportJSONColorTokens(colorTokens, path.join(outputDir, outputColorFiles.JSON));

    log(`extracting colors:\t ${chalk.green('done')}`);
  } catch (error: any) {
    logError(`error occured: ${error.message}`);
  }
}
