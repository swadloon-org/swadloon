"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var path = _interopRequireWildcard(require("path"));
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class Commit extends _baseCommandJs.BaseCommand {
    static description = "call the commit script in the repo root";
    static examples = [
        `$ nr commit`
    ];
    async run() {
        (0, _childProcess).spawnSync(`yarn commit`, {
            cwd: path.join("..", ".."),
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: "inherit",
            env: process.env
        });
    }
}
exports.default = Commit;
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

//# sourceMappingURL=commit.js.map