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
const core_common_1 = require("@newrade/core-common");
try {
    console.info(`github.context.ref`, github.context.ref);
    core.exportVariable('APP_URL', 'http://localhost');
    core.exportVariable('APP_PORT', '9000');
    switch (github.context.ref) {
        case 'refs/heads/dev': {
            core.exportVariable('APP_ENV', core_common_1.DEPLOY_ENV.DEV);
            break;
        }
        case 'refs/heads/master': {
            core.exportVariable('APP_ENV', core_common_1.DEPLOY_ENV.STAGING);
            break;
        }
        case 'refs/heads/release': {
            core.exportVariable('APP_ENV', core_common_1.DEPLOY_ENV.PRODUCTION);
            break;
        }
        default: {
            console.info('setting default APP_ENV');
            core.exportVariable('APP_ENV', core_common_1.DEPLOY_ENV.DEV);
        }
    }
}
catch (error) {
    core.setFailed(error.message);
}
//# sourceMappingURL=index.js.map