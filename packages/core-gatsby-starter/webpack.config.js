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
        new webpack_plugin_1.default({
            localIdentName: '[name]_[local]_[hash:base64:5]',
            themeIdentName: '_[name]-[local]_',
            outputCSS: isSSR ? false : true,
            outputLoaders: [loaders.miniCssExtract()],
        }),
    ];
    // const productionPlugins = [bundleVisualizerPlugin];
    const productionPlugins = [];
    // const sassRule = {
    //   test: /\.s(a|c)ss$/,
    //   use: isSSR
    //     ? [loaders.null()]
    //     : [
    //         loaders.miniCssExtract(),
    //         loaders.css({ ...(cssLoader as any).query, importLoaders: 2 }),
    //         loaders.postcss(),
    //         scssLoader,
    //       ],
    // };
    // const sassRuleModules = {
    //   test: /\.module\.s(a|c)ss$/,
    //   use: [
    //     !isSSR && loaders.miniCssExtract({ hmr: false }),
    //     loaders.css({ ...(cssLoader as any).query, modules: true, importLoaders: 2 }),
    //     loaders.postcss(),
    //     scssLoader,
    //   ].filter(Boolean),
    // };
    return {
        devtool: 'eval-source-map',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwwRUFBK0M7QUFHL0MsU0FBZ0IseUJBQXlCLENBQUMsRUFDeEMsWUFBWSxFQUNaLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sR0FPUjtJQUNDLElBQUksS0FBSyxLQUFLLGNBQWM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUV4QyxNQUFNLGFBQWEsR0FBRztRQUNwQixJQUFJLHdCQUFXLENBQUM7WUFDZCxjQUFjLEVBQUUsZ0NBQWdDO1lBQ2hELGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQy9CLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQyxDQUFDO0tBS0gsQ0FBQztJQUVGLHNEQUFzRDtJQUN0RCxNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUU3QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQywwRUFBMEU7SUFDMUUsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsS0FBSztJQUVMLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLHdEQUF3RDtJQUN4RCxxRkFBcUY7SUFDckYseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsS0FBSztJQUVMLE9BQU87UUFDTCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxLQUFLLEVBQUUsRUFBRTtpQkFDVjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztLQUN0RixDQUFDO0FBQ0osQ0FBQztBQWhFRCw4REFnRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVhdGVCYWJlbENvbmZpZ0FyZ3MsIFdlYnBhY2tMb2FkZXJzLCBXZWJwYWNrUGx1Z2lucyB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgVHJlYXRQbHVnaW4gZnJvbSAndHJlYXQvd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IHsgV2VicGFja09wdGlvbnMgfSBmcm9tICd3ZWJwYWNrL2RlY2xhcmF0aW9ucy9XZWJwYWNrT3B0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYXRzYnlXZWJwYWNrQ29uZmlnKHtcbiAgaXNQcm9kdWN0aW9uLFxuICBzdGFnZSxcbiAgaXNTU1IsXG4gIGxvYWRlcnMsXG4gIHBsdWdpbnMsXG59OiB7XG4gIGlzUHJvZHVjdGlvbjogYm9vbGVhbjtcbiAgc3RhZ2U6IENyZWF0ZUJhYmVsQ29uZmlnQXJnc1snc3RhZ2UnXTtcbiAgaXNTU1I6IGJvb2xlYW47XG4gIGxvYWRlcnM6IFdlYnBhY2tMb2FkZXJzO1xuICBwbHVnaW5zOiBXZWJwYWNrUGx1Z2lucztcbn0pOiBXZWJwYWNrT3B0aW9ucyB7XG4gIGlmIChzdGFnZSA9PT0gJ2RldmVsb3AtaHRtbCcpIHJldHVybiB7fTtcblxuICBjb25zdCBjb21tb25QbHVnaW5zID0gW1xuICAgIG5ldyBUcmVhdFBsdWdpbih7XG4gICAgICBsb2NhbElkZW50TmFtZTogJ1tuYW1lXV9bbG9jYWxdX1toYXNoOmJhc2U2NDo1XScsXG4gICAgICB0aGVtZUlkZW50TmFtZTogJ19bbmFtZV0tW2xvY2FsXV8nLFxuICAgICAgb3V0cHV0Q1NTOiBpc1NTUiA/IGZhbHNlIDogdHJ1ZSwgLy8gaHR0cHM6Ly9zZWVrLW9zcy5naXRodWIuaW8vdHJlYXQvc2V0dXAjc2VydmVyLXNpZGUtcmVuZGVyaW5nXG4gICAgICBvdXRwdXRMb2FkZXJzOiBbbG9hZGVycy5taW5pQ3NzRXh0cmFjdCgpXSxcbiAgICB9KSxcbiAgICAvLyBnZXRUcmVhdENTU1BsdWdpbih7XG4gICAgLy8gICBpc1NTUixcbiAgICAvLyAgIG91dHB1dExvYWRlcnM6IFtsb2FkZXJzLm1pbmlDc3NFeHRyYWN0KCldLFxuICAgIC8vIH0pLFxuICBdO1xuXG4gIC8vIGNvbnN0IHByb2R1Y3Rpb25QbHVnaW5zID0gW2J1bmRsZVZpc3VhbGl6ZXJQbHVnaW5dO1xuICBjb25zdCBwcm9kdWN0aW9uUGx1Z2lucyA9IFtdO1xuXG4gIC8vIGNvbnN0IHNhc3NSdWxlID0ge1xuICAvLyAgIHRlc3Q6IC9cXC5zKGF8YylzcyQvLFxuICAvLyAgIHVzZTogaXNTU1JcbiAgLy8gICAgID8gW2xvYWRlcnMubnVsbCgpXVxuICAvLyAgICAgOiBbXG4gIC8vICAgICAgICAgbG9hZGVycy5taW5pQ3NzRXh0cmFjdCgpLFxuICAvLyAgICAgICAgIGxvYWRlcnMuY3NzKHsgLi4uKGNzc0xvYWRlciBhcyBhbnkpLnF1ZXJ5LCBpbXBvcnRMb2FkZXJzOiAyIH0pLFxuICAvLyAgICAgICAgIGxvYWRlcnMucG9zdGNzcygpLFxuICAvLyAgICAgICAgIHNjc3NMb2FkZXIsXG4gIC8vICAgICAgIF0sXG4gIC8vIH07XG5cbiAgLy8gY29uc3Qgc2Fzc1J1bGVNb2R1bGVzID0ge1xuICAvLyAgIHRlc3Q6IC9cXC5tb2R1bGVcXC5zKGF8YylzcyQvLFxuICAvLyAgIHVzZTogW1xuICAvLyAgICAgIWlzU1NSICYmIGxvYWRlcnMubWluaUNzc0V4dHJhY3QoeyBobXI6IGZhbHNlIH0pLFxuICAvLyAgICAgbG9hZGVycy5jc3MoeyAuLi4oY3NzTG9hZGVyIGFzIGFueSkucXVlcnksIG1vZHVsZXM6IHRydWUsIGltcG9ydExvYWRlcnM6IDIgfSksXG4gIC8vICAgICBsb2FkZXJzLnBvc3Rjc3MoKSxcbiAgLy8gICAgIHNjc3NMb2FkZXIsXG4gIC8vICAgXS5maWx0ZXIoQm9vbGVhbiksXG4gIC8vIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkZXZ0b29sOiAnZXZhbC1zb3VyY2UtbWFwJyxcbiAgICBtb2R1bGU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBvbmVPZjogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogaXNQcm9kdWN0aW9uID8gWy4uLmNvbW1vblBsdWdpbnMsIC4uLnByb2R1Y3Rpb25QbHVnaW5zXSA6IFsuLi5jb21tb25QbHVnaW5zXSxcbiAgfTtcbn1cbiJdfQ==