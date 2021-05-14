"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const fs_1 = require("fs"); // fix for node v12 https://stackoverflow.com/questions/64725249/fs-promises-api-in-typescript-not-compiling-in-javascript-correctly
try {
    const { context } = github;
    core.info(`action : ${context.action}`);
    core.info(`ref : ${context.ref}`);
    core.info(`eventName : ${context.eventName}`);
    core.info(`actor : ${context.actor}`);
    core.info(`sha : ${context.sha}`);
    core.info(`workflow : ${context.workflow}`);
    const workingDir = core.getInput('working-directory'); // ./packages/package-name
    core.info(`looking for vercel.json files in: ${workingDir}`);
    const filenames = ['vercel.json', 'vercel.dev.json', 'vercel.master.json'];
    const vercelJsonFileFilenames = filenames.map((filename) => {
        return readVercelConfigFile(`${workingDir}/${filename}`);
    });
    try {
        Promise.all(vercelJsonFileFilenames)
            .then((values) => values.filter((value) => !!value))
            .then((values) => {
            if (values.length !== 3) {
                const msg = 'vercel.json, vercel.dev.json and vercel.master.json must be provided';
                core.error(msg);
                throw new Error(msg);
            }
            const [vercelProdConfig, vercelDevConfig, vercelMasterConfig] = values;
            const vercelConfigPath = `${workingDir}/${filenames[0]}`;
            core.info(`current branch is: ${github.context.ref}`);
            // @ts-ignore
            core.info(`target branch is: ${github.context.head_ref}`);
            core.debug(`updating config file and returning both the object and the updated file for verification`);
            switch (github.context.ref) {
                case 'refs/heads/dev': {
                    const updatedConfigObject = Object.assign(Object.assign({}, vercelProdConfig), vercelDevConfig);
                    return updateVercelConfigFile(vercelConfigPath, updatedConfigObject).then((updatedConfigFile) => {
                        return {
                            updatedConfig: updatedConfigObject,
                            updatedConfigFile,
                        };
                    });
                }
                case 'refs/heads/master': {
                    const updatedConfigObject = Object.assign(Object.assign({}, vercelProdConfig), vercelMasterConfig);
                    return updateVercelConfigFile(vercelConfigPath, updatedConfigObject).then((updatedConfigFile) => {
                        return {
                            updatedConfig: updatedConfigObject,
                            updatedConfigFile,
                        };
                    });
                }
                default:
                case 'refs/heads/release': {
                    console.info('only replacing vercel.json config on branches master and dev');
                    return readVercelConfigFile(`${workingDir}/${filenames[0]}`).then((updatedConfigFile) => {
                        return {
                            updatedConfig: updatedConfigFile,
                            updatedConfigFile,
                        };
                    });
                }
            }
        })
            .then(({ updatedConfig, updatedConfigFile }) => {
            if (!updatedConfig) {
                const msg = 'no updated vercel config object received, aborting';
                core.error(msg);
                throw new Error(msg);
            }
            if (!updatedConfigFile) {
                const msg = 'no updated vercel config file received, aborting';
                core.error(msg);
                throw new Error(msg);
            }
            if (JSON.stringify(updatedConfig) !== JSON.stringify(updatedConfigFile)) {
                const msg = 'updated vercel.json file content does not match the updated config object, aborting!';
                core.error(msg);
                throw new Error(msg);
            }
            core.info(`updated vercel.json file successfully ✅`);
        })
            .catch((error) => {
            core.error(`could not find vercel.json files in the specified directory`);
            core.error(`error: ${error}`);
        });
    }
    catch (error) {
        core.error(`could not find vercel.json file at the specified path`);
    }
}
catch (error) {
    core.setFailed(error.message);
}
function readVercelConfigFile(path) {
    core.info(`reading vercel.json file: ${path}`);
    return fs_1.promises
        .readFile(path, 'utf-8')
        .then((result) => {
        return JSON.parse(result);
    })
        .catch((error) => {
        core.error(`could not read file ${path}`);
        return undefined;
    });
}
function updateVercelConfigFile(path, data) {
    core.info(`replacing vercel.json file content`);
    return fs_1.promises.writeFile(path, JSON.stringify(data, null, 2)).then(() => {
        return readVercelConfigFile(path);
    });
}
//# sourceMappingURL=index.js.map