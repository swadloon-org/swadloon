"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGatsbyWebpackConfig = void 0;
const webpack_plugin_1 = __importDefault(require("treat/webpack-plugin"));
function createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins, }) {
    if (stage === 'develop-html')
        return {};
    const commonPlugins = [
        /**
         * TreatCSS Webpack Plugin
         * @see https://seek-oss.github.io/treat/webpack-options/
         */
        new webpack_plugin_1.default({
            localIdentName: '[name]_[local]_[hash:base64:5]',
            themeIdentName: '_[name]-[local]_',
            outputCSS: isSSR ? false : true,
            outputLoaders: [loaders.miniCssExtract()],
        }),
    ];
    const productionPlugins = [];
    return {
        module: {
            rules: [
                {
                    oneOf: [],
                },
            ],
        },
        plugins: isProduction ? [...commonPlugins, ...productionPlugins] : [...commonPlugins],
    };
}
exports.createGatsbyWebpackConfig = createGatsbyWebpackConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwwRUFBK0M7QUFHL0MsU0FBZ0IseUJBQXlCLENBQUMsRUFDeEMsWUFBWSxFQUNaLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sR0FPUjtJQUNDLElBQUksS0FBSyxLQUFLLGNBQWM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUV4QyxNQUFNLGFBQWEsR0FBRztRQUNwQjs7O1dBR0c7UUFDSCxJQUFJLHdCQUFXLENBQUM7WUFDZCxjQUFjLEVBQUUsZ0NBQWdDO1lBQ2hELGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQy9CLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQyxDQUFDO0tBQ0gsQ0FBQztJQUVGLE1BQU0saUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBRTdCLE9BQU87UUFDTCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsS0FBSyxFQUFFLEVBQUU7aUJBQ1Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7S0FDdEYsQ0FBQztBQUNKLENBQUM7QUF4Q0QsOERBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlYXRlQmFiZWxDb25maWdBcmdzLCBXZWJwYWNrTG9hZGVycywgV2VicGFja1BsdWdpbnMgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IFRyZWF0UGx1Z2luIGZyb20gJ3RyZWF0L3dlYnBhY2stcGx1Z2luJztcbmltcG9ydCB7IFdlYnBhY2tPcHRpb25zIH0gZnJvbSAnd2VicGFjay9kZWNsYXJhdGlvbnMvV2VicGFja09wdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2F0c2J5V2VicGFja0NvbmZpZyh7XG4gIGlzUHJvZHVjdGlvbixcbiAgc3RhZ2UsXG4gIGlzU1NSLFxuICBsb2FkZXJzLFxuICBwbHVnaW5zLFxufToge1xuICBpc1Byb2R1Y3Rpb246IGJvb2xlYW47XG4gIHN0YWdlOiBDcmVhdGVCYWJlbENvbmZpZ0FyZ3NbJ3N0YWdlJ107XG4gIGlzU1NSOiBib29sZWFuO1xuICBsb2FkZXJzOiBXZWJwYWNrTG9hZGVycztcbiAgcGx1Z2luczogV2VicGFja1BsdWdpbnM7XG59KTogV2VicGFja09wdGlvbnMge1xuICBpZiAoc3RhZ2UgPT09ICdkZXZlbG9wLWh0bWwnKSByZXR1cm4ge307XG5cbiAgY29uc3QgY29tbW9uUGx1Z2lucyA9IFtcbiAgICAvKipcbiAgICAgKiBUcmVhdENTUyBXZWJwYWNrIFBsdWdpblxuICAgICAqIEBzZWUgaHR0cHM6Ly9zZWVrLW9zcy5naXRodWIuaW8vdHJlYXQvd2VicGFjay1vcHRpb25zL1xuICAgICAqL1xuICAgIG5ldyBUcmVhdFBsdWdpbih7XG4gICAgICBsb2NhbElkZW50TmFtZTogJ1tuYW1lXV9bbG9jYWxdX1toYXNoOmJhc2U2NDo1XScsXG4gICAgICB0aGVtZUlkZW50TmFtZTogJ19bbmFtZV0tW2xvY2FsXV8nLFxuICAgICAgb3V0cHV0Q1NTOiBpc1NTUiA/IGZhbHNlIDogdHJ1ZSwgLy8gaHR0cHM6Ly9zZWVrLW9zcy5naXRodWIuaW8vdHJlYXQvc2V0dXAjc2VydmVyLXNpZGUtcmVuZGVyaW5nXG4gICAgICBvdXRwdXRMb2FkZXJzOiBbbG9hZGVycy5taW5pQ3NzRXh0cmFjdCgpXSxcbiAgICB9KSxcbiAgXTtcblxuICBjb25zdCBwcm9kdWN0aW9uUGx1Z2lucyA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgbW9kdWxlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgb25lT2Y6IFtdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IGlzUHJvZHVjdGlvbiA/IFsuLi5jb21tb25QbHVnaW5zLCAuLi5wcm9kdWN0aW9uUGx1Z2luc10gOiBbLi4uY29tbW9uUGx1Z2luc10sXG4gIH07XG59XG4iXX0=