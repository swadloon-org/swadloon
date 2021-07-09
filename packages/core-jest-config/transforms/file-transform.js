const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
// https://jestjs.io/docs/webpack
module.exports = {
  process(src, filename) {
    return `export default ${JSON.stringify(path.basename(filename))};`;
  },
};
