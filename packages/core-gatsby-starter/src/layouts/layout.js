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
exports.Layout = react_1.default.memo((props) => {
    const pages = use_all_site_pages_hook_1.useAllSitePages();
    const { styles } = react_treat_1.useStyles(styleRefs);
    function parsePathGroupFromName(path) {
        return path.match(/\/(?<folder>.+)\//);
    }
    function parsePathIntoGroup(pages) {
        return pages.reduce((previous, current) => {
            return previous;
        }, {});
    }
    function parsePathIntoName(path) {
        return case_1.title(path.replace('/docs', '').replace('/', ' '));
    }
    return (react_1.default.createElement("div", { className: styles.wrapper },
        react_1.default.createElement("div", { className: styles.sideMenu }, pages.docs.nodes.map((node) => {
            console.log(parsePathGroupFromName(node.path));
            return (react_1.default.createElement("div", { key: node.id, className: styles.navItem },
                react_1.default.createElement(gatsby_1.Link, { to: node.path }, node.context?.frontmatter?.name || node.path)));
        })),
        react_1.default.createElement("div", { className: styles.content }, props.children)));
});
