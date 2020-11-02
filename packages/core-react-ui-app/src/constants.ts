import { ENV } from '../types/dot-env';

declare var GRAPH_CMS_AUTH_TOKEN_MIR: ENV['GRAPH_CMS_AUTH_TOKEN_MIR'];
declare var GRAPH_CMS_API_URL_MIR: ENV['GRAPH_CMS_API_URL_MIR'];

// values are set in define.plugin.conf.js

export const CLIENT_CONFIG: ENV = {
  // tslint:disable:object-literal-shorthand
  GRAPH_CMS_AUTH_TOKEN_MIR: GRAPH_CMS_AUTH_TOKEN_MIR,
  GRAPH_CMS_API_URL_MIR: GRAPH_CMS_API_URL_MIR,
};
