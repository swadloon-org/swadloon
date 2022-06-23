"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _debug = _interopRequireDefault(require("debug"));
var _nodeChildProcess = require("node:child_process");
var _coreNodeUtils = require("@newrade/core-node-utils");
class CleanNodeModules extends _core.Command {
    ddebug = (0, _debug).default("nr:core-cli:clean-node-modules");
    ddebugWarn = (0, _debug).default("nr:core-cli:clean-node-modules:warn");
    ddebugError = (0, _debug).default("nr:core-cli:clean-node-modules:error");
    static description = `find . -name 'node_modules' -type d -prune -print -exec rimraf -rf '{}' \;`;
    // nvm cache clear
    // yarn cache clear
    // npm cache clear --force
    static examples = [
        `$ nr resetbranches`
    ];
    static flags = {
        help: _core.Flags.help({
            char: "h"
        })
    };
    static args = [
        {
            name: "dir"
        }
    ];
    async init() {
        _debug.default.enable("nr:core-cli:*");
    }
    async run() {
        (0, _nodeChildProcess).spawnSync(`brew upgrade`, {
            cwd: ".",
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: "inherit",
            env: process.env
        });
        (0, _nodeChildProcess).spawnSync(`npm cache clean –force`, {
            cwd: ".",
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: "inherit",
            env: process.env
        });
        (0, _nodeChildProcess).spawnSync(`yarn cache clean`, {
            cwd: ".",
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: "inherit",
            env: process.env
        });
    }
}
exports.default = CleanNodeModules;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=clean-node-modules.js.map