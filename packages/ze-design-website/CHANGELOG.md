# Change Log

All notable changes to this project will be documented in this file.

See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.6.0](https://github.com/newrade/newrade-core/compare/@newrade/ze-design-website@2.5.0...@newrade/ze-design-website@2.6.0) (2022-01-03)

### Bug Fixes

- **core:** fix imports and error in jsdoc comment block
  ([44b5893](https://github.com/newrade/newrade-core/commit/44b58930bfdc7c258c9a6516667ab9bfeabd3537))
- **core:** set internal packages version to \* which means any version found locally
  ([70e0413](https://github.com/newrade/newrade-core/commit/70e0413057146e125018ba6d5f7781a9a1a329f5))
- **core-gatsby-ui:** update deps and completely disable caching (gatsby is drunk)
  ([25561bb](https://github.com/newrade/newrade-core/commit/25561bb9b971482008bf38e7bf6f3abcd26e803a))
- **core-react-ui:** fix test snapshots
  ([701fb00](https://github.com/newrade/newrade-core/commit/701fb0032b4b14f80466dc890775decb6b77b4ad))
- **core-ui:** bug fixes
  ([c624ba0](https://github.com/newrade/newrade-core/commit/c624ba0d1103c546a18fcbeb12c8f0923039a4b9))
- **core-webpack-config:** update some config for development setup
  ([e715c66](https://github.com/newrade/newrade-core/commit/e715c66dda1669ee8a01f7548b73ce150b953a9f))

### Features

- **core-ui:** add colors for code syntax highlighting and simplify sizing variables exports
  ([7d1c447](https://github.com/newrade/newrade-core/commit/7d1c44723a8064037786c212310c45c2d7e9456d))
- **core-ui:** add light dark mode to code components
  ([c1b508b](https://github.com/newrade/newrade-core/commit/c1b508b928fdf5e312928a29578fc25f8b33899f))
- **core-ui:** add new capabilities to the docs engine with documentation.js (extract jsdoc)
  ([c8df57e](https://github.com/newrade/newrade-core/commit/c8df57e9aaeb72525848d2e2eb13a046137e2be8))
- **core-ui:** refactor all table components
  ([99a650e](https://github.com/newrade/newrade-core/commit/99a650e1ece0d45d3db20e109ad23c0e5a2940d0))

# [2.5.0](https://github.com/newrade/newrade-core/compare/@newrade/ze-design-website@2.4.0...@newrade/ze-design-website@2.5.0) (2021-12-21)

### Bug Fixes

- **core:** fix bad global import in core-react-ui/global and other fixes in gatsby config
  ([b039f05](https://github.com/newrade/newrade-core/commit/b039f05dfe91716bbf62ea36e5f14927761d2d32))
- **core:** fix some small formatting, remove issue templates from core
  ([276b6a5](https://github.com/newrade/newrade-core/commit/276b6a537178bab38c2a018386d0012fc7e6cbff))
- **core:** fixe dependencies
  ([7f36061](https://github.com/newrade/newrade-core/commit/7f360614cf376bd26a75cc4420dad599f55d6123))
- **core:** fixes for fork-ts-checker and ts-loader config
  ([3ae9b37](https://github.com/newrade/newrade-core/commit/3ae9b37fb43e12cf9d375fb85cea6d81f6efbecd))
- **core:** update vanilla-extract and css related packages
  ([ac06dae](https://github.com/newrade/newrade-core/commit/ac06daea6a6f5a1d55b98321c8bf51bffa3effc1))
- **core-css-extractor:** fixes webpack plugin
  ([17b944f](https://github.com/newrade/newrade-core/commit/17b944fc9eba00b029af5f1a9a252caa2643db32))
- **core-gatsby-config:** enable progress plugin only for build
  ([4a8ec4d](https://github.com/newrade/newrade-core/commit/4a8ec4d5d83f426e6aaf0104c32ccb1ca872cf6c))
- **core-react-ui:** fix hsl conversion
  ([bee26e7](https://github.com/newrade/newrade-core/commit/bee26e73b91d9a8aa9416df3fb100064ea4d52d4))
- **core-react-ui:** refactor theming selection
  ([92c8d03](https://github.com/newrade/newrade-core/commit/92c8d0330b858702131191539d77282e621c8e4e))
- **core-ui:** improvements for theming selection and organization
  ([5a49a03](https://github.com/newrade/newrade-core/commit/5a49a03bdf9d0a5c571906745f4594e400ed09f0))
- **core-webpack-config:** fix ts-loader config for vanilla files
  ([9bd0507](https://github.com/newrade/newrade-core/commit/9bd050727a6d1f067850df2391a0561e57ea72b8))

### Features

- **core-css-extractor:** new utility to extract css tokens from vanilla-extract styles
  ([567d698](https://github.com/newrade/newrade-core/commit/567d6984e197123c559b00cfdf62e516dda7e838))
- **core-gatsby-config:** add size-plugin for production build
  ([2d38bc0](https://github.com/newrade/newrade-core/commit/2d38bc0be41781dc916747151ac00e44e476fc56))
- **core-react-ui:** add new input and nav items
  ([54ed45e](https://github.com/newrade/newrade-core/commit/54ed45e6a43fbd0a2c4fefdfddef40eacb82097d))
- **core-react-ui:** rework theming and remove reverse color mode (will use React.Context)
  ([75b0ceb](https://github.com/newrade/newrade-core/commit/75b0cebc0c7066370a9617b763857ee6761ea088))

# [2.4.0](https://github.com/newrade/newrade-core/compare/@newrade/ze-design-website@2.3.0...@newrade/ze-design-website@2.4.0) (2021-11-18)

### Bug Fixes

- **core:** fix node version
  ([4a3a2ed](https://github.com/newrade/newrade-core/commit/4a3a2ed77c3108e8b93016fba8f1e468e125f671))
- **core:** fix typecheck command
  ([a4ee25e](https://github.com/newrade/newrade-core/commit/a4ee25eb09e9aee5d363acdf106f0420aeb9cf33))
- **core:** upgrade vanilla extract setup
  ([60e559d](https://github.com/newrade/newrade-core/commit/60e559d40f877739d4c2c21403f2ba55f131b0d2))
- **core-gatsby-ui:** fix lorenipsum markdown import
  ([d00e3c4](https://github.com/newrade/newrade-core/commit/d00e3c4c017dfe5ce17cd0663c594a44d35d52e8))
- **core-gatsby-ui:** fixes for iframe
  ([7553845](https://github.com/newrade/newrade-core/commit/75538459910316ff93afe4dcfc0f2693dc40c304))
- **core-gatsby-ui:** improvements for docs layout
  ([638af60](https://github.com/newrade/newrade-core/commit/638af6030f8b278e04e4eb0656007086222d2f4d))
- **core-gatsby-ui:** upgrade gastby and other deps
  ([e9742da](https://github.com/newrade/newrade-core/commit/e9742da54bc667c351cc3ba1bcb835efc173c339))
- **core-ui:** fix for navbar-logo-item (padding)
  ([bea4dd6](https://github.com/newrade/newrade-core/commit/bea4dd6c1277d78a13f791919c42e4b2ec0481d3))
- **core-ui:** fix iframe style replication
  ([e25915b](https://github.com/newrade/newrade-core/commit/e25915b4416bc2f340ecc47d534a59d5e3eabc98))
- **core-ui:** fix test and iframe
  ([c837bf2](https://github.com/newrade/newrade-core/commit/c837bf29e783082b966d6ea1d9127c39f8d51e4f))
- **core-ui:** fixes for various components
  ([85730cf](https://github.com/newrade/newrade-core/commit/85730cf86c907409d6f5a98c436bc63c9c2bc390))
- **core-ui:** improvements for iframe and themewrapper
  ([d0556dc](https://github.com/newrade/newrade-core/commit/d0556dce9d694b76ecc871132812d8c1e0b48619))
- **core-ui:** improvements for nav components and utilities
  ([4e5d922](https://github.com/newrade/newrade-core/commit/4e5d9226d4657e65c4b2d96428ff0671b8a60757))
- **core-ui:** update vanilla, and more features to css variable component
  ([e2120c3](https://github.com/newrade/newrade-core/commit/e2120c3c1c48458b0c689d86aa4d16f2f14c9c7d))
- **core-ui:** upgrade capsize related code
  ([522a9bd](https://github.com/newrade/newrade-core/commit/522a9bdebcda87ee6f9b6078a6147f0901f68372))

### Features

- **core:** adding new components
  ([a122348](https://github.com/newrade/newrade-core/commit/a1223488c070672a10e2121047154a8666a8987e))
- **core-react-ui:** wip for iframe component, navitem components
  ([eed4b3e](https://github.com/newrade/newrade-core/commit/eed4b3ea3cb104ed31d34d856fafc1cd8c4165c6))
- **core-ui:** improvements and fixes for scrolling restoration
  ([4333b6e](https://github.com/newrade/newrade-core/commit/4333b6eb84ab343887deca95c05b4a5287d31fe6))
- **core-ui:** improvements for navbar components
  ([bd8ef00](https://github.com/newrade/newrade-core/commit/bd8ef008cc1afe36eff651f3d982ac075a6382f2))
- **core-ui:** improvements to docs layout
  ([fd1192d](https://github.com/newrade/newrade-core/commit/fd1192d25637eb61b2836caa9c5ea34c6182618f))

# [2.3.0](https://github.com/newrade/newrade-core/compare/@newrade/ze-design-website@2.2.1...@newrade/ze-design-website@2.3.0) (2021-10-05)

### Bug Fixes

- **core:** fix gatsby config
  ([115a637](https://github.com/newrade/newrade-core/commit/115a6374edd2d4a5080c07a881f318d550a8bd00))
- **core:** fix gatsby related error during build
  ([bab4df4](https://github.com/newrade/newrade-core/commit/bab4df48d7cd4c2b43157f26319660ef806c7f39))
- **core:** fix nr command for windows
  ([8f9a058](https://github.com/newrade/newrade-core/commit/8f9a0584bda6320b432bdc29724cae86b4106335))
- **core:** fixes for docs layout
  ([3c354f0](https://github.com/newrade/newrade-core/commit/3c354f07c9b48dd508aa1fd7cdace74fb7a358be))
- **core:** fixes for gatsby ssr in dev
  ([6ea2782](https://github.com/newrade/newrade-core/commit/6ea27825a630eb55deefa17da243ddc7f81a1304))
- **core:** fixes issue with env-cmd on windows
  ([905cbc7](https://github.com/newrade/newrade-core/commit/905cbc73d01f28b1aca2db2f7596b96317fd047e))
- **core:** update scripts and doc to support windows
  ([22694d7](https://github.com/newrade/newrade-core/commit/22694d7dd96f8d72669fa480f3a4354876e2f319))
- **core-cli:** fix std bugs
  ([038eea7](https://github.com/newrade/newrade-core/commit/038eea7de819a1316e2d638f5594d34dff193e8a))
- **core-cli:** fixes for windows compatibility
  ([6c08f00](https://github.com/newrade/newrade-core/commit/6c08f000c22b3bfce2d8ffdf117cc3090080c002))
- **core-gatsby-ui:** finalize logic for navigation api utilities
  ([23811da](https://github.com/newrade/newrade-core/commit/23811daa6d2df12209b4d43d098b162a86bf758d))
- **core-gatsby-ui:** handle cases when siteMetadata is not set
  ([65fc96d](https://github.com/newrade/newrade-core/commit/65fc96dc789289781da4c13904599ab465421dd4))
- **core-gatsby-ui:** upgrade gatsby
  ([fefd2af](https://github.com/newrade/newrade-core/commit/fefd2af022f72ccdbe18dfd7417f5cd9842a6312))
- **core-react-ui:** fixes for bodyscrolllock for ios 15
  ([544178d](https://github.com/newrade/newrade-core/commit/544178d23d8b34ef2d326df8d8f3d39676c57954))

### Features

- **core:** add new components for docs layout
  ([f745ef1](https://github.com/newrade/newrade-core/commit/f745ef13ebe1183a582cf5524591f68f5ced4e3f))
- **core:** adding updated navigation api hooks and utilities
  ([8c9eef3](https://github.com/newrade/newrade-core/commit/8c9eef3469968b7d919167cdc843ce67eb30cdcb))
- **core:** update ze nav with example to switch langs
  ([2f082a7](https://github.com/newrade/newrade-core/commit/2f082a7e8a5bd442fdc58215b39ba78e079743d6))
- **core-gatsby-config:** create plugin for cache in ts files
  ([3f45fb0](https://github.com/newrade/newrade-core/commit/3f45fb04d5dc7c27d77332e63a286fcb650ed2d4))
- **core-gatsby-ui:** working on improvements to navigation api hooks and utilities
  ([6a59bce](https://github.com/newrade/newrade-core/commit/6a59bce5de600e5dd8b997a5f4a627ccac5786a8))

## [2.2.1](https://github.com/newrade/newrade-core/compare/@newrade/ze-design-website@2.2.0...@newrade/ze-design-website@2.2.1) (2021-09-09)

### Bug Fixes

- **core:** fix code block issue in mdx + update sidebar documentation
  ([69725f2](https://github.com/newrade/newrade-core/commit/69725f29148494a574061b808c374359de308a53))
- **core-cli:** fix gatsby wrapper
  ([6d704df](https://github.com/newrade/newrade-core/commit/6d704df752c488b332b1ae7db58ead77e044ab40))
- **ze:** fix dependencies
  ([77b25c0](https://github.com/newrade/newrade-core/commit/77b25c018d6d4c00b8fc2c193ce9a07d1b86f8a3))

# [2.2.0](https://github.com/newrade/newrade-core/compare/@newrade/ze-design-website@2.1.0...@newrade/ze-design-website@2.2.0) (2021-08-31)

### Bug Fixes

- **core:** add ls-lint
  ([76728ca](https://github.com/newrade/newrade-core/commit/76728ca9b5e340d7587f596e3e4ca373e788ca91))
- **core:** big cleanup of unnecessary tsconfig files
  ([36cbad5](https://github.com/newrade/newrade-core/commit/36cbad539a31dc00c8ab7cf12e6a1916692917a7))
- **core:** build fixes for ze-packages
  ([b3a24d8](https://github.com/newrade/newrade-core/commit/b3a24d88337038b861ab5eccc479f118543c4d21))
- **core:** fix config files for gatsby
  ([5f495d0](https://github.com/newrade/newrade-core/commit/5f495d071b5e8f078d7be39f2618ecc57905273b))
- **core:** fix css side effect
  ([9ba6ea8](https://github.com/newrade/newrade-core/commit/9ba6ea836e0c9348799470178931d6f0bfde128e))
- **core:** fix deps in packages
  ([112f5c4](https://github.com/newrade/newrade-core/commit/112f5c421e3e5aef5ffb510cc6cf3d615ef7aba1))
- **core:** fix for imports
  ([5cc63ef](https://github.com/newrade/newrade-core/commit/5cc63ef99078f5cf01835c9d2116f15300f5fb63))
- **core:** fix layout component for docs and design system
  ([79da8c8](https://github.com/newrade/newrade-core/commit/79da8c83a3d4937e10e85faf1dcddc6f6a82470f))
- **core:** fix ls-lint config
  ([bb554f2](https://github.com/newrade/newrade-core/commit/bb554f2427845dc80b0cc0d4493874fac539cb5e))
- **core:** fix once and for all the paths for core-react-ui and core-gatsby-ui
  ([3a4691c](https://github.com/newrade/newrade-core/commit/3a4691cf9642377b65960f1ad8c7f6264e318c64))
- **core:** fix test config
  ([9d3757b](https://github.com/newrade/newrade-core/commit/9d3757be70590a7b59f536258c8c6bb9215e1076))
- **core:** fix typecheck command
  ([4bab26c](https://github.com/newrade/newrade-core/commit/4bab26c27b1f679dc8376b84347aa94d2d235eea))
- **core:** fixes for page generation (i18)
  ([d16b451](https://github.com/newrade/newrade-core/commit/d16b4517a8a8c676cf60c5e7cb239905ac0b2bfd))
- **core:** fixes for workflows actions
  ([3d25903](https://github.com/newrade/newrade-core/commit/3d25903450b874a5bf805549ecb17ae59361132f))
- **core:** fixes for ze-design-website
  ([bcbee46](https://github.com/newrade/newrade-core/commit/bcbee46a144116bf1ec72067ede8ee41d5291da7))
- **core:** refactor core gatsby plugin
  ([1c71ce6](https://github.com/newrade/newrade-core/commit/1c71ce6f58922656b029a8e8ae0244320f0ab492))
- **core:** various fixes for core packages targeting documentation & core docs update
  ([3ce203f](https://github.com/newrade/newrade-core/commit/3ce203fbbc073394a71adcad1979cc1ef1031903))
- **core-gatsby-ui:** documentation improvements
  ([ec944bb](https://github.com/newrade/newrade-core/commit/ec944bbc27b0252024cf30ef948204d7ca5410ae))
- **core-react-ui:** fix bad import
  ([46caa70](https://github.com/newrade/newrade-core/commit/46caa70461d41762723fe3d152475117f6a397c2))
- **root:** fixes for webpack and gatsby config
  ([0421692](https://github.com/newrade/newrade-core/commit/04216928e08cfdf9be562e8b0ac4263db22943ec))
- **ze:** fix build script
  ([b23b606](https://github.com/newrade/newrade-core/commit/b23b6064c400d4e124d101d436e828fcde9082ed))
- **ze:** fixes for ze demo website
  ([0f31dbf](https://github.com/newrade/newrade-core/commit/0f31dbf5434b749562cb98c9fa20b2591ecaebcb))

### Features

- **core:** add i18n component
  ([756b0f1](https://github.com/newrade/newrade-core/commit/756b0f1e958be77689b3733e62157a3c1d029adc))
- **core:** upgrade gatsby, gatsby-plugin-image
  ([d05676e](https://github.com/newrade/newrade-core/commit/d05676e05fc6b37d9ce82a56109c8e94398f18fd))
- **core-react-ui:** refactor navigation components
  ([0f579fc](https://github.com/newrade/newrade-core/commit/0f579fc0c8bd6ade42237230c5ab0c8e608255db))

# [2.1.0](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/compare/@newrade/ze-design-website@2.0.0...@newrade/ze-design-website@2.1.0) (2021-07-15)

### Bug Fixes

- **core-gatsby-config:** fix creation of 404 page
  ([6f56d51](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/6f56d51b6685f5c55843669eeaebe85a9423f9f5))
- **core-react-ui:** fix sidebar-container initial animation
  ([a3f8a5f](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/a3f8a5fcbcb8099d002dbbad7ebeffff373f3ccf))
- **core-react-ui:** rework sidebar-container and use-body-scroll-lock
  ([0a22c33](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/0a22c333e52291fa404178e82182685888c3ee81))

### Features

- **core-react-ui:** add new navbar components
  ([6d5ac76](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/6d5ac76507f73eea1a5bc9c331948fa3a61ff82b))
- **core-react-ui:** add useLocalStorage hook
  ([47901a3](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/47901a3709f012bbf0e39de581b6858de158256e))

# [2.0.0](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/compare/@newrade/ze-design-website@1.2.0...@newrade/ze-design-website@2.0.0) (2021-07-12)

### Bug Fixes

- **core-react-ui:** fix bug in treat files
  ([c0eff40](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/c0eff40b3f6bee77a4d5ed8f218725f4c8f534c5))

### Features

- **core-react-ui:** add additional configuration to icons provider
  ([143e7e4](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/143e7e42c23921cae6aa18366c1805b69247a113))
- **core-react-ui:** improve theme-wrapper
  ([dcc5cc8](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/dcc5cc88024f6227e4a11db27233d18631159fa4))
- **gatsby:** upgrade to webpack v5 and gastby v3
  ([457d1b8](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/457d1b83a84f4416be2adf3a659df6737adcfa87))

### BREAKING CHANGES

- **gatsby:** webpack v5 and gatsby v3

# [1.2.0](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/compare/@newrade/ze-design-website@1.1.1...@newrade/ze-design-website@1.2.0) (2021-07-05)

### Features

- **core-design-system-docs:** improve icons presentation
  ([594a5c6](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/594a5c69e77e81196967c62089f2e2937b46ce3c))
- **core-gatsby-ui:** add icons family and website link to context
  ([c878ec9](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/c878ec9bea7592ed223187b9bddd580e7c538578))

## [1.1.1](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/compare/@newrade/ze-design-website@1.1.0...@newrade/ze-design-website@1.1.1) (2021-07-03)

**Note:** Version bump only for package @newrade/ze-design-website

# 1.1.0 (2021-07-03)

### Bug Fixes

- **ze-design-system:** fix gastby config
  ([07467d0](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/07467d0102b000bd8a3942ad31fc58572135bc81))
- **ze-design-system:** update logos
  ([78861e4](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/78861e433d48642648cd8705008f0d21359f96a4))

### Features

- **core-gatsby-ui:** rework components and add more example to ze design system
  ([48e8a67](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/48e8a675ebef58b2d0521cdf1707df6540a09434))
- **ze:** add ze design system packages
  ([00a8ea6](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/00a8ea6a103b441068028a8839dff96c4bed8c4a))
- **ze:** init design system and website
  ([1de86f8](https://github.com/newrade/newrade-core/tree/master/packages/ze-design-website/commit/1de86f8ce18814f476440372b1d21ee5b8773876))
