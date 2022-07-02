"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Env = exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _core = require("@oclif/core");
var _contentfulMigration = require("contentful-migration");
var t = _interopRequireWildcard(require("io-ts"));
var _coreNodeUtils = require("@newrade/core-node-utils");
var _baseCommandJs = require("../base-command.js");
class ContentfulMigrate extends _baseCommandJs.BaseCommand {
    static description = "execute migration with the contentful CLI ";
    static examples = [
        `$ nr contentful-migrate`
    ];
    static flags = {
        help: _core.Flags.help({
            char: "h"
        })
    };
    static args = [
        {
            name: "file",
            description: "figma file id"
        }
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "contentful-migrate"
        });
    }
    async run() {
        const env = (0, _coreNodeUtils).loadDotEnv({
            schema: Env,
            dotEnvPath: ".env",
            packageName: "core-cli",
            printEnvVariables: true
        });
        /**
     * @see https://github.com/contentful/contentful-migration
     */ (0, _contentfulMigration).runMigration({
            filePath: _path.default.resolve(process.cwd(), env.CONTENTFUL_MIGRATION_FILE),
            environmentId: env.CONTENTFUL_ENV,
            spaceId: env.CONTENTFUL_SPACEID,
            accessToken: env.CONTENTFUL_MANAGEMENT_TOKEN
        }).then(()=>console.log("Migration Done!")).catch((e)=>console.error(e));
    }
}
exports.default = ContentfulMigrate;
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
    t.partial({
        /**
     * Figma
     */ FIGMA_TOKEN: t.string,
        FIGMA_FILE: t.string
    }),
    t.type({
        /**
     * Contentful variables
     */ CONTENTFUL_MIGRATION_FILE: t.string,
        CONTENTFUL_SPACEID: t.string,
        CONTENTFUL_MANAGEMENT_TOKEN: t.string,
        CONTENTFUL_ENV: t.string
    }), 
]);
exports.Env = Env;

//# sourceMappingURL=contentful-migrate.js.map