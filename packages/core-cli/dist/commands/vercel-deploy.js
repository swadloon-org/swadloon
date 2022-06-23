"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Env = exports.default = void 0;
var _childProcess = require("child_process");
var _core = require("@oclif/core");
var _debug = _interopRequireDefault(require("debug"));
var t = _interopRequireWildcard(require("io-ts"));
var _coreNodeUtils = require("@newrade/core-node-utils");
var _logUtilitiesJs = require("../utilities/log.utilities.js");
class VercelDeploy extends _core.Command {
    log = (0, _debug).default(`${_logUtilitiesJs.NS}:vercel-deploy`);
    logWarn = (0, _debug).default(`${_logUtilitiesJs.NS}:vercel-deploy:warn`);
    logError = (0, _debug).default(`${_logUtilitiesJs.NS}:vercel-deploy:error`);
    static description = "deploy site with vercel using env variables";
    static examples = [
        `$ nr vercel-deploy`
    ];
    static flags = {
        help: _core.Flags.help({
            char: "h"
        })
    };
    static args = [];
    async init() {}
    async run() {
        this.log(`running in ${process.cwd()}`);
        this.log("validating env variables");
        this.log("loading .env file");
        const env = (0, _coreNodeUtils).loadDotEnv({
            schema: Env,
            dotEnvPath: ".env",
            dotEnvRootPath: "../../.env",
            packageName: "core-cli"
        });
        this.log("running vercel deploy");
        // use yarn to use the locally installed vercel-cli
        (0, _childProcess).spawnSync(`yarn vercel public --token $VERCEL_TOKEN --scope $VERCEL_SCOPE --confirm`, {
            cwd: ".",
            shell: (0, _coreNodeUtils).getShellForPlatform(),
            stdio: "inherit",
            env: env
        });
        this.log("done! \u2705");
    }
}
exports.default = VercelDeploy;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const Env = t.intersection([
    t.type({}),
    t.type({
        VERCEL_PROJECT_ID: t.string,
        VERCEL_ORG_ID: t.string,
        VERCEL_TOKEN: t.string,
        VERCEL_SCOPE: t.string
    }), 
]);
exports.Env = Env;

//# sourceMappingURL=vercel-deploy.js.map