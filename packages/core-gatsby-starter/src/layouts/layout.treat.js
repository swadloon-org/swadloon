"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const treat_1 = require("treat");
exports.styles = treat_1.styleMap(({ cssTheme, theme }) => ({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        maxWidth: `calc( 1440px - var(--aside-width) - var(--nav-width) - var(--horizontal-gutter) * 2 - (var(--nav-width) - var(--aside-width)) )`,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    content: {
        padding: '2em',
    },
    sideMenu: {
        position: 'fixed',
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
        padding: `0.5em 1em`,
        fontWeight: 'bold',
    },
}));
