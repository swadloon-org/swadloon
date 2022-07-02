import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import chalk from 'chalk';
import debug from 'debug';
import * as Figma from 'figma-js'; // DON'T import Figma from 'figma-js'

import {
  defaultOutputColorFiles,
  FileType,
  PathExport,
} from './constants/figma-colors.constants.js';
import { exportCssColorTokens } from './exporters/colors-css-exporter.js';
import { exportJSONColorTokens } from './exporters/colors-json-exporter.js';
import { exportScssColorTokens } from './exporters/colors-scss-exporter.js';
import { exportTSColorTokens } from './exporters/colors-ts-exporter.js';
import { extractColorsFromFigmaStyles } from './extractors/colors-extractor.js';
import { appendFile, createExportFile, createExportJSONFile } from './service/file.service.js';
import { log, logConfig, logError, logErrorConfig, logWarn } from './service/logging.service.js';

const ___filename = fileURLToPath(import.meta.url);
const ___dirname = dirname(___filename);

/**
 * Options for the extract function
 */
export type ExtractOptions = {
  extractorName: string;
  version: string;
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
  inputColorThemeNamespace: boolean;
  /**
   * Absolute path to the output directory
   */
  outputDir: string;
  /**
   * Filenames of export files (for each format)
   */
  outputColorFiles?: PathExport;
  /**
   * Export namespace of colors
   * @example 'my-org' would mean that colors are exported with a prefix '--my-org-light-primary-500: red'
   * @default '""'
   */
  outputColorNamespace?: string;
  /**
   * Color format for css and scss outputs
   * @default '"hsla"'
   */
  outputCSSColorFormat?: 'rgba' | 'hsla' | 'hex';
  debug?: boolean;
  /**
   * Enable or disable the version tag in output files
   */
  outputVersion?: boolean;
  /**
   * Enable or disable the date in outputfiles
   */
  outputDate?: boolean;
};

export const defaultExtractOptions: ExtractOptions = {
  extractorName: 'core-figma-extractor',
  version: '1',
  inputColorThemeNamespace: true,
  outputDir: path.join(___dirname, '..', 'figma-export'),
  outputColorFiles: defaultOutputColorFiles,
  outputColorNamespace: '',
  outputCSSColorFormat: 'hsla',
  outputVersion: true,
  outputDate: true,
};

/**
 * High level function that retrieve style nodes from a figma file and
 * write generated tokens to disk
 */
export async function extract(options: ExtractOptions) {
  debug.enable('nr:core-figma-extractor:*');

  /**
   *
   * Options validation
   *
   */

  if (!options.figmaFile) {
    logErrorConfig('no figma file specified');
    throw Error('no figma file specified');
  }

  if (!options.figmaToken) {
    logErrorConfig('no figma token specified');
    throw Error('no figma token specified');
  }

  const validatedOptions = { ...defaultExtractOptions, ...options } as Required<ExtractOptions>;

  logConfig(`export directory: ${chalk.blueBright(validatedOptions.outputDir)}`);
  logConfig(
    `export color files: ${Object.values(validatedOptions.outputColorFiles)
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
      personalAccessToken: validatedOptions.figmaToken,
    });

    log(
      `connecting to Figma API and loading file id: ${chalk.blueBright(
        validatedOptions.figmaFile
      )}...`
    );

    const fileData = await client.file(validatedOptions.figmaFile, { depth: 1 });

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

    fs.mkdirSync(validatedOptions.outputDir, { recursive: true });

    Object.keys(validatedOptions.outputColorFiles).forEach((fileType: string) => {
      const type = fileType as FileType;
      const filePath = path.join(
        validatedOptions.outputDir,
        validatedOptions.outputColorFiles[fileType as FileType]
      );

      log(`creating file: ${chalk.blueBright(filePath)}`);

      if (type === FileType.JSON) {
        createExportJSONFile({
          path: filePath,
        });
        return;
      }
      createExportFile({ path: filePath }, validatedOptions);
    });

    /**
     *
     * Extracting styles
     *
     */

    log(chalk.greenBright(`extraction starting 🚀 `));

    log(`retrieving file styles...`);

    const stylesData = await client.fileStyles(validatedOptions.figmaFile);

    if (!stylesData.data.meta.styles?.length) {
      logError(`no styles found, aborting`);
      return;
    }

    log(`retrieving file styles\t ${chalk.green('ok')}`);

    log(`found ${stylesData.data.meta.styles.length} file styles`);

    /**
     * Exporting raw styles
     */

    const figmaStylesFilePath = path.join(validatedOptions.outputDir, 'figma-styles.json');
    log(`creating file: ${chalk.blueBright(figmaStylesFilePath)}`);

    createExportJSONFile({
      path: figmaStylesFilePath,
      data: JSON.stringify(stylesData.data.meta.styles, null, 2),
    });

    log(`extracting color styles...`);

    const colorTokens = await extractColorsFromFigmaStyles(
      stylesData.data.meta.styles,
      validatedOptions
    );

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

    const cssColorTokens = exportCssColorTokens(colorTokens, options);
    const scssColorTokens = exportScssColorTokens(colorTokens, options);
    const tsColorTokens = exportTSColorTokens(colorTokens, options);
    const jsonColorTokens = exportJSONColorTokens(colorTokens, options);

    log(`extracting colors:\t ${chalk.green('done')}`);

    log(`writing tokens to files...`);

    appendFile({
      path: path.join(validatedOptions.outputDir, validatedOptions.outputColorFiles.CSS),
      data: cssColorTokens,
    });

    appendFile({
      path: path.join(validatedOptions.outputDir, validatedOptions.outputColorFiles.SCSS),
      data: scssColorTokens,
    });

    appendFile({
      path: path.join(validatedOptions.outputDir, validatedOptions.outputColorFiles.TS),
      data: tsColorTokens,
    });

    appendFile({
      path: path.join(validatedOptions.outputDir, validatedOptions.outputColorFiles.JSON),
      data: jsonColorTokens,
    });

    log(`writing files done:\t ${chalk.green('done')}`);
  } catch (error: any) {
    logError(`error occured: ${error.message}`);
  }
}
