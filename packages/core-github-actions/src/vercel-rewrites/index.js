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
const fs_1 = require("fs"); // fix for node v12 https://stackoverflow.com/questions/64725249/fs-promises-api-in-typescript-not-compiling-in-javascript-correctly
const github = __importStar(require("@actions/github"));
try {
    const { context } = github;
    core.debug(`action : ${context.action}`);
    core.debug(`ref : ${context.ref}`);
    core.debug(`eventName : ${context.eventName}`);
    core.debug(`actor : ${context.actor}`);
    core.debug(`sha : ${context.sha}`);
    core.debug(`workflow : ${context.workflow}`);
    const vercelFilePath = core.getInput('vercel-json-path');
    core.debug(`looking for vercel.json at path: ${vercelFilePath}`);
    try {
        fs_1.promises
            .readFile(vercelFilePath, 'utf-8')
            .then((result) => {
            core.debug(`reading vercel.json file`);
            const vercelConfig = JSON.parse(result);
            core.debug(`current branch is: ${github.context.ref}`);
            // @ts-ignore
            core.debug(`target branch is: ${github.context.head_ref}`);
            core.debug(`current rewrites: ${JSON.stringify(vercelConfig === null || vercelConfig === void 0 ? void 0 : vercelConfig.rewrites, null, 2)}`);
            // switch (github.context.ref) {
            //   case 'refs/heads/dev': {
            //     core.exportVariable('APP_ENV', DEPLOY_ENV.DEV);
            //     break;
            //   }
            //   case 'refs/heads/master': {
            //     core.exportVariable('APP_ENV', DEPLOY_ENV.STAGING);
            //     break;
            //   }
            //   case 'refs/heads/release': {
            //     core.exportVariable('APP_ENV', DEPLOY_ENV.PRODUCTION);
            //     break;
            //   }
            //   default: {
            //     console.info('setting default APP_ENV');
            //     core.exportVariable('APP_ENV', DEPLOY_ENV.DEV);
            //   }
            // }
        })
            .catch((error) => {
            core.error(`could not find vercel.json file at the specified path`);
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
core.debug(`vercel.json updated succesfully`);
//# sourceMappingURL=index.js.map