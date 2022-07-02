"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.devTools = void 0;
const devTools = [
    {
        name: "git",
        command: "git --version",
        versionRegex: /git version 2\..*/,
        messageIfRegexFails: `git should be at least version 2.24.x`,
        mandatory: true
    },
    {
        name: "node",
        command: "node --version",
        versionRegex: /v14\..*/,
        messageIfRegexFails: `node should be at least version 14.x.x`,
        mandatory: true
    },
    {
        name: "yarn",
        command: "yarn --version",
        versionRegex: /1\.2\d.*/,
        messageIfRegexFails: `yarn should be at least version 1.2x.x`,
        mandatory: true
    }, 
];
exports.devTools = devTools;

//# sourceMappingURL=dev-tools.js.map