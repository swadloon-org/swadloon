/**
 * https://github.com/svg/svgo#configuration
 */
export const svgoConfig = {
  plugins: [
    { convertPathData: false },
    { convertShapeToPath: false },
    { mergePaths: false },
    { removeViewBox: false },
    { cleanupIDs: false },
    { prefixIds: false },
  ],
};
