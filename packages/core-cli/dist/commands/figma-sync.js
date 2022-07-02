"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Env = exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _core = require("@oclif/core");
var t = _interopRequireWildcard(require("io-ts"));
var _coreFigmaExtractor = require("@newrade/core-figma-extractor");
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class FigmaSync extends _baseCommandJs.BaseCommand {
    static description = "sync design tokens from figma file";
    static examples = [
        `$ nr figma-sync`
    ];
    static flags = {
        test: _core.Flags.boolean({
            char: "t",
            description: "the test flag is used in integration tests, it will not output versions or dates"
        }),
        help: _core.Flags.help({
            char: "h"
        })
    };
    static args = [
        {
            name: "path",
            description: "relative output path"
        }
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "figma-sync"
        });
    }
    async init() {}
    async run() {
        const env = (0, _coreNodeUtils).loadDotEnv({
            schema: Env,
            dotEnvPath: ".env",
            packageName: "core-cli"
        });
        const { args , flags  } = await this.parse(FigmaSync);
        this.log(`running: extract command`);
        await (0, _coreFigmaExtractor).extract({
            extractorName: "",
            version: "",
            figmaFile: env.FIGMA_FILE,
            figmaToken: env.FIGMA_TOKEN,
            outputDir: _path.default.resolve(process.cwd(), args && args.path ? args.path : "figma-export"),
            inputColorThemeNamespace: false,
            outputVersion: flags.test ? false : true,
            outputDate: flags.test ? false : true
        });
        this.log(`running: extract command`);
    }
}
exports.default = FigmaSync;
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
        FIGMA_TOKEN: t.string,
        FIGMA_FILE: t.string
    }), 
]);
exports.Env = Env;

//# sourceMappingURL=figma-sync.js.map