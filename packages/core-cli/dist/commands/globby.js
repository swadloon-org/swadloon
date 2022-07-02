"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _glob = _interopRequireDefault(require("glob"));
var _baseCommandJs = require("../base-command.js");
class Globby extends _baseCommandJs.BaseCommand {
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
    constructor(argv, config){
        super(argv, config, {
            name: "globby"
        });
    }
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