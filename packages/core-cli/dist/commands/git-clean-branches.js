"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _simpleGit = _interopRequireDefault(require("simple-git"));
var _baseCommandJs = require("../base-command.js");
class GitCleanBranches extends _baseCommandJs.BaseCommand {
    static description = "delete local branches that are already merged on origin";
    static examples = [
        `$ nr git-clean-branches`
    ];
    static flags = {
        help: _core.Flags.help({
            char: "h"
        })
    };
    static args = [];
    constructor(argv, config){
        super(argv, config, {
            name: "git-clean-branches"
        });
    }
    async init() {}
    async run() {
        const git = (0, _simpleGit).default();
        this.log("looking for local branches to remove");
        const localBranches = await git.branchLocal();
        this.log(`local branches: ${localBranches.all.map((branch)=>this.chalk.blueBright(branch))}`);
        const ignoredBranches = [
            "dev",
            "master",
            "release"
        ];
        this.log(`ignored: ${ignoredBranches.map((branch)=>this.chalk.blueBright(branch))}`);
        const mergedToMasterBranches = await git.branch([
            "--merged",
            "master"
        ]);
        this.log(`branches merged on master: ${mergedToMasterBranches.all}`);
        const localBranchesToBeDeleted = localBranches.all.filter((localBranch)=>mergedToMasterBranches.all.includes(localBranch)).filter((branch)=>!ignoredBranches.includes(branch));
        this.log(`to remove: ${localBranchesToBeDeleted.length ? localBranchesToBeDeleted.map((branch)=>this.chalk.red(branch)) : "[]"}`);
        if (!localBranchesToBeDeleted.length) {
            this.log(`no branches to remove ✅`);
            return;
        }
        localBranchesToBeDeleted.map(async (branchToRemove)=>{
            this.log(`removing ${branchToRemove}`);
            const removed = await git.branch([
                `-d`,
                branchToRemove
            ]);
        });
    }
}
exports.default = GitCleanBranches;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=git-clean-branches.js.map