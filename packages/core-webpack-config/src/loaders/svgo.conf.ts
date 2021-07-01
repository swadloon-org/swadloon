/**
 * https://github.com/svg/svgo#configuration
 */
export const svgoConfig = {
  plugins: [
    { removeStyleElement: false },
    { minifyStyles: false },
    { inlineStyles: false },
    { mergeStyles: false },
    { convertPathData: false },
    { convertShapeToPath: false },
    { mergePaths: false },
    { removeViewBox: false },
    { cleanupIDs: false },
    { prefixIds: false },
  ],
};
