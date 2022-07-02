"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _chalk = _interopRequireDefault(require("chalk"));
var _micromatch = _interopRequireDefault(require("micromatch"));
var _baseCommandJs = require("../base-command.js");
class Micromatch extends _baseCommandJs.BaseCommand {
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
    constructor(argv, config){
        super(argv, config, {
            name: "micromatch"
        });
    }
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