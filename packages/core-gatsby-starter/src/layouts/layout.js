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
exports.Layout = void 0;
const gatsby_1 = require("gatsby");
const react_1 = __importDefault(require("react"));
const react_treat_1 = require("react-treat");
const styleRefs = __importStar(require("./layout.treat"));
const use_all_site_pages_hook_1 = require("./use-all-site-pages.hook");
exports.Layout = react_1.default.memo((props) => {
    const pages = use_all_site_pages_hook_1.useAllSitePages();
    const { styles } = react_treat_1.useStyles(styleRefs);
    return (react_1.default.createElement("div", { className: styles.wrapper },
        react_1.default.createElement("div", null, pages.docs.nodes.map((node) => (react_1.default.createElement(gatsby_1.Link, { key: node.id, to: node.path }, node.path)))),
        react_1.default.createElement("div", { className: styles.content }, props.children)));
});
