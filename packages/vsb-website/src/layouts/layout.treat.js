"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const treat_1 = require("treat");
exports.styles = {
    wrapper: treat_1.style(({ cssTheme, theme }) => ({
        display: 'grid',
        gridTemplateColumns: '1fr',
        marginRight: 'auto',
        marginLeft: 'auto',
    })),
    main: treat_1.style(({ cssTheme, theme }) => ({
        padding: '1em',
        maxWidth: `calc( 1440px - 225px - 300px - 40px * 2 )`,
        overflowX: `hidden`,
        margin: `0 auto`,
        width: `100%`,
    })),
    sideMenu: treat_1.style(({ cssTheme, theme }) => ({
        position: 'fixed',
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        alignItems: 'stretch',
        overflowY: 'scroll',
        maxHeight: '100vh',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        borderRight: '1px solid #e4e4e4',
    })),
    topMenu: treat_1.style(({ cssTheme, theme }) => ({
        position: 'fixed',
        display: 'flex',
        width: `100vw`,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'white',
        borderBottom: '1px solid #e4e4e4',
    })),
    navItem: treat_1.style(({ cssTheme, theme }) => ({
        display: 'flex',
        padding: `0.5em 1em`,
        fontWeight: 'bold',
    })),
};
