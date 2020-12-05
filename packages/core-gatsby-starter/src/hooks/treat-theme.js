"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTreatTheme = exports.TreatThemeProvider = exports.TreatThemeContext = void 0;
const react_1 = __importDefault(require("react"));
/**
 * Context to hold the theme's tokens
 */
exports.TreatThemeContext = react_1.default.createContext(null);
/**
 * Threat theme provider to pass the tokens value to children
 */
exports.TreatThemeProvider = ({ theme, children }) => (react_1.default.createElement(exports.TreatThemeContext.Provider, { value: theme }, children));
/**
 * Hook to consume the theme tokens
 */
function useTreatTheme() {
    const value = react_1.default.useContext(exports.TreatThemeContext);
    if (!value) {
        throw new Error('no treat theme provided');
    }
    const { theme, cssTheme } = value;
    return {
        theme,
        cssTheme,
    };
}
exports.useTreatTheme = useTreatTheme;
