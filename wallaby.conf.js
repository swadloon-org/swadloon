const path = require('path');


module.exports = function (wallaby) {

  // process.env.NODE_PATH += path.delimiter + path.join(wallaby.localProjectDir, '..', '..', 'node_modules');

  return {
    autoDetect: true,
    // files: [
    //   'src/**/*.ts?(x)'
    // ],
    // tests: [
    //   'test/**/*.test.ts?(x)'
    // ],
    // compilers: {
    //   '**/*.ts?(x)': wallaby.compilers.typeScript({ isolatedModules: true })
    // }
  };
};