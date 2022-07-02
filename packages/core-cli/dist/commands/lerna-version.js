"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _core = require("@oclif/core");
var _prettier = _interopRequireDefault(require("prettier"));
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class LernaVersion extends _baseCommandJs.BaseCommand {
    static description = "Wrapper for lerna version command, allowing to run version on specific packages";
    static examples = [
        `$ nr lerna-version`
    ];
    static args = [
        {
            name: "args"
        }
    ];
    static flags = {
        packages: _core.Flags.string({
            description: "packages glob to be included in lerna version bump, e.g. --packages=packages/*",
            required: true
        })
    };
    constructor(argv, config){
        super(argv, config, {
            name: "lerna"
        });
    }
    async run() {
        const { args , flags  } = await this.parse(LernaVersion);
        this.log(`running in ${process.cwd()}`);
        try {
            var ref, ref1;
            /**
       *
       * Prettier
       *
       */ const prettierOptions = await _prettier.default.resolveConfig(_path.default.join(process.cwd(), ".prettierrc"), {
                useCache: false,
                editorconfig: true
            });
            function format(str) {
                return _prettier.default.format(str, {
                    ...prettierOptions,
                    parser: "json-stringify"
                });
            }
            /**
       *
       * Command
       *
       */ this.log(`reading package.json's workspaces config`);
            const packageJsonFilePath = _path.default.resolve(process.cwd(), "package.json");
            const packageJsonFile = _fs.default.readFileSync(packageJsonFilePath, {
                encoding: "utf8"
            });
            const packageJson = JSON.parse(packageJsonFile);
            if (!(packageJson === null || packageJson === void 0 ? void 0 : (ref = packageJson.workspaces) === null || ref === void 0 ? void 0 : (ref1 = ref.packages) === null || ref1 === void 0 ? void 0 : ref1.length)) {
                this.logWarn(`missing packages in package.workspaces, aborting command`);
                return;
            }
            this.log(`replacing workspace.packages value with: ${this.chalk.greenBright(flags.packages)}`);
            const temporaryPackageJson = JSON.stringify({
                ...packageJson,
                workspaces: {
                    packages: [
                        flags.packages
                    ]
                }
            }, null, 2);
            _fs.default.writeFileSync(packageJsonFilePath, format(temporaryPackageJson));
            this.log(`updating index for package.json as --assume-unchanged`);
            assumeUnchanged("package.json");
            this.log(`executing lerna version`);
            const command = (0, _childProcess).spawnSync(`yarn lerna version ${args.args || ""}`, {
                shell: (0, _coreNodeUtils).getShellForPlatform(),
                stdio: "inherit",
                env: process.env
            });
            this.log(`restoring original package.json`);
            _fs.default.writeFileSync(packageJsonFilePath, format(JSON.stringify(packageJson, null, 2)), {
                encoding: "utf8"
            });
            this.log(`updating index for package.json as --no-assume-unchanged`);
            unAssumeUnchanged("package.json");
        } catch (error) {
            this.logError(`error occured, aborting: ${error}`);
            this.log(`updating index for package.json as --no-assume-unchanged`);
            unAssumeUnchanged("package.json");
        }
        function assumeUnchanged(filename) {
            (0, _childProcess).spawnSync(`git update-index --assume-unchanged ${filename}`, {
                shell: (0, _coreNodeUtils).getShellForPlatform(),
                stdio: "inherit",
                env: process.env
            });
        }
        function unAssumeUnchanged(filename) {
            (0, _childProcess).spawnSync(`git update-index --no-assume-unchanged ${filename}`, {
                shell: (0, _coreNodeUtils).getShellForPlatform(),
                stdio: "inherit",
                env: process.env
            });
        }
    }
}
exports.default = LernaVersion;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=lerna-version.js.map