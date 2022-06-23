"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _core = require("@oclif/core");
var _coreNodeUtils = require("@newrade/core-node-utils");
var _logUtilitiesJs = require("../utilities/log.utilities.js");
class Gatsby extends _core.Command {
    log = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:gatsby`);
    logWarn = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:gatsby:warn`);
    logError = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:gatsby:error`);
    static description = "Shortcut to run Gatsby with typescript (ts-node)";
    static examples = [
        `$ nr gatsby build`
    ];
    static args = [
        {
            name: "command"
        }
    ];
    static flags = {
        "no-uglify": _core.Flags.boolean({
            description: "gatsby --no-uglify flag"
        }),
        verbose: _core.Flags.boolean({
            description: "gatsby verbose command"
        }),
        inspect: _core.Flags.boolean({
            description: "gatsby inspect command"
        }),
        port: _core.Flags.string({
            char: "p",
            description: "gatsby port option"
        }),
        host: _core.Flags.string({
            char: "H",
            description: "gatsby host option"
        })
    };
    async run() {
        (0, _logUtilitiesJs).enableDebug();
        const { args , flags  } = await this.parse(Gatsby);
        const command = [
            `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/gatsby/dist/bin/gatsby.js`,
            `${args.command || ""}`,
            `${flags["no-uglify"] ? "--no-uglify" : ""}`,
            `${flags.verbose ? "--verbose" : ""}`,
            `${flags.inspect ? "--inspect" : ""}`,
            `${flags.port ? `-p ${flags.port}` : ""}`,
            `${flags.host ? `-H ${flags.host}` : ""}`, 
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
            // gatsby cli does not use stderr correctly, so we have to parse stdout and find occurence of errors
            //
            const chunkString = chunk.toString();
            if (/error\s/gi.test(chunkString)) {
                process.stderr.write(chunk);
                if (!/(\.gitkeep|DeprecationWarning|webpack\.cache\.PackFileCacheStrategy)/gi.test(chunkString)) {
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
exports.default = Gatsby;

//# sourceMappingURL=gatsby.js.map