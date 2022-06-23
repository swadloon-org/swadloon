"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _debug = _interopRequireDefault(require("debug"));
var _glob = _interopRequireDefault(require("glob"));
var _logUtilitiesJs = require("../utilities/log.utilities.js");
class Globby extends _core.Command {
    log = (0, _debug).default(`${_logUtilitiesJs.NS}:globby`);
    logWarn = (0, _debug).default(`${_logUtilitiesJs.NS}:globby:warn`);
    logError = (0, _debug).default(`${_logUtilitiesJs.NS}:globby:error`);
    static description = "Execute globby as CLI";
    static examples = [
        `$ nr globby`
    ];
    static args = [
        {
            name: "args"
        }
    ];
    static flags = {};
    async run() {
        const { args , flags  } = await this.parse(Globby);
        this.log(`globbing: ${args.args}`);
        (0, _glob).default(args.args.toString(), (error, files)=>{
            if (error) {
                this.logWarn(`error: ${error}`);
            }
            this.log(`result: ${files.join("\n")}`);
        });
    }
}
exports.default = Globby;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=globby.js.map