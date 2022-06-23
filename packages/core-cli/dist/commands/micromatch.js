"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _chalk = _interopRequireDefault(require("chalk"));
var _debug = _interopRequireDefault(require("debug"));
var _micromatch = _interopRequireDefault(require("micromatch"));
var _logUtilitiesJs = require("../utilities/log.utilities.js");
class Micromatch extends _core.Command {
    log = (0, _debug).default(`${_logUtilitiesJs.NS}:micromatch`);
    logWarn = (0, _debug).default(`${_logUtilitiesJs.NS}:micromatch:warn`);
    logError = (0, _debug).default(`${_logUtilitiesJs.NS}:micromatch:error`);
    static description = "Execute micromatch as CLI";
    static examples = [
        `$ nr micromatch`
    ];
    static args = [
        {
            name: "path"
        },
        {
            name: "pattern"
        }
    ];
    static flags = {};
    async run() {
        const { args , flags  } = await this.parse(Micromatch);
        this.log(`path: ${_chalk.default.blueBright(args.path)}, pattern: ${_chalk.default.bgBlue(args.pattern)}`);
        // const format = (str: string) => str.replace(/^\.\//, '');
        const result = _micromatch.default.isMatch(args.path, args.pattern);
        this.log(`match: ${result ? _chalk.default.green(result) : _chalk.default.red(result)}`);
    }
}
exports.default = Micromatch;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=micromatch.js.map