"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Env = exports.default = void 0;
var _core = require("@oclif/core");
var _chalk = _interopRequireDefault(require("chalk"));
var _debug = _interopRequireDefault(require("debug"));
var t = _interopRequireWildcard(require("io-ts"));
var _octokit = require("octokit");
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class GitCopyLabels extends _baseCommandJs.BaseCommand {
    static description = "copy labels from a repo to another";
    static examples = [
        `$ nr git-copy-labels`
    ];
    static flags = {
        help: _core.Flags.help({
            char: "h"
        })
    };
    static args = [
        {
            name: "source",
            description: "source repo <org-name>/<repo-name>",
            required: true
        },
        {
            name: "destination",
            description: "destination repo <org-name>/<repo-name>",
            required: true
        }, 
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "git-copy-labels"
        });
    }
    async init() {
        _debug.default.enable("nr:core-cli:*");
    }
    async run() {
        const { args , flags  } = await this.parse(GitCopyLabels);
        this.log("validating inputs");
        const { source , destination  } = args;
        const [sourceOrg, sourceRepo] = source.split("/");
        const [destinationOrg, destinationRepo] = destination.split("/");
        this.log(`source owner: \t\t ${_chalk.default.blue(sourceOrg)}`);
        this.log(`source repo:  \t\t ${_chalk.default.blue(sourceRepo)}`);
        this.log(`destination owner: \t ${_chalk.default.green(destinationOrg)}`);
        this.log(`destination repo:  \t ${_chalk.default.green(destinationRepo)}`);
        if (!(sourceOrg && sourceRepo && destinationOrg && destinationRepo)) {
            this.logError("please double check inputs");
            return;
        }
        this.log("loading .env file");
        const env = (0, _coreNodeUtils).loadDotEnv({
            schema: Env,
            dotEnvPath: ".env",
            dotEnvRootPath: "../../.env",
            packageName: "core-cli"
        });
        if (!env.GH_TOKEN) {
            this.logError("missing env GH_TOKEN");
        }
        this.log("validate credentials");
        const octokit = new _octokit.Octokit({
            auth: env.GH_TOKEN
        });
        this.log(`retrieve repo labels for: ${sourceOrg}/${sourceRepo}`);
        let sourceLabels;
        try {
            sourceLabels = await octokit.rest.issues.listLabelsForRepo({
                owner: sourceOrg,
                repo: sourceRepo
            });
            if (!sourceLabels.data.length) {
                this.logError("could not retrieve labels");
                return;
            }
            this.log(`got ${sourceLabels.data.length} labels`);
            sourceLabels.data.forEach((label)=>{
                this.log(`found label: ${label.name}`);
            });
        } catch (error) {
            this.logError("could not retrieve labels");
            return;
        }
        this.log(`retrieve repo labels for: ${destinationOrg}/${destinationRepo}`);
        try {
            const destinationLabels = await octokit.rest.issues.listLabelsForRepo({
                owner: destinationOrg,
                repo: destinationRepo
            });
            this.log(`got ${destinationLabels.data.length} labels in destination repo`);
            this.log(`creating new labels...`);
            await Promise.all(sourceLabels.data.map(async (sourceLabel)=>{
                const existingLabel = destinationLabels.data.find((destinationLabel)=>destinationLabel.name === sourceLabel.name);
                if (existingLabel) {
                    this.log(`updating existing label: ${existingLabel.name}`);
                    return await octokit.rest.issues.updateLabel({
                        owner: destinationOrg,
                        repo: destinationRepo,
                        name: sourceLabel.name,
                        color: sourceLabel.color
                    });
                }
                this.log(`creating new label: ${sourceLabel.name}`);
                return await octokit.rest.issues.createLabel({
                    owner: destinationOrg,
                    repo: destinationRepo,
                    name: sourceLabel.name,
                    color: sourceLabel.color
                });
            }));
        } catch (error1) {
            this.logError("could not peform the action");
            this.logError(error1);
            return;
        }
        this.log("done! \u2705");
    }
}
exports.default = GitCopyLabels;
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
        GH_TOKEN: t.string
    }), 
]);
exports.Env = Env;

//# sourceMappingURL=git-copy-labels.js.map