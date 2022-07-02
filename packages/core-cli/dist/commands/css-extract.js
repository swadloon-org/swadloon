"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _coreCssExtractor = require("@newrade/core-css-extractor");
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class CssExtract extends _baseCommandJs.BaseCommand {
    static description = "Create CSS tokens (plain .css files) from Vanilla-extract styles definition files (*.css.ts)";
    static examples = [
        `$ nr css-extract`
    ];
    static args = [];
    static flags = {};
    constructor(argv, config){
        super(argv, config, {
            name: "css-extract"
        });
    }
    async run() {
        this.log(`loading .env in ${process.cwd()}`);
        const env = (0, _coreNodeUtils).loadDotEnv({
            schema: _coreCssExtractor.Env,
            dotEnvPath: ".env",
            packageName: "core-cli"
        });
        this.log(`CSS_EXTRACTOR_ENTRIES_GLOB: ${env.CSS_EXTRACTOR_ENTRIES_GLOB}`);
        this.log(`CSS_EXTRACTOR_OUTPUT_PATH: ${env.CSS_EXTRACTOR_OUTPUT_PATH}`);
        const { args , flags  } = await this.parse(CssExtract);
        const command = `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/webpack/bin/webpack --config ../core-css-extractor/webpack.prod.config.ts`;
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
            if (/error/gi.test(stderr)) {
                this.logError(`${stderr}`);
                throw new Error(stderr);
            }
            this.log(`${stderr}`);
        }
        this.log(`finished`);
    }
}
exports.default = CssExtract;

//# sourceMappingURL=css-extract.js.map