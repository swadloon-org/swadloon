"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Env = void 0;
var t = _interopRequireWildcard(require("io-ts"));
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
        /**
     * The master repository's git host
     * @default 'github.com'
     */ MASTER_GIT_HOST: t.string,
        /**
     * The master repository's organization
     * @example '@newrade'
     */ MASTER_REPO_ORG: t.string,
        /**
     * The master repository's name
     * @example 'repo-name' in @<org>/<repo-name>
     */ MASTER_REPO_NAME: t.string,
        /**
     * The repository git host
     * @default 'github.com'
     */ PROJECT_GIT_HOST: t.string,
        /**
     * The repository's organization
     * @example '@newrade'
     */ PROJECT_REPO_ORG: t.string,
        /**
     * The repository name
     * @example 'repo-name' in @<org>/<repo-name>
     */ PROJECT_REPO_NAME: t.string
    }), 
]); // scriptLog(`forking master repo...`);
 // const clone = spawn(
 //   `git clone --bare git@${dotEnvProcess.MASTER_GIT_HOST}:${dotEnvProcess.MASTER_REPO_ORG}/${dotEnvProcess.MASTER_REPO_NAME}.git \
 //   cd ${dotEnvProcess.MASTER_REPO_NAME}`,
 //   {
 //     cwd: '..',
 //     shell: getShellForPlatform(),
 //     stdio: 'inherit',
 //     env: process.env,
 //   }
 // );
 // const cd = spawn(
 //   `git clone --bare git@${dotEnvProcess.MASTER_GIT_HOST}:${dotEnvProcess.MASTER_REPO_ORG}/${dotEnvProcess.MASTER_REPO_NAME}.git`,
 //   {
 //     cwd: '..',
 //     shell: getShellForPlatform(),
 //     stdio: 'inherit',
 //     env: process.env,
 //   }
 // );
exports.Env = Env;

//# sourceMappingURL=fork-repo.js.map