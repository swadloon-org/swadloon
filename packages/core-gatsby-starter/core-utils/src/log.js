"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.LOG_LEVEL = exports.scriptLog = void 0;
const chalk_1 = __importDefault(require("chalk"));
function scriptLog(message) {
    console.log(`${chalk_1.default.blue(`[scripts]`)} ${message}`);
}
exports.scriptLog = scriptLog;
var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL[LOG_LEVEL["INFO"] = 0] = "INFO";
    LOG_LEVEL[LOG_LEVEL["ERROR"] = 1] = "ERROR";
})(LOG_LEVEL = exports.LOG_LEVEL || (exports.LOG_LEVEL = {}));
function log(message, { chalkColor = 'yellow', toolName, noNewline, level = LOG_LEVEL.INFO, }) {
    // @ts-ignore
    const errorTemplate = `${chalk_1.default[chalkColor](`[${toolName || 'tool'}]`)} ${chalk_1.default.red(message)}`;
    // @ts-ignore
    const infoTemplate = `${chalk_1.default[chalkColor](`[${toolName || 'tool'}]`)} ${message}`;
    const usedTemplate = level === LOG_LEVEL.INFO ? infoTemplate : errorTemplate;
    if (noNewline) {
        process.stdout.write(usedTemplate);
        return;
    }
    console.log(usedTemplate);
}
exports.log = log;
