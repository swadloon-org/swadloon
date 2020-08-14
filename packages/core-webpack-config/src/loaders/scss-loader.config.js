const path = require('path');

const postCssLoader = require('../post-css/post-css.loader');
const configPaths = require('../../../config-paths');
const scssLoader = require('./scss.loader');

module.exports = [postCssLoader, scssLoader];
