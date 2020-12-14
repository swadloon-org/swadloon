"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const core_utils_1 = require("@newrade/core-utils");
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
        CONTENTFUL_MANAGEMENT_TOKEN_NEWRADE: t.string,
    }),
    t.type({
        /**
         * Contentful variables
         */
        CONTENTFUL_SPACEID_NEWRADE: t.string,
        CONTENTFUL_DELIVERY_TOKEN_NEWRADE: t.string,
    }),
]);
