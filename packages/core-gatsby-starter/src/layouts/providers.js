"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
const react_1 = require("@mdx-js/react");
const core_react_ui_1 = require("@newrade/core-react-ui");
const react_2 = __importDefault(require("react"));
const react_treat_1 = require("react-treat");
const theme_treat_1 = require("../design-system/theme.treat");
const treat_theme_1 = require("../hooks/treat-theme");
exports.Providers = (props) => {
    return (react_2.default.createElement(react_treat_1.TreatProvider, { theme: theme_treat_1.light },
        react_2.default.createElement(treat_theme_1.TreatThemeProvider, { theme: { theme: theme_treat_1.theme, cssTheme: theme_treat_1.cssTheme } },
            react_2.default.createElement(react_1.MDXProvider, { components: core_react_ui_1.mdxComponents },
                react_2.default.createElement(core_react_ui_1.ResetCSS, null,
                    react_2.default.createElement(core_react_ui_1.DefaultCSS, null, props.children))))));
};
