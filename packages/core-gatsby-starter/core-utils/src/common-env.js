"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEPLOY_ENV = void 0;
/**
 * Standard deploy environments
 *
 * LOCAL is for dev's machines
 * DEV is for the development branch (`dev`)
 * STAGING is normally based on the master branch, but deployed with staging / draft data
 * PRODUCTION is based on the release branch with production data (e.g. in published state)
 */
var DEPLOY_ENV;
(function (DEPLOY_ENV) {
    DEPLOY_ENV["LOCAL"] = "local";
    DEPLOY_ENV["DEV"] = "dev";
    DEPLOY_ENV["STAGING"] = "staging";
    DEPLOY_ENV["PRODUCTION"] = "production";
})(DEPLOY_ENV = exports.DEPLOY_ENV || (exports.DEPLOY_ENV = {}));
