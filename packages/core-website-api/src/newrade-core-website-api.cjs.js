/**
 * CommonJS stub to consume ESNext modules for NodeJS.
 *
 * It uses @babel/register to compile modules on the
 * fly for the current version of NodeJS.
 */

// @ts-nocheck
// @ts-ignore
Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
});
(0, tslib_1.__exportStar)(require('./index'), exports);
