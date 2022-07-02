"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class Depcheck extends _baseCommandJs.BaseCommand {
    static description = "Shortcut to run depcheck";
    static examples = [
        `$ nr depcheck`
    ];
    static args = [
        {
            name: "args"
        }
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "depcheck"
        });
    }
    async run() {
        const { args  } = await this.parse(Depcheck);
        this.log(`running in ${process.cwd()}`);
        const command = (0, _childProcess).spawnSync(`yarn depcheck ${args.args || ""}`, {
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: [
                "inherit",
                "pipe",
                "pipe"
            ],
            env: process.env
        });
        if (command.stdout.toString().length) {
            if (/Missing/gi.test(command.stdout.toString())) {
                this.error(command.stdout.toString());
            }
            if (/Unused/gi.test(command.stdout.toString())) {
                this.logWarn(command.stdout.toString());
                return;
            }
            this.log(command.stdout.toString());
        }
        if (command.stderr.toString().length) {
            if (/DeprecationWarning/gi.test(command.stderr.toString())) {
                return;
            }
            this.logError(command.stderr.toString());
            this.error(command.stderr.toString());
        }
    }
}
exports.default = Depcheck;

//# sourceMappingURL=depcheck.js.map