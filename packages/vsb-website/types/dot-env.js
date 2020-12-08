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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const core_utils_1 = require("@newrade/core-utils");
const t = __importStar(require("io-ts"));
/**
 * Local, typed representation of the .env file.
 */
exports.Env = t.intersection([
    core_utils_1.CommonEnvGatsby,
    t.partial({
        /**
         * Figma
         */
        FIGMA_TOKEN: t.string,
        FIGMA_FILE: t.string,
        /**
         * Contentful variables
         */
        CONTENTFUL_MANAGEMENT_TOKEN_VSB: t.string,
    }),
    t.type({
        /**
         * Contentful variables
         */
        CONTENTFUL_SPACEID_VSB: t.string,
        CONTENTFUL_DELIVERY_TOKEN_VSB: t.string,
    }),
]);
