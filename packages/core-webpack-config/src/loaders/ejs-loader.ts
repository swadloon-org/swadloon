// @ts-nocheck
import loaderUtils from 'loader-utils';
import _ from 'lodash';

function getOptions(context: { options: { ejsLoader: any } }) {
  if (context.options && context.options.ejsLoader) {
    return context.options.ejsLoader;
  }
  return {};
}

export function ejsLoader(source: string) {
  if (this.cacheable) {
    this.cacheable();
  }
  const query = this.query !== '' ? loaderUtils.parseQuery(this.query) : '';
  const options = getOptions(this);

  ['escape', 'interpolate', 'evaluate'].forEach(function (templateSetting: string) {
    const setting = query[templateSetting];
    if (_.isString(setting)) {
      query[templateSetting] = new RegExp(setting, 'g');
    }
  });

  const template = _.template(source, _.extend({}, query, options));
  return 'module.exports = ' + template;
}
