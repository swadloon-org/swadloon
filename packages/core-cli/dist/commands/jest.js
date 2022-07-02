"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _core = require("@oclif/core");
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class Jest extends _baseCommandJs.BaseCommand {
    static description = "Shortcut to run jest with typescript (ts-node)";
    static examples = [
        `$ nr jest`
    ];
    static args = [
        {
            name: "args"
        }
    ];
    static flags = {
        config: _core.Flags.string({
            description: "path to jest config file",
            default: "jest.config.ts"
        })
    };
    constructor(argv, config){
        super(argv, config, {
            name: "jest"
        });
    }
    async run() {
        const { args , flags  } = await this.parse(Jest);
        const command = [
            `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/jest/bin/jest`,
            `${flags.config ? "--config " + flags.config : ""}`,
            `${args.args || ""}`, 
        ].join(" ");
        this.log(`running: ${command}`);
        const cmd = (0, _childProcess).spawnSync(command, {
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: [
                "inherit",
                "inherit",
                "pipe"
            ],
            env: process.env
        });
        if (cmd.stderr && cmd.stderr.toString().length) {
            const stderr = cmd.stderr.toString();
            if (/FAIL/gi.test(stderr)) {
                this.logError(`${stderr}`);
                throw new Error(stderr);
            }
            this.log(`${stderr}`);
        }
    }
}
exports.default = Jest;

//# sourceMappingURL=jest.js.map