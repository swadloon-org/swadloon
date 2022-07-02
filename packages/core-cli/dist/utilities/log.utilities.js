"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enableDebug = enableDebug;
exports.logCommand = logCommand;
exports.log = log;
exports.logWarn = logWarn;
exports.debugInstance = exports.NS = void 0;
var _debug = _interopRequireDefault(require("debug"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const NS = "nr:cli";
exports.NS = NS;
const debugInstance = _debug.default;
exports.debugInstance = debugInstance;
function enableDebug() {
    if (!process.env.DEBUG) {
        debugInstance.enable("nr:cli*");
    }
    /**
   * Enable default logging
   */ if (process.env.DEBUG) {
        debugInstance.enable(process.env.DEBUG);
    }
}
function logCommand(message, ...args) {
    process.stdout.write(`－  ${message}\n`);
}
function log(message, ...args) {
    process.stdout.write(`👾  ${message}\n`);
}
function logWarn(input) {
    if (input instanceof Error) {
        process.stdout.write(`👾  ${input}\n`);
        return input;
    }
    process.stdout.write(`👾  ${input}\n`);
    return input;
}

//# sourceMappingURL=log.utilities.js.map