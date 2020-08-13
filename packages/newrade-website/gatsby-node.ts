export const onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  const isDevServer = stage === `develop`;
  const isSSR = stage.includes(`html`);
  actions.setWebpackConfig(webpackConfigDev({ isSSR, loaders, plugins }));
};
