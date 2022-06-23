"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _core = require("@oclif/core");
var _coreNodeUtils = require("@newrade/core-node-utils");
var _logUtilitiesJs = require("../utilities/log.utilities.js");
class Webpack extends _core.Command {
    log = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:webpack`);
    logWarn = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:webpack:warn`);
    logError = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:webpack:error`);
    static description = "Shortcut to run webpack with typescript (ts-node)";
    static examples = [
        `$ nr webpack serve --config webpack.dev.config.ts`
    ];
    static args = [
        {
            name: "command"
        }
    ];
    static flags = {
        config: _core.Flags.string({
            char: "c",
            description: "path to config file (.ts)"
        }),
        /**
     * @since webpack-dev-server@v4
     * @see https://webpack.js.org/configuration/dev-server/#overlay
     */ ["no-client-overlay"]: _core.Flags.boolean({
            description: "disable the full-screen overlay in the browser when there are compiler errors or warnings"
        }),
        /**
     * debugging
     */ ["inspect-brk"]: _core.Flags.boolean({
            description: "enable node --inspect-brk flag"
        })
    };
    async run() {
        (0, _logUtilitiesJs).enableDebug();
        const { args , flags  } = await this.parse(Webpack);
        const command = [
            `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node ${flags["inspect-brk"] ? `--inspect-brk` : ""} -r ts-node/register ../../node_modules/webpack/bin/webpack`,
            args.command || "",
            `${flags["no-client-overlay"] ? `--no-client-overlay` : ""}`,
            `--config ${flags.config}`, 
        ].join(" ");
        this.log(`running: ${command}`);
        this.log(`NODE_ENV is: ${process.env.NODE_ENV}`);
        const cmd = (0, _childProcess).spawn(command, {
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: [
                "inherit",
                "pipe",
                "pipe"
            ],
            env: process.env
        });
        let errors = [];
        const handleData = (chunk)=>{
            //
            //
            //
            const chunkString = chunk.toString();
            if (/error\s/gi.test(chunkString)) {
                process.stderr.write(chunk);
                if (!/(\.error)/gi.test(chunkString)) {
                    errors.push(chunkString);
                }
                return;
            }
            process.stdout.write(chunk);
        };
        const handleError = (error)=>{
            errors.push(error.toString());
            process.stderr.write(error.toString());
        };
        const handleClose = (args)=>{
            if (errors.length) {
                this.logError(`finished with ${errors.length} errors`);
                errors.forEach((error, errorIndex)=>{
                    this.logError(`error #${errorIndex}:`);
                    process.stderr.write(`\t${error.toString()}`);
                });
                process.exit(1);
            }
            this.log(`finished`);
            process.exit(0);
        };
        cmd.stdout.on("data", handleData);
        cmd.stderr.on("data", handleData);
        cmd.stdout.on("error", handleError);
        cmd.stderr.on("error", handleError);
        cmd.stdout.on("close", handleClose);
        cmd.stderr.on("close", handleClose);
    }
}
exports.default = Webpack;

//# sourceMappingURL=webpack.js.map