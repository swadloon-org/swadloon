"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _core = require("@oclif/core");
var _chalk = _interopRequireDefault(require("chalk"));
var _logUtilities = require("./utilities/log.utilities");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BaseCommand extends _core.Command {
    chalk = _chalk.default;
    log = _logUtilities.log;
    logWarn = _logUtilities.logWarn;
    logError = _logUtilities.log;
    logCommand = _logUtilities.logCommand;
    logDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}`);
    logWarnDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:warn`);
    logErrorDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:error`);
    constructor(argv, config, commandConfig){
        super(argv, config);
        if (commandConfig === null || commandConfig === void 0 ? void 0 : commandConfig.name) {
            this.logDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:${commandConfig.name}`);
            this.logWarnDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:${commandConfig.name}:warn`);
            this.logErrorDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:${commandConfig.name}:error`);
        }
    }
    async run() {}
}
exports.BaseCommand = BaseCommand;

//# sourceMappingURL=base-command.js.map