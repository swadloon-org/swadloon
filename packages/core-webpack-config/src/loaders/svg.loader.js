module.exports = {
  test: /\.(svg)$/,
  use: [
    {
      loader: 'svg-react-loader',
    },
    {
      loader: 'svgo-loader',
      options: {
        plugins: [
          { convertPathData: false },
          { convertShapeToPath: false },
          { mergePaths: false },
          { removeViewBox: false },
          { cleanupIDs: false },
        ],
      },
    },
  ],
};
