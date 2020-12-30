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
const case_1 = require("case");
const gatsby_1 = require("gatsby");
const react_1 = __importDefault(require("react"));
const react_treat_1 = require("react-treat");
const styleRefs = __importStar(require("./layout.treat"));
const use_all_site_pages_hook_1 = require("./use-all-site-pages.hook");
const core_gatsby_ui_1 = require("@newrade/core-gatsby-ui");
exports.Layout = react_1.default.memo((props) => {
    const pages = use_all_site_pages_hook_1.useAllSitePages();
    const { styles } = react_treat_1.useStyles(styleRefs);
    function parsePathIntoName(path) {
        if (!path) {
            return 'No title for page';
        }
        return case_1.title(path.replace('/docs', '').replaceAll('/', ' '));
    }
    function renderNavigation(path) {
        if (!path) {
            return null;
        }
        return (react_1.default.createElement("div", { className: styles.topMenu }, pages.pages.nodes
            .filter((node) => !/404/.test(node.path))
            .map((node) => (/^\/$/.test(node.path) ? { ...node, context: { frontmatter: { name: 'Home' } } } : node))
            .map((node) => {
            return (react_1.default.createElement("div", { key: node.id, className: styles.navItem },
                react_1.default.createElement(gatsby_1.Link, { to: node.path }, node.context?.frontmatter?.name
                    ? parsePathIntoName(node.context?.frontmatter?.name)
                    : parsePathIntoName(node.path))));
        })));
    }
    return (react_1.default.createElement("div", { className: styles.wrapper },
        react_1.default.createElement(core_gatsby_ui_1.NavBar, { items: pages.pages.nodes.map((item) => {
                return {
                    id: item.id,
                    label: item.context?.name,
                    to: item.path,
                };
            }) }),
        react_1.default.createElement("main", { className: styles.main }, props.children),
        react_1.default.createElement("footer", null, "footer")));
});
