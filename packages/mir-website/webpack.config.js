"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGatsbyWebpackConfig = void 0;
const ForkTsCheckerWebpackPlugin_1 = require("fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin");
const webpack_plugin_1 = __importDefault(require("treat/webpack-plugin"));
function createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins, }) {
    if (stage === 'develop-html')
        return {};
    const commonPlugins = [
        new ForkTsCheckerWebpackPlugin_1.ForkTsCheckerWebpackPlugin(),
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
        mode: isProduction ? 'development' : 'production',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSw4R0FBMkc7QUFHM0csMEVBQStDO0FBRS9DLFNBQWdCLHlCQUF5QixDQUFDLEVBQ3hDLFlBQVksRUFDWixLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxPQUFPLEdBT1I7SUFDQyxJQUFJLEtBQUssS0FBSyxjQUFjO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFeEMsTUFBTSxhQUFhLEdBQUc7UUFDcEIsSUFBSSx1REFBMEIsRUFBRTtRQUNoQyxJQUFJLHdCQUFXLENBQUM7WUFDZCxjQUFjLEVBQUUsZ0NBQWdDO1lBQ2hELGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQy9CLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQyxDQUFDO0tBS0gsQ0FBQztJQUVGLHNEQUFzRDtJQUN0RCxNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUU3QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQywwRUFBMEU7SUFDMUUsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsS0FBSztJQUVMLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLHdEQUF3RDtJQUN4RCxxRkFBcUY7SUFDckYseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsS0FBSztJQUVMLE9BQU87UUFDTCxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFDakQsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsS0FBSyxFQUFFLEVBQUU7aUJBQ1Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7S0FDdEYsQ0FBQztBQUNKLENBQUM7QUFsRUQsOERBa0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlYXRlQmFiZWxDb25maWdBcmdzLCBXZWJwYWNrTG9hZGVycywgV2VicGFja1BsdWdpbnMgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IHsgRm9ya1RzQ2hlY2tlcldlYnBhY2tQbHVnaW4gfSBmcm9tICdmb3JrLXRzLWNoZWNrZXItd2VicGFjay1wbHVnaW4vbGliL0ZvcmtUc0NoZWNrZXJXZWJwYWNrUGx1Z2luJztcblxuaW1wb3J0IHsgV2VicGFja09wdGlvbnMgfSBmcm9tICd3ZWJwYWNrL2RlY2xhcmF0aW9ucy9XZWJwYWNrT3B0aW9ucyc7XG5pbXBvcnQgVHJlYXRQbHVnaW4gZnJvbSAndHJlYXQvd2VicGFjay1wbHVnaW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2F0c2J5V2VicGFja0NvbmZpZyh7XG4gIGlzUHJvZHVjdGlvbixcbiAgc3RhZ2UsXG4gIGlzU1NSLFxuICBsb2FkZXJzLFxuICBwbHVnaW5zLFxufToge1xuICBpc1Byb2R1Y3Rpb246IGJvb2xlYW47XG4gIHN0YWdlOiBDcmVhdGVCYWJlbENvbmZpZ0FyZ3NbJ3N0YWdlJ107XG4gIGlzU1NSOiBib29sZWFuO1xuICBsb2FkZXJzOiBXZWJwYWNrTG9hZGVycztcbiAgcGx1Z2luczogV2VicGFja1BsdWdpbnM7XG59KTogV2VicGFja09wdGlvbnMge1xuICBpZiAoc3RhZ2UgPT09ICdkZXZlbG9wLWh0bWwnKSByZXR1cm4ge307XG5cbiAgY29uc3QgY29tbW9uUGx1Z2lucyA9IFtcbiAgICBuZXcgRm9ya1RzQ2hlY2tlcldlYnBhY2tQbHVnaW4oKSxcbiAgICBuZXcgVHJlYXRQbHVnaW4oe1xuICAgICAgbG9jYWxJZGVudE5hbWU6ICdbbmFtZV1fW2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0nLFxuICAgICAgdGhlbWVJZGVudE5hbWU6ICdfW25hbWVdLVtsb2NhbF1fJyxcbiAgICAgIG91dHB1dENTUzogaXNTU1IgPyBmYWxzZSA6IHRydWUsIC8vIGh0dHBzOi8vc2Vlay1vc3MuZ2l0aHViLmlvL3RyZWF0L3NldHVwI3NlcnZlci1zaWRlLXJlbmRlcmluZ1xuICAgICAgb3V0cHV0TG9hZGVyczogW2xvYWRlcnMubWluaUNzc0V4dHJhY3QoKV0sXG4gICAgfSksXG4gICAgLy8gZ2V0VHJlYXRDU1NQbHVnaW4oe1xuICAgIC8vICAgaXNTU1IsXG4gICAgLy8gICBvdXRwdXRMb2FkZXJzOiBbbG9hZGVycy5taW5pQ3NzRXh0cmFjdCgpXSxcbiAgICAvLyB9KSxcbiAgXTtcblxuICAvLyBjb25zdCBwcm9kdWN0aW9uUGx1Z2lucyA9IFtidW5kbGVWaXN1YWxpemVyUGx1Z2luXTtcbiAgY29uc3QgcHJvZHVjdGlvblBsdWdpbnMgPSBbXTtcblxuICAvLyBjb25zdCBzYXNzUnVsZSA9IHtcbiAgLy8gICB0ZXN0OiAvXFwucyhhfGMpc3MkLyxcbiAgLy8gICB1c2U6IGlzU1NSXG4gIC8vICAgICA/IFtsb2FkZXJzLm51bGwoKV1cbiAgLy8gICAgIDogW1xuICAvLyAgICAgICAgIGxvYWRlcnMubWluaUNzc0V4dHJhY3QoKSxcbiAgLy8gICAgICAgICBsb2FkZXJzLmNzcyh7IC4uLihjc3NMb2FkZXIgYXMgYW55KS5xdWVyeSwgaW1wb3J0TG9hZGVyczogMiB9KSxcbiAgLy8gICAgICAgICBsb2FkZXJzLnBvc3Rjc3MoKSxcbiAgLy8gICAgICAgICBzY3NzTG9hZGVyLFxuICAvLyAgICAgICBdLFxuICAvLyB9O1xuXG4gIC8vIGNvbnN0IHNhc3NSdWxlTW9kdWxlcyA9IHtcbiAgLy8gICB0ZXN0OiAvXFwubW9kdWxlXFwucyhhfGMpc3MkLyxcbiAgLy8gICB1c2U6IFtcbiAgLy8gICAgICFpc1NTUiAmJiBsb2FkZXJzLm1pbmlDc3NFeHRyYWN0KHsgaG1yOiBmYWxzZSB9KSxcbiAgLy8gICAgIGxvYWRlcnMuY3NzKHsgLi4uKGNzc0xvYWRlciBhcyBhbnkpLnF1ZXJ5LCBtb2R1bGVzOiB0cnVlLCBpbXBvcnRMb2FkZXJzOiAyIH0pLFxuICAvLyAgICAgbG9hZGVycy5wb3N0Y3NzKCksXG4gIC8vICAgICBzY3NzTG9hZGVyLFxuICAvLyAgIF0uZmlsdGVyKEJvb2xlYW4pLFxuICAvLyB9O1xuXG4gIHJldHVybiB7XG4gICAgbW9kZTogaXNQcm9kdWN0aW9uID8gJ2RldmVsb3BtZW50JyA6ICdwcm9kdWN0aW9uJyxcbiAgICBkZXZ0b29sOiAnZXZhbC1zb3VyY2UtbWFwJyxcbiAgICBtb2R1bGU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBvbmVPZjogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogaXNQcm9kdWN0aW9uID8gWy4uLmNvbW1vblBsdWdpbnMsIC4uLnByb2R1Y3Rpb25QbHVnaW5zXSA6IFsuLi5jb21tb25QbHVnaW5zXSxcbiAgfTtcbn1cbiJdfQ==