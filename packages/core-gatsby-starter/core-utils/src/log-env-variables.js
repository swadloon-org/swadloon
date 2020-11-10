"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEnvVariables = void 0;
const log_1 = require("./log");
function logEnvVariables({ packageName, env }) {
    log_1.log(`APP_ENV is ${env.APP_ENV}`, {
        toolName: 'mir-website',
    });
    log_1.log(`APP_URL is ${env.APP_URL}`, {
        toolName: 'mir-website',
    });
}
exports.logEnvVariables = logEnvVariables;
