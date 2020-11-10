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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDotEnv = void 0;
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
/**
 * Utility function to load the .env files in the monorepository. By default it
 * loads the package's .env file (e.g. in packages/<package-name>/.env) and the parent .env file
 * (<root>/.env) which contains variables for the whole repository.
 */
function loadDotEnv(dotEnvPath) {
    dotenv.config({
        path: dotEnvPath,
    });
    dotenv.config({
        path: path_1.default.resolve(__dirname, '..', '..', '.env'),
    });
    return process.env;
}
exports.loadDotEnv = loadDotEnv;
