"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.light = exports.cssTheme = exports.theme = void 0;
const core_react_ui_1 = require("@newrade/core-react-ui");
const treat_1 = require("treat");
exports.theme = core_react_ui_1.defaultTheme;
exports.cssTheme = core_react_ui_1.defaultCSSTheme;
/**
 * Treat theme reference
 */
exports.light = treat_1.createTheme({ theme: core_react_ui_1.defaultTheme, cssTheme: core_react_ui_1.defaultCSSTheme });
