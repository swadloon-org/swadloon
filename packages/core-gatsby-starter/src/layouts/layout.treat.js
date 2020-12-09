"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const treat_1 = require("treat");
exports.styles = treat_1.styleMap(({ cssTheme, theme }) => ({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gridTemplateRows: '100vh',
    },
    content: {
        padding: '2em',
    },
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflowY: 'scroll',
        maxHeight: '100vh',
        backgroundColor: '#f9f9f9',
        borderRight: '1px solid #e4e4e4',
    },
    navItem: {
        display: 'flex',
        padding: '1em',
        fontWeight: 'bold',
    },
}));
