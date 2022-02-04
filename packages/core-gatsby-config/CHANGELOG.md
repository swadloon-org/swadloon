# Change Log

All notable changes to this project will be documented in this file.

See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.3.0](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@3.2.0...@newrade/core-gatsb-config@3.3.0) (2022-01-03)

### Bug Fixes

- **core:** fix imports and error in jsdoc comment block
  ([44b5893](https://github.com/newrade/newrade-core/commit/44b58930bfdc7c258c9a6516667ab9bfeabd3537))
- **core:** set internal packages version to \* which means any version found locally
  ([70e0413](https://github.com/newrade/newrade-core/commit/70e0413057146e125018ba6d5f7781a9a1a329f5))
- **core-gatsby-ui:** update deps and completely disable caching (gatsby is drunk)
  ([25561bb](https://github.com/newrade/newrade-core/commit/25561bb9b971482008bf38e7bf6f3abcd26e803a))
- **core-webpack-config:** update some config for development setup
  ([e715c66](https://github.com/newrade/newrade-core/commit/e715c66dda1669ee8a01f7548b73ce150b953a9f))

### Features

- **core-ui:** add light dark mode to code components
  ([c1b508b](https://github.com/newrade/newrade-core/commit/c1b508b928fdf5e312928a29578fc25f8b33899f))
- **core-ui:** add new capabilities to the docs engine with documentation.js (extract jsdoc)
  ([c8df57e](https://github.com/newrade/newrade-core/commit/c8df57e9aaeb72525848d2e2eb13a046137e2be8))

# [3.2.0](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@3.1.1...@newrade/core-gatsb-config@3.2.0) (2021-12-21)

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
- **core-gatsby-config:** enable progress plugin only for build
  ([4a8ec4d](https://github.com/newrade/newrade-core/commit/4a8ec4d5d83f426e6aaf0104c32ccb1ca872cf6c))
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

## [3.1.1](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@3.1.0...@newrade/core-gatsb-config@3.1.1) (2021-11-18)

### Bug Fixes

- **core-gatsby-ui:** fixes for docs layout
  ([17aec4e](https://github.com/newrade/newrade-core/commit/17aec4e5e2ecdebf80e362e952cd8e02e78bcae1))
- **core-gatsby-ui:** upgrade gastby and other deps
  ([e9742da](https://github.com/newrade/newrade-core/commit/e9742da54bc667c351cc3ba1bcb835efc173c339))

# [3.1.0](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@3.0.1...@newrade/core-gatsb-config@3.1.0) (2021-10-05)

### Bug Fixes

- **core:** fix for dev ssr for gatsby
  ([2e3a32c](https://github.com/newrade/newrade-core/commit/2e3a32cb4ef3ff99ec0ce37980d5e92c516664ba))
- **core:** fix gatsby config
  ([115a637](https://github.com/newrade/newrade-core/commit/115a6374edd2d4a5080c07a881f318d550a8bd00))
- **core:** fix gatsby related error during build
  ([bab4df4](https://github.com/newrade/newrade-core/commit/bab4df48d7cd4c2b43157f26319660ef806c7f39))
- **core:** fix workflows for dependabot + small fix for gatsby-ui
  ([3f8287d](https://github.com/newrade/newrade-core/commit/3f8287d4c9cac6a8f5a285f69ca6fc1e9b4abb6e))
- **core:** fixes for components
  ([f84cca4](https://github.com/newrade/newrade-core/commit/f84cca4f9753bab261f841a132964c02f8b8c85a))
- **core:** fixes for gatsby ssr in dev
  ([6ea2782](https://github.com/newrade/newrade-core/commit/6ea27825a630eb55deefa17da243ddc7f81a1304))
- **core:** update scripts and doc to support windows
  ([22694d7](https://github.com/newrade/newrade-core/commit/22694d7dd96f8d72669fa480f3a4354876e2f319))
- **core-cli:** fixes for windows compatibility
  ([6c08f00](https://github.com/newrade/newrade-core/commit/6c08f000c22b3bfce2d8ffdf117cc3090080c002))
- **core-gatsby-ui:** handle cases when siteMetadata is not set
  ([65fc96d](https://github.com/newrade/newrade-core/commit/65fc96dc789289781da4c13904599ab465421dd4))
- **core-gatsby-ui:** upgrade gatsby
  ([fefd2af](https://github.com/newrade/newrade-core/commit/fefd2af022f72ccdbe18dfd7417f5cd9842a6312))

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

## [3.0.1](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@3.0.0...@newrade/core-gatsb-config@3.0.1) (2021-09-09)

### Bug Fixes

- **core:** fix code block issue in mdx + update sidebar documentation
  ([69725f2](https://github.com/newrade/newrade-core/commit/69725f29148494a574061b808c374359de308a53))

# 3.0.0 (2021-08-31)

### Bug Fixes

- **assets:** reorg vsb and alto assets (ds)
  ([38bc97f](https://github.com/newrade/newrade-core/commit/38bc97f74cbad6e4d9cf135e7a88c372244f3876))
- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))
- **build:** temporarily disable project reference for gatsby sites
  ([ea43bdd](https://github.com/newrade/newrade-core/commit/ea43bdd5859ca93660b1da00a81ded93b8da7b47))
- **build:** working on gh action build
  ([41efe00](https://github.com/newrade/newrade-core/commit/41efe00146700e0108b66eac17f8bbe033f4d1f6))
- **core:** add ls-lint
  ([76728ca](https://github.com/newrade/newrade-core/commit/76728ca9b5e340d7587f596e3e4ca373e788ca91))
- **core:** big cleanup of unnecessary tsconfig files
  ([36cbad5](https://github.com/newrade/newrade-core/commit/36cbad539a31dc00c8ab7cf12e6a1916692917a7))
- **core:** fix babel loader config
  ([14ed3c5](https://github.com/newrade/newrade-core/commit/14ed3c5f777cbf952f69e75fdb0edc5efd86e646))
- **core:** fix bad imports in core-react-ui and core-gatsby-ui
  ([9026bee](https://github.com/newrade/newrade-core/commit/9026bee25ece71e555a4a877d285f65042b41b88))
- **core:** fix config files for gatsby
  ([5f495d0](https://github.com/newrade/newrade-core/commit/5f495d071b5e8f078d7be39f2618ecc57905273b))
- **core:** fix deps and one error in gatsby-config
  ([f0e3a84](https://github.com/newrade/newrade-core/commit/f0e3a844510bb3f9ca907c326d04a9b1c9c4b94e))
- **core:** fix deps in packages
  ([112f5c4](https://github.com/newrade/newrade-core/commit/112f5c421e3e5aef5ffb510cc6cf3d615ef7aba1))
- **core:** fix ls-lint config
  ([bb554f2](https://github.com/newrade/newrade-core/commit/bb554f2427845dc80b0cc0d4493874fac539cb5e))
- **core:** fix once and for all the paths for core-react-ui and core-gatsby-ui
  ([3a4691c](https://github.com/newrade/newrade-core/commit/3a4691cf9642377b65960f1ad8c7f6264e318c64))
- **core:** fix ssr issues
  ([87252fe](https://github.com/newrade/newrade-core/commit/87252fe76803f36476b146fe01d668c47b2f1ba8))
- **core:** fix test config
  ([9d3757b](https://github.com/newrade/newrade-core/commit/9d3757be70590a7b59f536258c8c6bb9215e1076))
- **core:** fix typecheck command
  ([4bab26c](https://github.com/newrade/newrade-core/commit/4bab26c27b1f679dc8376b84347aa94d2d235eea))
- **core:** fixes for page generation (i18)
  ([d16b451](https://github.com/newrade/newrade-core/commit/d16b4517a8a8c676cf60c5e7cb239905ac0b2bfd))
- **core:** packages are building
  ([a6985ed](https://github.com/newrade/newrade-core/commit/a6985ed2e5d630c8dff85ac8625a4ef5b318a602))
- **core:** refactor core gatsby plugin
  ([1c71ce6](https://github.com/newrade/newrade-core/commit/1c71ce6f58922656b029a8e8ae0244320f0ab492))
- **core:** various fixes for core packages targeting documentation & core docs update
  ([3ce203f](https://github.com/newrade/newrade-core/commit/3ce203fbbc073394a71adcad1979cc1ef1031903))
- **core-common:** remove browser code from core-node-utils
  ([b2595fc](https://github.com/newrade/newrade-core/commit/b2595fcc496d8876b0f658592a66659840d1ec92))
- **core-contentful-lib:** changes
  ([d42278c](https://github.com/newrade/newrade-core/commit/d42278c313ec5ca24a450536f7dc9b624a6d2fc1))
- **core-design-system-docs:** init package
  ([224064a](https://github.com/newrade/newrade-core/commit/224064a713a5f41f998fe1e8e18ea4bfbe8b048d))
- **core-gastby-config:** separate UI components
  ([be3d23e](https://github.com/newrade/newrade-core/commit/be3d23eafc6dbe76e293512fbec5521a8af5db73))
- **core-gastby-starter:** fix char & in url (rename to and)
  ([a0c5cf8](https://github.com/newrade/newrade-core/commit/a0c5cf8fa52cdaff56c0568a8ff7a402b44928d7))
- **core-gastby-starter:** layout for /docs /design-system /pages/
  ([ea84a5c](https://github.com/newrade/newrade-core/commit/ea84a5c557dd39d6b10785d604798e457ff24341))
- **core-gatsby-config:** add ENABLE_GATSBY_REFRESH_ENDPOINT flag
  ([d260e47](https://github.com/newrade/newrade-core/commit/d260e47d0a83034d782a4b7ccfc1f14eb04f60b9))
- **core-gatsby-config:** add new plugin to create contentful pages
  ([3af6c82](https://github.com/newrade/newrade-core/commit/3af6c82d6e2a34653c63baeeb0e0fa0e24c701fa))
- **core-gatsby-config:** apply postcss config
  ([c3de151](https://github.com/newrade/newrade-core/commit/c3de15140a17f50a414dab966c87e45cac9adeb3))
- **core-gatsby-config:** enable strict checks for gastby projects
  ([4cb9ee0](https://github.com/newrade/newrade-core/commit/4cb9ee0d6e34d93ced821f7187a7cb0a14504c7a))
- **core-gatsby-config:** fix config
  ([0ce5d65](https://github.com/newrade/newrade-core/commit/0ce5d65cb93e700ca30037a18c0bf69cea6f3eaf))
- **core-gatsby-config:** fix creation of 404 page
  ([6f56d51](https://github.com/newrade/newrade-core/commit/6f56d51b6685f5c55843669eeaebe85a9423f9f5))
- **core-gatsby-config:** fix locale in create-pages
  ([d8f5353](https://github.com/newrade/newrade-core/commit/d8f5353b870fc6ef3f9c0dc8809ba840afe1085f))
- **core-gatsby-config:** fix page path for design system page
  ([2abccf6](https://github.com/newrade/newrade-core/commit/2abccf6c6829061480eaa6950485b3d13885d177))
- **core-gatsby-config:** fix reloading bug in hmr with treat
  ([26d1a19](https://github.com/newrade/newrade-core/commit/26d1a19de6c66bea70b45808f4668b9a63535b8d))
- **core-gatsby-config:** fix test config
  ([d3f0b7b](https://github.com/newrade/newrade-core/commit/d3f0b7b5103fb85fc764e10ca78e7e6c53b00172))
- **core-gatsby-config:** refactor create pages logic
  ([81c800c](https://github.com/newrade/newrade-core/commit/81c800cf698d37958035e44f5695a8ba39ca6637))
- **core-gatsby-config:** refactor page creation
  ([9b0161c](https://github.com/newrade/newrade-core/commit/9b0161c24dce482a98d55dc0fb0682f1f9ef80fa))
- **core-gatsby-config:** things are starting to work again
  ([9b5dec8](https://github.com/newrade/newrade-core/commit/9b5dec81b161122302006f924aa95f443ad116d2))
- **core-gatsby-config:** wip
  ([23fc34d](https://github.com/newrade/newrade-core/commit/23fc34d697170326d0fac69874652635c2cf50ba))
- **core-gatsby-starter:** add a more reliable way to debug gatsby
  ([d63cd1c](https://github.com/newrade/newrade-core/commit/d63cd1c69ae3af843c74fc3bc927f4c96bf64042))
- **core-gatsby-starter:** add dot env files type check
  ([4c65040](https://github.com/newrade/newrade-core/commit/4c65040705a61efbf9e55ecd585a789dbfd9f623))
- **core-gatsby-starter:** fix page creation
  ([9e6ffaa](https://github.com/newrade/newrade-core/commit/9e6ffaa854dabb24560f18d673f61e9542ddebe2))
- **core-gatsby-starter:** fixes
  ([ffe7715](https://github.com/newrade/newrade-core/commit/ffe771547de87fd75b3745cf76ed136731c5f232))
- **core-gatsby-starter:** refactor templates + setup pages and markdown
  ([4aaa949](https://github.com/newrade/newrade-core/commit/4aaa949750c94a939b35767f2bd3fb20b8fb2614))
- **core-gatsby-starter:** wip
  ([6457254](https://github.com/newrade/newrade-core/commit/6457254e0f99917a7d7d7444ee34596e030e3a5c))
- **core-gatsby-ui:** documentation improvements
  ([ec944bb](https://github.com/newrade/newrade-core/commit/ec944bbc27b0252024cf30ef948204d7ca5410ae))
- **core-gatsby-ui:** fix SEO for templates
  ([9419f69](https://github.com/newrade/newrade-core/commit/9419f699b3a034395adb44358f94a9d01728d1bc))
- **core-gatsby-ui:** fix ssr
  ([095be84](https://github.com/newrade/newrade-core/commit/095be84b95bdd1a0a867341e0bc4d4adf3190469))
- **core-gatsby-ui:** refactor navigation
  ([07fad4c](https://github.com/newrade/newrade-core/commit/07fad4c05c61edc455259cc2c43e369ed9974b90))
- **core-gatsby-ui:** wip
  ([eb7b648](https://github.com/newrade/newrade-core/commit/eb7b64894ee92faea0bf2dc576a4e997ae523bc5))
- **core-react-ui:** add mdx features
  ([bfbee76](https://github.com/newrade/newrade-core/commit/bfbee769e8f029aa4b3a2b03b75645db88877d13))
- **core-react-ui:** fix async bundle and md providers
  ([8f3404a](https://github.com/newrade/newrade-core/commit/8f3404aaa3962b794c359f1a626b4efdf5121e01))
- **core-react-ui:** fix bad import
  ([46caa70](https://github.com/newrade/newrade-core/commit/46caa70461d41762723fe3d152475117f6a397c2))
- **core-react-ui:** fix bug in treat files
  ([c0eff40](https://github.com/newrade/newrade-core/commit/c0eff40b3f6bee77a4d5ed8f218725f4c8f534c5))
- **core-react-ui:** fixes for links
  ([8b0068f](https://github.com/newrade/newrade-core/commit/8b0068f5911c6553e42d8dcacac4b83937dfc435))
- **core-react-ui:** implement aside for mdx docs
  ([006577f](https://github.com/newrade/newrade-core/commit/006577fc028bc948fec48a1a294f0c79892def57))
- **core-react-ui:** remove old google maps API
  ([9cd354b](https://github.com/newrade/newrade-core/commit/9cd354b1b22ad9e2269b6b12bb9ffe693a0bc131))
- **core-react-ui:** rework sidebar-container and use-body-scroll-lock
  ([0a22c33](https://github.com/newrade/newrade-core/commit/0a22c333e52291fa404178e82182685888c3ee81))
- **core-react-ui:** trying to find issue
  ([a62e71c](https://github.com/newrade/newrade-core/commit/a62e71c9c14b2897eb5d619457f2727eed2f2938))
- **core-react-ui:** wip
  ([093aa8f](https://github.com/newrade/newrade-core/commit/093aa8fb17d1c4b8aecca90142666984e239976d))
- **core-node-utils:** refactor envs
  ([1f82218](https://github.com/newrade/newrade-core/commit/1f82218b98f869c7e16202601bffe13ae085ae94))
- **core-webpack-config:** fix tsconfig
  ([44dc7df](https://github.com/newrade/newrade-core/commit/44dc7dfc09c8044d08e1d1c9a0182f24dbc44126))
- **core-webpack-config:** update loaders and plugins config
  ([c3810c1](https://github.com/newrade/newrade-core/commit/c3810c12439ca8f0b5c90436238b88bce61ca2d6))
- **deep-scan-fixes:** fixing medium issues
  ([ae016c5](https://github.com/newrade/newrade-core/commit/ae016c53a192df6cfdb33f3c59da987870282b07))
- **eslint:** fight with eslint and goddamned gatsby
  ([d739497](https://github.com/newrade/newrade-core/commit/d739497cbf641b3e5be26230008c5c58026f026e))
- **eslint:** fix false error for prettier
  ([afeec6a](https://github.com/newrade/newrade-core/commit/afeec6a546edb848bab42add780590dc27b13adf))
- **gastby:** fixes for markdown file generation
  ([2982616](https://github.com/newrade/newrade-core/commit/29826163498932d216cc22ec713d7de076812fbb))
- **gatsby:** add scripts to generate config files that can be easily debugged
  ([56c0a41](https://github.com/newrade/newrade-core/commit/56c0a4142a9fbd7b66a462aa18c06b60819eee69))
- **gatsby:** fixes typechecking
  ([4c3b323](https://github.com/newrade/newrade-core/commit/4c3b323dce2eda2bb0b413628290f3238898c23e))
- **gatsby:** update gatsby site config to include new flags
  ([48422e7](https://github.com/newrade/newrade-core/commit/48422e70dd02ff76bd4fdbd823cd1f5e34674136))
- **gatsby:** use shared config for gatsby
  ([0c29387](https://github.com/newrade/newrade-core/commit/0c29387167b20f890241e92297939276dd64ba43))
- **gatsby-starter:** fixes for nav queries
  ([170803a](https://github.com/newrade/newrade-core/commit/170803a87cb0bb657407d58a5084e211942fac89))
- **github-actions:** add utility to build url
  ([7ee6c90](https://github.com/newrade/newrade-core/commit/7ee6c90342c730088561dd6ba050b47790937c6d))
- **lint:** fix line width to 100
  ([49574eb](https://github.com/newrade/newrade-core/commit/49574eb1fe8aa3bbdf3cf9a6067956ccf3a96561))
- **lint-fix:** fixing current lint error on the build
  ([c28d6f3](https://github.com/newrade/newrade-core/commit/c28d6f3e688af0e4ad42abe1a8bc5630b663dbda))
- **mir-website:** add page query
  ([4d372d2](https://github.com/newrade/newrade-core/commit/4d372d2baaef8eb63093b017be0a1b83864ebd4b))
- **mir-website:** config fixes
  ([8128983](https://github.com/newrade/newrade-core/commit/81289832a9dd327dcecf11b357696ecccdd3338c))
- **mir-website:** fix build
  ([ab6b04b](https://github.com/newrade/newrade-core/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **mir-website:** fix obscure bug with treat, remove double usage of useStyle()
  ([59b043a](https://github.com/newrade/newrade-core/commit/59b043a8163318a32ea28c5b280d446ab7d291ab))
- **mir-website:** fix some gatsby codegen config
  ([c8f6746](https://github.com/newrade/newrade-core/commit/c8f674603443a17a809a37da125c940ddfa00d24))
- **mir-website:** fix tsconfig
  ([a8ea2fb](https://github.com/newrade/newrade-core/commit/a8ea2fb6e62054df36cdf320651eefa5743e7380))
- **mir-website:** fixing css
  ([94ce249](https://github.com/newrade/newrade-core/commit/94ce2494ba9366f5709067f723e72aa800149f48))
- **mir-website:** hotfix for blog generation
  ([7436d44](https://github.com/newrade/newrade-core/commit/7436d448e10a41d660adb3fdb6db946f48989d11))
- **mir-website:** implement mdx based blog posts
  ([4fca42d](https://github.com/newrade/newrade-core/commit/4fca42db2a278de3047fb72e77332115579e84e5))
- **mir-website:** remove yarn clean before each yarn build
  ([e201a90](https://github.com/newrade/newrade-core/commit/e201a90373e98a1efd21f26e977a479e755f5c07))
- **newrade-website:** clean up
  ([9534e61](https://github.com/newrade/newrade-core/commit/9534e61b01545371bde739d05c4519ead5fbd143))
- **newrade-website:** disable gatsby-remark-mermaid as gatsby-cloud doesn't support puppeteer
  ([e5c42a8](https://github.com/newrade/newrade-core/commit/e5c42a84901b71a400f58ad72c173f6c68bf3773))
- **newrade-website:** docs update
  ([08db9ce](https://github.com/newrade/newrade-core/commit/08db9ce60c3779684db9260c435792e532bd6729))
- **newrade-website:** fix fonts import
  ([31dab49](https://github.com/newrade/newrade-core/commit/31dab491d5d13eedd8b7f15a96c333c441551b9d))
- **newrade-website:** update configs
  ([90db24e](https://github.com/newrade/newrade-core/commit/90db24e3ca7e9e8e4b6d41823d4a4366ed70db26))
- **patch:** fix deps
  ([ea483f3](https://github.com/newrade/newrade-core/commit/ea483f365e260ef7a4d96b66de5a30afac4a397b))
- **react-icons:** fix react-icons import
  ([a8506f8](https://github.com/newrade/newrade-core/commit/a8506f89337f593c9745f7db399969973aa5a29f))
- **repo:** add .env type checking to all packages
  ([d382e42](https://github.com/newrade/newrade-core/commit/d382e42e2dcfbff0b635b4aa1f2c04e56deda4d7))
- **repo:** add missing prebuild commands
  ([aeebd40](https://github.com/newrade/newrade-core/commit/aeebd4009243fbbd1ce1473a31dcb26299b41121))
- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))
- **repo:** fix gatsby website
  ([f1a1e23](https://github.com/newrade/newrade-core/commit/f1a1e238938adf480d05884384425c75691fff63))
- **repo:** fix linting issues
  ([25cd3d4](https://github.com/newrade/newrade-core/commit/25cd3d4d91ada263a02177eed2eecbc4bcc0fd70))
- **repo:** fix scripts
  ([1468532](https://github.com/newrade/newrade-core/commit/1468532b791600a47b2b8082ef822148a72d764c))
- **repo:** fix typings
  ([4299ed3](https://github.com/newrade/newrade-core/commit/4299ed3367c15cee98dd6aeb22cebc2714b1c750))
- **repo:** fixes after deepscan
  ([4e6e58f](https://github.com/newrade/newrade-core/commit/4e6e58fb7788e6a4361dffd2eb593970306d9404))
- **repo:** fixes for refactor and react-ui-app
  ([91abbbd](https://github.com/newrade/newrade-core/commit/91abbbd1ee9fd658b3e02c016313292e88f19af0))
- **repo:** fixes for tsconfigs
  ([3472b8e](https://github.com/newrade/newrade-core/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** improve tsconfigs and build references
  ([22a31c1](https://github.com/newrade/newrade-core/commit/22a31c17608f6d6fda5ccd193588fd9194c68502))
- **repo:** remove postinstall command for packages
  ([7e8bd73](https://github.com/newrade/newrade-core/commit/7e8bd73bcec5877233de0770becf757d8cb7787a))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade-core/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **repo:** wip ([68d9f77](https://github.com/newrade/newrade-core/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **root:** fixes for webpack and gatsby config
  ([0421692](https://github.com/newrade/newrade-core/commit/04216928e08cfdf9be562e8b0ac4263db22943ec))
- **sites:** fixes and all assets
  ([c859573](https://github.com/newrade/newrade-core/commit/c859573dcb8eb79e095e9a98be6b08dbb0063ff9))
- **ts:** fix last non strict packages
  ([ce1a8cb](https://github.com/newrade/newrade-core/commit/ce1a8cbf6b459f1f0e0510d4df0c2885eb0d60d6))
- **typescript:** remove typeRoots which is almost a deprecated feature
  ([edfab31](https://github.com/newrade/newrade-core/commit/edfab31f34f518881c56fea74aa83331957ddcaf))
- **typescript:** revert to v3 since eslint and prettier are not ready
  ([08bc333](https://github.com/newrade/newrade-core/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))
- **vsb-api:** fixes
  ([5a987dd](https://github.com/newrade/newrade-core/commit/5a987dd707852165c3a1834e9e6d0ec359663c8f))
- **vsb-common:** fix esm build that would prevent treeshaking for gastby/webpack
  ([ad116b3](https://github.com/newrade/newrade-core/commit/ad116b38456b0eb64b6a82d7deef3d8ad66510a3))
- **vsb-website:** fix build issues
  ([11fd560](https://github.com/newrade/newrade-core/commit/11fd56082bd6eb576f5a7309b419611467a1850d))
- **vsb-website:** implement fixes for nav
  ([188087f](https://github.com/newrade/newrade-core/commit/188087f8dcd1b6e836e86186d8e291aa8c537dfe))
- **vsb-website:** optimizations
  ([ed0a853](https://github.com/newrade/newrade-core/commit/ed0a853cce3c2105c8b527cd524ee2ec55875f6d))
- **vsb-website:** optimize lcp
  ([875ce00](https://github.com/newrade/newrade-core/commit/875ce0061ada6d2b1d12f8782983e499e4e83c6c))
- **vsb-website:** refactor section layout
  ([673134c](https://github.com/newrade/newrade-core/commit/673134ce8d659e0226b438d5beb5cd4acc9da690))
- **vsb-website:** section banner done
  ([0fb9609](https://github.com/newrade/newrade-core/commit/0fb9609bcbc0d83aaee537e6033da01ff4dae620))
- **vsb-website:** wip on fix for ssr bug
  ([884e643](https://github.com/newrade/newrade-core/commit/884e6439e95f02bc724f84b14b571cac45a26a07))
- **websites:** fixes for stability
  ([f398587](https://github.com/newrade/newrade-core/commit/f3985874c00b07e7455bdff5027820f7dfd38689))
- **wip:** wip ([3319697](https://github.com/newrade/newrade-core/commit/3319697e314d643fb809a790b2d9c3b1bf1c749b))
- **wip-react-ui:** wip
  ([d8dc726](https://github.com/newrade/newrade-core/commit/d8dc7262ca611475cc028b1cdb4c9d121f170962))

### Features

- **alto-website:** init website
  ([e1f17f2](https://github.com/newrade/newrade-core/commit/e1f17f275a08e5fc75351e5c5d0567fdb447fd29))
- **core:** add example for webpack dll plugin
  ([d212163](https://github.com/newrade/newrade-core/commit/d21216351454f5b35d14f1bd2427e743ed34a325))
- **core:** add i18n component
  ([756b0f1](https://github.com/newrade/newrade-core/commit/756b0f1e958be77689b3733e62157a3c1d029adc))
- **core:** upgrade gatsby, gatsby-plugin-image
  ([d05676e](https://github.com/newrade/newrade-core/commit/d05676e05fc6b37d9ce82a56109c8e94398f18fd))
- **core:** upgrade to typescript 4.4.0 beta
  ([98064e3](https://github.com/newrade/newrade-core/commit/98064e3096af4cb5a12c46d880fa3bd09708f954))
- **core-\*:** refactor core-design-system and core-react-ui
  ([106720e](https://github.com/newrade/newrade-core/commit/106720e4214f6491beac76c23977f5d52c1cd058))
- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade-core/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-design-system:** reorg and removing any css props from design-system
  ([b353e4f](https://github.com/newrade/newrade-core/commit/b353e4f47107dc3b1e4ff363b600033655acd044))
- **core-design-system:** working on css implementation
  ([3c6666c](https://github.com/newrade/newrade-core/commit/3c6666c2bd1c4ca239ad5ec38ebb6e78fffab43e))
- **core-gastby-config:** add feature to common plugin
  ([338812a](https://github.com/newrade/newrade-core/commit/338812a356d19a3d985000def12028b1e25e0220))
- **core-gatsby-config:** add new plugin
  ([2bd8c5c](https://github.com/newrade/newrade-core/commit/2bd8c5c32cf2992eb9f2cf5a6b6c16b666b1013d))
- **core-gatsby-config:** add remark-wikilink
  ([11d069b](https://github.com/newrade/newrade-core/commit/11d069b7ce0040cade3a0b5714ba4e2cf720afc1))
- **core-gatsby-config:** add shared config
  ([7d49add](https://github.com/newrade/newrade-core/commit/7d49adde7eb14b678c123933abdc12e7a76691e2))
- **core-gatsby-config:** init package
  ([0bd1e36](https://github.com/newrade/newrade-core/commit/0bd1e368093067c80011e8f9d9e0ecd295dc2766))
- **core-gatsby-config:** refactor page creation logic for .mdx, .md, and .tsx files
  ([02cb1bb](https://github.com/newrade/newrade-core/commit/02cb1bb2dc93be32ed8e5fda87c062ae2c05ea05))
- **core-gatsby-starter:** minimal markdown setup with RichText
  ([57fbac8](https://github.com/newrade/newrade-core/commit/57fbac8b2838945fdd5a9abca09348a0605df1ba))
- **core-gatsby-ui:** implemented section banner
  ([6514337](https://github.com/newrade/newrade-core/commit/6514337788141b7bede1d74084aee10f21b6e8c2))
- **core-gatsby-ui:** trying to use loadable component, wip
  ([72c0330](https://github.com/newrade/newrade-core/commit/72c0330e06f18a6a55034ee124ce692e8dcdaefd))
- **core-gatsby-ui:** working on sections and blocks
  ([4d55bfd](https://github.com/newrade/newrade-core/commit/4d55bfde04fd1df6d8b149a69414ba5129747fd6))
- **core-github-action:** refactor set-app-env
  ([c31ca6c](https://github.com/newrade/newrade-core/commit/c31ca6c39b2efa2c32ee3e08eb39125a3d13b8b2))
- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **core-react-ui:** add CSSReset component and other utilities
  ([dadedcb](https://github.com/newrade/newrade-core/commit/dadedcb398a615c60a6a9785faa4cdfd5e9b0c6e))
- **core-react-ui:** add img-downloader component
  ([b7f89c8](https://github.com/newrade/newrade-core/commit/b7f89c812ccecb97dab7e99cb31169fe8118bdfd))
- **core-react-ui:** add nav items
  ([36d340b](https://github.com/newrade/newrade-core/commit/36d340bff5c883011c0de1caaadb072d966d8c25))
- **core-react-ui:** add new navbar components
  ([6d5ac76](https://github.com/newrade/newrade-core/commit/6d5ac76507f73eea1a5bc9c331948fa3a61ff82b))
- **core-react-ui:** add seo models and components
  ([4861d62](https://github.com/newrade/newrade-core/commit/4861d626c4c25b96f1d3f22bf5a958d3417d2ad9))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **core-react-ui:** improvements to ds pages
  ([10f9095](https://github.com/newrade/newrade-core/commit/10f9095cda31b61f7b1368141243f595c6468e65))
- **core-react-ui:** wip for icon provider
  ([c0a5479](https://github.com/newrade/newrade-core/commit/c0a547903a9e8d38b82f3bd051c20baf77f72a63))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade-core/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **docs:** update docs
  ([75a7725](https://github.com/newrade/newrade-core/commit/75a7725a8c3b0b59508cdd203567af1d3fa9d308))
- **gatsby:** move layout components to core-gatsby-ui
  ([7ac5f9a](https://github.com/newrade/newrade-core/commit/7ac5f9af92d86f8266abc19fc5396df012c27dc3))
- **gatsby:** upgrade to latest v2 gatsby
  ([6ccfd11](https://github.com/newrade/newrade-core/commit/6ccfd11efe789383353be0cd3b5a251e22a8f41a))
- **gatsby:** upgrade to webpack v5 and gastby v3
  ([457d1b8](https://github.com/newrade/newrade-core/commit/457d1b83a84f4416be2adf3a659df6737adcfa87))
- **logging:** implement structured loggging
  ([713cb45](https://github.com/newrade/newrade-core/commit/713cb4501897b14ff3d53c93d32bce0686759a7c))
- **mir-website:** add gatsby config for seo
  ([5a68bce](https://github.com/newrade/newrade-core/commit/5a68bce2df6ac71f533850e91f5686e3b7d352ec))
- **newrade-admin:** add google app scripts example
  ([a7a9280](https://github.com/newrade/newrade-core/commit/a7a928074a09143165c6cd1f389fdc7e35b9a7cf))
- **newrade-website:** enable mermaid
  ([b9fcc5b](https://github.com/newrade/newrade-core/commit/b9fcc5b414a0d9a5add06c75365c66ebe469ff11))
- **newrade-website:** reorg docs
  ([47856d1](https://github.com/newrade/newrade-core/commit/47856d1889c2311c01cf4cd9f94f52fadd1ac61f))
- **newrade-website:** update docs
  ([999fa76](https://github.com/newrade/newrade-core/commit/999fa7639941e100bf5c5aaff42fdd4fcb65236b))
- **treat:** add vanilla extract
  ([d39e010](https://github.com/newrade/newrade-core/commit/d39e01045115db925a6a63001471de80e540702b))
- **vsb-website:** accordions for faq section
  ([a19e65f](https://github.com/newrade/newrade-core/commit/a19e65f39193a849186c41ab2c1dcfad157e3724))
- **vsb-website:** add theme
  ([a93920b](https://github.com/newrade/newrade-core/commit/a93920b651146b05dca9adc77d5389fa56de92cc))
- **vsb-website:** adding gatsby ui components
  ([1607429](https://github.com/newrade/newrade-core/commit/16074292a2cf0ebe19f690a86011b6d750cc5380))
- **vsb-website:** fix fragments after refactor
  ([253f987](https://github.com/newrade/newrade-core/commit/253f98723f264938eab85113c71bbcdddc7a041f))
- **vsb-website:** implement sidenav
  ([6b57a86](https://github.com/newrade/newrade-core/commit/6b57a867a88f57636c1d8268608d0605a02cc924))
- **vsb-website:** wip on the theme config
  ([6362338](https://github.com/newrade/newrade-core/commit/6362338d7ba92b50b54710205582c0aedfb46a60))

### BREAKING CHANGES

- **gatsby:** webpack v5 and gatsby v3

# [2.1.0](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@2.0.0...@newrade/core-gatsb-config@2.1.0) (2021-07-15)

### Bug Fixes

- **core-gatsby-config:** fix creation of 404 page
  ([6f56d51](https://github.com/newrade/newrade-core/commit/6f56d51b6685f5c55843669eeaebe85a9423f9f5))
- **core-react-ui:** rework sidebar-container and use-body-scroll-lock
  ([0a22c33](https://github.com/newrade/newrade-core/commit/0a22c333e52291fa404178e82182685888c3ee81))

### Features

- **core-react-ui:** add new navbar components
  ([6d5ac76](https://github.com/newrade/newrade-core/commit/6d5ac76507f73eea1a5bc9c331948fa3a61ff82b))

# [2.0.0](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@1.14.0...@newrade/core-gatsb-config@2.0.0) (2021-07-12)

### Bug Fixes

- **assets:** reorg vsb and alto assets (ds)
  ([38bc97f](https://github.com/newrade/newrade-core/commit/38bc97f74cbad6e4d9cf135e7a88c372244f3876))
- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))
- **build:** temporarily disable project reference for gatsby sites
  ([ea43bdd](https://github.com/newrade/newrade-core/commit/ea43bdd5859ca93660b1da00a81ded93b8da7b47))
- **build:** working on gh action build
  ([41efe00](https://github.com/newrade/newrade-core/commit/41efe00146700e0108b66eac17f8bbe033f4d1f6))
- **core:** packages are building
  ([a6985ed](https://github.com/newrade/newrade-core/commit/a6985ed2e5d630c8dff85ac8625a4ef5b318a602))
- **core-common:** remove browser code from core-node-utils
  ([b2595fc](https://github.com/newrade/newrade-core/commit/b2595fcc496d8876b0f658592a66659840d1ec92))
- **core-contentful-lib:** changes
  ([d42278c](https://github.com/newrade/newrade-core/commit/d42278c313ec5ca24a450536f7dc9b624a6d2fc1))
- **core-design-system-docs:** init package
  ([224064a](https://github.com/newrade/newrade-core/commit/224064a713a5f41f998fe1e8e18ea4bfbe8b048d))
- **core-gastby-config:** separate UI components
  ([be3d23e](https://github.com/newrade/newrade-core/commit/be3d23eafc6dbe76e293512fbec5521a8af5db73))
- **core-gastby-starter:** fix char & in url (rename to and)
  ([a0c5cf8](https://github.com/newrade/newrade-core/commit/a0c5cf8fa52cdaff56c0568a8ff7a402b44928d7))
- **core-gastby-starter:** layout for /docs /design-system /pages/
  ([ea84a5c](https://github.com/newrade/newrade-core/commit/ea84a5c557dd39d6b10785d604798e457ff24341))
- **core-gatsby-config:** add new plugin to create contentful pages
  ([3af6c82](https://github.com/newrade/newrade-core/commit/3af6c82d6e2a34653c63baeeb0e0fa0e24c701fa))
- **core-gatsby-config:** apply postcss config
  ([c3de151](https://github.com/newrade/newrade-core/commit/c3de15140a17f50a414dab966c87e45cac9adeb3))
- **core-gatsby-config:** enable strict checks for gastby projects
  ([4cb9ee0](https://github.com/newrade/newrade-core/commit/4cb9ee0d6e34d93ced821f7187a7cb0a14504c7a))
- **core-gatsby-config:** fix config
  ([0ce5d65](https://github.com/newrade/newrade-core/commit/0ce5d65cb93e700ca30037a18c0bf69cea6f3eaf))
- **core-gatsby-config:** fix locale in create-pages
  ([d8f5353](https://github.com/newrade/newrade-core/commit/d8f5353b870fc6ef3f9c0dc8809ba840afe1085f))
- **core-gatsby-config:** fix page path for design system page
  ([2abccf6](https://github.com/newrade/newrade-core/commit/2abccf6c6829061480eaa6950485b3d13885d177))
- **core-gatsby-config:** fix reloading bug in hmr with treat
  ([26d1a19](https://github.com/newrade/newrade-core/commit/26d1a19de6c66bea70b45808f4668b9a63535b8d))
- **core-gatsby-config:** fix test config
  ([d3f0b7b](https://github.com/newrade/newrade-core/commit/d3f0b7b5103fb85fc764e10ca78e7e6c53b00172))
- **core-gatsby-config:** refactor create pages logic
  ([81c800c](https://github.com/newrade/newrade-core/commit/81c800cf698d37958035e44f5695a8ba39ca6637))
- **core-gatsby-config:** refactor page creation
  ([9b0161c](https://github.com/newrade/newrade-core/commit/9b0161c24dce482a98d55dc0fb0682f1f9ef80fa))
- **core-gatsby-config:** things are starting to work again
  ([9b5dec8](https://github.com/newrade/newrade-core/commit/9b5dec81b161122302006f924aa95f443ad116d2))
- **core-gatsby-config:** wip
  ([23fc34d](https://github.com/newrade/newrade-core/commit/23fc34d697170326d0fac69874652635c2cf50ba))
- **core-gatsby-starter:** add a more reliable way to debug gatsby
  ([d63cd1c](https://github.com/newrade/newrade-core/commit/d63cd1c69ae3af843c74fc3bc927f4c96bf64042))
- **core-gatsby-starter:** add dot env files type check
  ([4c65040](https://github.com/newrade/newrade-core/commit/4c65040705a61efbf9e55ecd585a789dbfd9f623))
- **core-gatsby-starter:** fix page creation
  ([9e6ffaa](https://github.com/newrade/newrade-core/commit/9e6ffaa854dabb24560f18d673f61e9542ddebe2))
- **core-gatsby-starter:** fixes
  ([ffe7715](https://github.com/newrade/newrade-core/commit/ffe771547de87fd75b3745cf76ed136731c5f232))
- **core-gatsby-starter:** refactor templates + setup pages and markdown
  ([4aaa949](https://github.com/newrade/newrade-core/commit/4aaa949750c94a939b35767f2bd3fb20b8fb2614))
- **core-gatsby-starter:** wip
  ([6457254](https://github.com/newrade/newrade-core/commit/6457254e0f99917a7d7d7444ee34596e030e3a5c))
- **core-gatsby-ui:** fix SEO for templates
  ([9419f69](https://github.com/newrade/newrade-core/commit/9419f699b3a034395adb44358f94a9d01728d1bc))
- **core-gatsby-ui:** fix ssr
  ([095be84](https://github.com/newrade/newrade-core/commit/095be84b95bdd1a0a867341e0bc4d4adf3190469))
- **core-gatsby-ui:** refactor navigation
  ([07fad4c](https://github.com/newrade/newrade-core/commit/07fad4c05c61edc455259cc2c43e369ed9974b90))
- **core-gatsby-ui:** wip
  ([eb7b648](https://github.com/newrade/newrade-core/commit/eb7b64894ee92faea0bf2dc576a4e997ae523bc5))
- **core-react-ui:** add mdx features
  ([bfbee76](https://github.com/newrade/newrade-core/commit/bfbee769e8f029aa4b3a2b03b75645db88877d13))
- **core-react-ui:** fix async bundle and md providers
  ([8f3404a](https://github.com/newrade/newrade-core/commit/8f3404aaa3962b794c359f1a626b4efdf5121e01))
- **core-react-ui:** fix bug in treat files
  ([c0eff40](https://github.com/newrade/newrade-core/commit/c0eff40b3f6bee77a4d5ed8f218725f4c8f534c5))
- **core-react-ui:** fixes for links
  ([8b0068f](https://github.com/newrade/newrade-core/commit/8b0068f5911c6553e42d8dcacac4b83937dfc435))
- **core-react-ui:** implement aside for mdx docs
  ([006577f](https://github.com/newrade/newrade-core/commit/006577fc028bc948fec48a1a294f0c79892def57))
- **core-react-ui:** remove old google maps API
  ([9cd354b](https://github.com/newrade/newrade-core/commit/9cd354b1b22ad9e2269b6b12bb9ffe693a0bc131))
- **core-react-ui:** trying to find issue
  ([a62e71c](https://github.com/newrade/newrade-core/commit/a62e71c9c14b2897eb5d619457f2727eed2f2938))
- **core-react-ui:** wip
  ([093aa8f](https://github.com/newrade/newrade-core/commit/093aa8fb17d1c4b8aecca90142666984e239976d))
- **core-node-utils:** refactor envs
  ([1f82218](https://github.com/newrade/newrade-core/commit/1f82218b98f869c7e16202601bffe13ae085ae94))
- **core-webpack-config:** fix tsconfig
  ([44dc7df](https://github.com/newrade/newrade-core/commit/44dc7dfc09c8044d08e1d1c9a0182f24dbc44126))
- **core-webpack-config:** update loaders and plugins config
  ([c3810c1](https://github.com/newrade/newrade-core/commit/c3810c12439ca8f0b5c90436238b88bce61ca2d6))
- **deep-scan-fixes:** fixing medium issues
  ([ae016c5](https://github.com/newrade/newrade-core/commit/ae016c53a192df6cfdb33f3c59da987870282b07))
- **eslint:** fight with eslint and goddamned gatsby
  ([d739497](https://github.com/newrade/newrade-core/commit/d739497cbf641b3e5be26230008c5c58026f026e))
- **eslint:** fix false error for prettier
  ([afeec6a](https://github.com/newrade/newrade-core/commit/afeec6a546edb848bab42add780590dc27b13adf))
- **gastby:** fixes for markdown file generation
  ([2982616](https://github.com/newrade/newrade-core/commit/29826163498932d216cc22ec713d7de076812fbb))
- **gatsby:** add scripts to generate config files that can be easily debugged
  ([56c0a41](https://github.com/newrade/newrade-core/commit/56c0a4142a9fbd7b66a462aa18c06b60819eee69))
- **gatsby:** fixes typechecking
  ([4c3b323](https://github.com/newrade/newrade-core/commit/4c3b323dce2eda2bb0b413628290f3238898c23e))
- **gatsby:** update gatsby site config to include new flags
  ([48422e7](https://github.com/newrade/newrade-core/commit/48422e70dd02ff76bd4fdbd823cd1f5e34674136))
- **gatsby:** use shared config for gatsby
  ([0c29387](https://github.com/newrade/newrade-core/commit/0c29387167b20f890241e92297939276dd64ba43))
- **gatsby-starter:** fixes for nav queries
  ([170803a](https://github.com/newrade/newrade-core/commit/170803a87cb0bb657407d58a5084e211942fac89))
- **github-actions:** add utility to build url
  ([7ee6c90](https://github.com/newrade/newrade-core/commit/7ee6c90342c730088561dd6ba050b47790937c6d))
- **lint:** fix line width to 100
  ([49574eb](https://github.com/newrade/newrade-core/commit/49574eb1fe8aa3bbdf3cf9a6067956ccf3a96561))
- **lint-fix:** fixing current lint error on the build
  ([c28d6f3](https://github.com/newrade/newrade-core/commit/c28d6f3e688af0e4ad42abe1a8bc5630b663dbda))
- **mir-website:** add page query
  ([4d372d2](https://github.com/newrade/newrade-core/commit/4d372d2baaef8eb63093b017be0a1b83864ebd4b))
- **mir-website:** config fixes
  ([8128983](https://github.com/newrade/newrade-core/commit/81289832a9dd327dcecf11b357696ecccdd3338c))
- **mir-website:** fix build
  ([ab6b04b](https://github.com/newrade/newrade-core/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **mir-website:** fix obscure bug with treat, remove double usage of useStyle()
  ([59b043a](https://github.com/newrade/newrade-core/commit/59b043a8163318a32ea28c5b280d446ab7d291ab))
- **mir-website:** fix some gatsby codegen config
  ([c8f6746](https://github.com/newrade/newrade-core/commit/c8f674603443a17a809a37da125c940ddfa00d24))
- **mir-website:** fix tsconfig
  ([a8ea2fb](https://github.com/newrade/newrade-core/commit/a8ea2fb6e62054df36cdf320651eefa5743e7380))
- **mir-website:** fixing css
  ([94ce249](https://github.com/newrade/newrade-core/commit/94ce2494ba9366f5709067f723e72aa800149f48))
- **mir-website:** hotfix for blog generation
  ([7436d44](https://github.com/newrade/newrade-core/commit/7436d448e10a41d660adb3fdb6db946f48989d11))
- **mir-website:** implement mdx based blog posts
  ([4fca42d](https://github.com/newrade/newrade-core/commit/4fca42db2a278de3047fb72e77332115579e84e5))
- **mir-website:** remove yarn clean before each yarn build
  ([e201a90](https://github.com/newrade/newrade-core/commit/e201a90373e98a1efd21f26e977a479e755f5c07))
- **newrade-website:** clean up
  ([9534e61](https://github.com/newrade/newrade-core/commit/9534e61b01545371bde739d05c4519ead5fbd143))
- **newrade-website:** disable gatsby-remark-mermaid as gatsby-cloud doesn't support puppeteer
  ([e5c42a8](https://github.com/newrade/newrade-core/commit/e5c42a84901b71a400f58ad72c173f6c68bf3773))
- **newrade-website:** docs update
  ([08db9ce](https://github.com/newrade/newrade-core/commit/08db9ce60c3779684db9260c435792e532bd6729))
- **newrade-website:** fix fonts import
  ([31dab49](https://github.com/newrade/newrade-core/commit/31dab491d5d13eedd8b7f15a96c333c441551b9d))
- **newrade-website:** update configs
  ([90db24e](https://github.com/newrade/newrade-core/commit/90db24e3ca7e9e8e4b6d41823d4a4366ed70db26))
- **patch:** fix deps
  ([ea483f3](https://github.com/newrade/newrade-core/commit/ea483f365e260ef7a4d96b66de5a30afac4a397b))
- **react-icons:** fix react-icons import
  ([a8506f8](https://github.com/newrade/newrade-core/commit/a8506f89337f593c9745f7db399969973aa5a29f))
- **repo:** add .env type checking to all packages
  ([d382e42](https://github.com/newrade/newrade-core/commit/d382e42e2dcfbff0b635b4aa1f2c04e56deda4d7))
- **repo:** add missing prebuild commands
  ([aeebd40](https://github.com/newrade/newrade-core/commit/aeebd4009243fbbd1ce1473a31dcb26299b41121))
- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))
- **repo:** fix gatsby website
  ([f1a1e23](https://github.com/newrade/newrade-core/commit/f1a1e238938adf480d05884384425c75691fff63))
- **repo:** fix linting issues
  ([25cd3d4](https://github.com/newrade/newrade-core/commit/25cd3d4d91ada263a02177eed2eecbc4bcc0fd70))
- **repo:** fix scripts
  ([1468532](https://github.com/newrade/newrade-core/commit/1468532b791600a47b2b8082ef822148a72d764c))
- **repo:** fix typings
  ([4299ed3](https://github.com/newrade/newrade-core/commit/4299ed3367c15cee98dd6aeb22cebc2714b1c750))
- **repo:** fixes after deepscan
  ([4e6e58f](https://github.com/newrade/newrade-core/commit/4e6e58fb7788e6a4361dffd2eb593970306d9404))
- **repo:** fixes for refactor and react-ui-app
  ([91abbbd](https://github.com/newrade/newrade-core/commit/91abbbd1ee9fd658b3e02c016313292e88f19af0))
- **repo:** fixes for tsconfigs
  ([3472b8e](https://github.com/newrade/newrade-core/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** improve tsconfigs and build references
  ([22a31c1](https://github.com/newrade/newrade-core/commit/22a31c17608f6d6fda5ccd193588fd9194c68502))
- **repo:** remove postinstall command for packages
  ([7e8bd73](https://github.com/newrade/newrade-core/commit/7e8bd73bcec5877233de0770becf757d8cb7787a))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade-core/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **repo:** wip ([68d9f77](https://github.com/newrade/newrade-core/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **sites:** fixes and all assets
  ([c859573](https://github.com/newrade/newrade-core/commit/c859573dcb8eb79e095e9a98be6b08dbb0063ff9))
- **ts:** fix last non strict packages
  ([ce1a8cb](https://github.com/newrade/newrade-core/commit/ce1a8cbf6b459f1f0e0510d4df0c2885eb0d60d6))
- **typescript:** remove typeRoots which is almost a deprecated feature
  ([edfab31](https://github.com/newrade/newrade-core/commit/edfab31f34f518881c56fea74aa83331957ddcaf))
- **typescript:** revert to v3 since eslint and prettier are not ready
  ([08bc333](https://github.com/newrade/newrade-core/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))
- **vsb-api:** fixes
  ([5a987dd](https://github.com/newrade/newrade-core/commit/5a987dd707852165c3a1834e9e6d0ec359663c8f))
- **vsb-common:** fix esm build that would prevent treeshaking for gastby/webpack
  ([ad116b3](https://github.com/newrade/newrade-core/commit/ad116b38456b0eb64b6a82d7deef3d8ad66510a3))
- **vsb-website:** fix build issues
  ([11fd560](https://github.com/newrade/newrade-core/commit/11fd56082bd6eb576f5a7309b419611467a1850d))
- **vsb-website:** implement fixes for nav
  ([188087f](https://github.com/newrade/newrade-core/commit/188087f8dcd1b6e836e86186d8e291aa8c537dfe))
- **vsb-website:** optimizations
  ([ed0a853](https://github.com/newrade/newrade-core/commit/ed0a853cce3c2105c8b527cd524ee2ec55875f6d))
- **vsb-website:** optimize lcp
  ([875ce00](https://github.com/newrade/newrade-core/commit/875ce0061ada6d2b1d12f8782983e499e4e83c6c))
- **vsb-website:** refactor section layout
  ([673134c](https://github.com/newrade/newrade-core/commit/673134ce8d659e0226b438d5beb5cd4acc9da690))
- **vsb-website:** section banner done
  ([0fb9609](https://github.com/newrade/newrade-core/commit/0fb9609bcbc0d83aaee537e6033da01ff4dae620))
- **vsb-website:** wip on fix for ssr bug
  ([884e643](https://github.com/newrade/newrade-core/commit/884e6439e95f02bc724f84b14b571cac45a26a07))
- **websites:** fixes for stability
  ([f398587](https://github.com/newrade/newrade-core/commit/f3985874c00b07e7455bdff5027820f7dfd38689))
- **wip:** wip ([3319697](https://github.com/newrade/newrade-core/commit/3319697e314d643fb809a790b2d9c3b1bf1c749b))
- **wip-react-ui:** wip
  ([d8dc726](https://github.com/newrade/newrade-core/commit/d8dc7262ca611475cc028b1cdb4c9d121f170962))

### Features

- **alto-website:** init website
  ([e1f17f2](https://github.com/newrade/newrade-core/commit/e1f17f275a08e5fc75351e5c5d0567fdb447fd29))
- **core:** upgrade to typescript 4.4.0 beta
  ([98064e3](https://github.com/newrade/newrade-core/commit/98064e3096af4cb5a12c46d880fa3bd09708f954))
- **core-\*:** refactor core-design-system and core-react-ui
  ([106720e](https://github.com/newrade/newrade-core/commit/106720e4214f6491beac76c23977f5d52c1cd058))
- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade-core/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-design-system:** reorg and removing any css props from design-system
  ([b353e4f](https://github.com/newrade/newrade-core/commit/b353e4f47107dc3b1e4ff363b600033655acd044))
- **core-design-system:** working on css implementation
  ([3c6666c](https://github.com/newrade/newrade-core/commit/3c6666c2bd1c4ca239ad5ec38ebb6e78fffab43e))
- **core-gastby-config:** add feature to common plugin
  ([338812a](https://github.com/newrade/newrade-core/commit/338812a356d19a3d985000def12028b1e25e0220))
- **core-gatsby-config:** add new plugin
  ([2bd8c5c](https://github.com/newrade/newrade-core/commit/2bd8c5c32cf2992eb9f2cf5a6b6c16b666b1013d))
- **core-gatsby-config:** add remark-wikilink
  ([11d069b](https://github.com/newrade/newrade-core/commit/11d069b7ce0040cade3a0b5714ba4e2cf720afc1))
- **core-gatsby-config:** add shared config
  ([7d49add](https://github.com/newrade/newrade-core/commit/7d49adde7eb14b678c123933abdc12e7a76691e2))
- **core-gatsby-config:** refactor page creation logic for .mdx, .md, and .tsx files
  ([02cb1bb](https://github.com/newrade/newrade-core/commit/02cb1bb2dc93be32ed8e5fda87c062ae2c05ea05))
- **core-gatsby-starter:** minimal markdown setup with RichText
  ([57fbac8](https://github.com/newrade/newrade-core/commit/57fbac8b2838945fdd5a9abca09348a0605df1ba))
- **core-gatsby-ui:** implemented section banner
  ([6514337](https://github.com/newrade/newrade-core/commit/6514337788141b7bede1d74084aee10f21b6e8c2))
- **core-gatsby-ui:** trying to use loadable component, wip
  ([72c0330](https://github.com/newrade/newrade-core/commit/72c0330e06f18a6a55034ee124ce692e8dcdaefd))
- **core-gatsby-ui:** working on sections and blocks
  ([4d55bfd](https://github.com/newrade/newrade-core/commit/4d55bfde04fd1df6d8b149a69414ba5129747fd6))
- **core-github-action:** refactor set-app-env
  ([c31ca6c](https://github.com/newrade/newrade-core/commit/c31ca6c39b2efa2c32ee3e08eb39125a3d13b8b2))
- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **core-react-ui:** add CSSReset component and other utilities
  ([dadedcb](https://github.com/newrade/newrade-core/commit/dadedcb398a615c60a6a9785faa4cdfd5e9b0c6e))
- **core-react-ui:** add img-downloader component
  ([b7f89c8](https://github.com/newrade/newrade-core/commit/b7f89c812ccecb97dab7e99cb31169fe8118bdfd))
- **core-react-ui:** add nav items
  ([36d340b](https://github.com/newrade/newrade-core/commit/36d340bff5c883011c0de1caaadb072d966d8c25))
- **core-react-ui:** add seo models and components
  ([4861d62](https://github.com/newrade/newrade-core/commit/4861d626c4c25b96f1d3f22bf5a958d3417d2ad9))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **core-react-ui:** improvements to ds pages
  ([10f9095](https://github.com/newrade/newrade-core/commit/10f9095cda31b61f7b1368141243f595c6468e65))
- **core-react-ui:** wip for icon provider
  ([c0a5479](https://github.com/newrade/newrade-core/commit/c0a547903a9e8d38b82f3bd051c20baf77f72a63))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade-core/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **docs:** update docs
  ([75a7725](https://github.com/newrade/newrade-core/commit/75a7725a8c3b0b59508cdd203567af1d3fa9d308))
- **gatsby:** move layout components to core-gatsby-ui
  ([7ac5f9a](https://github.com/newrade/newrade-core/commit/7ac5f9af92d86f8266abc19fc5396df012c27dc3))
- **gatsby:** upgrade to latest v2 gatsby
  ([6ccfd11](https://github.com/newrade/newrade-core/commit/6ccfd11efe789383353be0cd3b5a251e22a8f41a))
- **gatsby:** upgrade to webpack v5 and gastby v3
  ([457d1b8](https://github.com/newrade/newrade-core/commit/457d1b83a84f4416be2adf3a659df6737adcfa87))
- **logging:** implement structured loggging
  ([713cb45](https://github.com/newrade/newrade-core/commit/713cb4501897b14ff3d53c93d32bce0686759a7c))
- **mir-website:** add gatsby config for seo
  ([5a68bce](https://github.com/newrade/newrade-core/commit/5a68bce2df6ac71f533850e91f5686e3b7d352ec))
- **newrade-admin:** add google app scripts example
  ([a7a9280](https://github.com/newrade/newrade-core/commit/a7a928074a09143165c6cd1f389fdc7e35b9a7cf))
- **newrade-website:** enable mermaid
  ([b9fcc5b](https://github.com/newrade/newrade-core/commit/b9fcc5b414a0d9a5add06c75365c66ebe469ff11))
- **newrade-website:** reorg docs
  ([47856d1](https://github.com/newrade/newrade-core/commit/47856d1889c2311c01cf4cd9f94f52fadd1ac61f))
- **newrade-website:** update docs
  ([999fa76](https://github.com/newrade/newrade-core/commit/999fa7639941e100bf5c5aaff42fdd4fcb65236b))
- **treat:** add vanilla extract
  ([d39e010](https://github.com/newrade/newrade-core/commit/d39e01045115db925a6a63001471de80e540702b))
- **vsb-website:** accordions for faq section
  ([a19e65f](https://github.com/newrade/newrade-core/commit/a19e65f39193a849186c41ab2c1dcfad157e3724))
- **vsb-website:** add theme
  ([a93920b](https://github.com/newrade/newrade-core/commit/a93920b651146b05dca9adc77d5389fa56de92cc))
- **vsb-website:** adding gatsby ui components
  ([1607429](https://github.com/newrade/newrade-core/commit/16074292a2cf0ebe19f690a86011b6d750cc5380))
- **vsb-website:** fix fragments after refactor
  ([253f987](https://github.com/newrade/newrade-core/commit/253f98723f264938eab85113c71bbcdddc7a041f))
- **vsb-website:** implement sidenav
  ([6b57a86](https://github.com/newrade/newrade-core/commit/6b57a867a88f57636c1d8268608d0605a02cc924))
- **vsb-website:** wip on the theme config
  ([6362338](https://github.com/newrade/newrade-core/commit/6362338d7ba92b50b54710205582c0aedfb46a60))

### BREAKING CHANGES

- **gatsby:** webpack v5 and gatsby v3

# [1.14.0](https://github.com/newrade/newrade-core/compare/@newrade/core-gatsb-config@1.14.0...@newrade/core-gatsb-config@1.14.0) (2021-07-03)

### Bug Fixes

- **assets:** reorg vsb and alto assets (ds)
  ([38bc97f](https://github.com/newrade/newrade-core/commit/38bc97f74cbad6e4d9cf135e7a88c372244f3876))
- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))
- **build:** temporarily disable project reference for gatsby sites
  ([ea43bdd](https://github.com/newrade/newrade-core/commit/ea43bdd5859ca93660b1da00a81ded93b8da7b47))
- **build:** working on gh action build
  ([41efe00](https://github.com/newrade/newrade-core/commit/41efe00146700e0108b66eac17f8bbe033f4d1f6))
- **core:** packages are building
  ([a6985ed](https://github.com/newrade/newrade-core/commit/a6985ed2e5d630c8dff85ac8625a4ef5b318a602))
- **core-common:** remove browser code from core-node-utils
  ([b2595fc](https://github.com/newrade/newrade-core/commit/b2595fcc496d8876b0f658592a66659840d1ec92))
- **core-contentful-lib:** changes
  ([d42278c](https://github.com/newrade/newrade-core/commit/d42278c313ec5ca24a450536f7dc9b624a6d2fc1))
- **core-design-system-docs:** init package
  ([224064a](https://github.com/newrade/newrade-core/commit/224064a713a5f41f998fe1e8e18ea4bfbe8b048d))
- **core-gastby-config:** separate UI components
  ([be3d23e](https://github.com/newrade/newrade-core/commit/be3d23eafc6dbe76e293512fbec5521a8af5db73))
- **core-gastby-starter:** fix char & in url (rename to and)
  ([a0c5cf8](https://github.com/newrade/newrade-core/commit/a0c5cf8fa52cdaff56c0568a8ff7a402b44928d7))
- **core-gastby-starter:** layout for /docs /design-system /pages/
  ([ea84a5c](https://github.com/newrade/newrade-core/commit/ea84a5c557dd39d6b10785d604798e457ff24341))
- **core-gatsby-config:** add new plugin to create contentful pages
  ([3af6c82](https://github.com/newrade/newrade-core/commit/3af6c82d6e2a34653c63baeeb0e0fa0e24c701fa))
- **core-gatsby-config:** apply postcss config
  ([c3de151](https://github.com/newrade/newrade-core/commit/c3de15140a17f50a414dab966c87e45cac9adeb3))
- **core-gatsby-config:** enable strict checks for gastby projects
  ([4cb9ee0](https://github.com/newrade/newrade-core/commit/4cb9ee0d6e34d93ced821f7187a7cb0a14504c7a))
- **core-gatsby-config:** fix config
  ([0ce5d65](https://github.com/newrade/newrade-core/commit/0ce5d65cb93e700ca30037a18c0bf69cea6f3eaf))
- **core-gatsby-config:** fix locale in create-pages
  ([d8f5353](https://github.com/newrade/newrade-core/commit/d8f5353b870fc6ef3f9c0dc8809ba840afe1085f))
- **core-gatsby-config:** fix page path for design system page
  ([2abccf6](https://github.com/newrade/newrade-core/commit/2abccf6c6829061480eaa6950485b3d13885d177))
- **core-gatsby-config:** fix reloading bug in hmr with treat
  ([26d1a19](https://github.com/newrade/newrade-core/commit/26d1a19de6c66bea70b45808f4668b9a63535b8d))
- **core-gatsby-config:** fix test config
  ([d3f0b7b](https://github.com/newrade/newrade-core/commit/d3f0b7b5103fb85fc764e10ca78e7e6c53b00172))
- **core-gatsby-config:** refactor create pages logic
  ([81c800c](https://github.com/newrade/newrade-core/commit/81c800cf698d37958035e44f5695a8ba39ca6637))
- **core-gatsby-config:** refactor page creation
  ([9b0161c](https://github.com/newrade/newrade-core/commit/9b0161c24dce482a98d55dc0fb0682f1f9ef80fa))
- **core-gatsby-config:** things are starting to work again
  ([9b5dec8](https://github.com/newrade/newrade-core/commit/9b5dec81b161122302006f924aa95f443ad116d2))
- **core-gatsby-config:** wip
  ([23fc34d](https://github.com/newrade/newrade-core/commit/23fc34d697170326d0fac69874652635c2cf50ba))
- **core-gatsby-starter:** add a more reliable way to debug gatsby
  ([d63cd1c](https://github.com/newrade/newrade-core/commit/d63cd1c69ae3af843c74fc3bc927f4c96bf64042))
- **core-gatsby-starter:** add dot env files type check
  ([4c65040](https://github.com/newrade/newrade-core/commit/4c65040705a61efbf9e55ecd585a789dbfd9f623))
- **core-gatsby-starter:** fix page creation
  ([9e6ffaa](https://github.com/newrade/newrade-core/commit/9e6ffaa854dabb24560f18d673f61e9542ddebe2))
- **core-gatsby-starter:** fixes
  ([ffe7715](https://github.com/newrade/newrade-core/commit/ffe771547de87fd75b3745cf76ed136731c5f232))
- **core-gatsby-starter:** refactor templates + setup pages and markdown
  ([4aaa949](https://github.com/newrade/newrade-core/commit/4aaa949750c94a939b35767f2bd3fb20b8fb2614))
- **core-gatsby-starter:** wip
  ([6457254](https://github.com/newrade/newrade-core/commit/6457254e0f99917a7d7d7444ee34596e030e3a5c))
- **core-gatsby-ui:** fix SEO for templates
  ([9419f69](https://github.com/newrade/newrade-core/commit/9419f699b3a034395adb44358f94a9d01728d1bc))
- **core-gatsby-ui:** fix ssr
  ([095be84](https://github.com/newrade/newrade-core/commit/095be84b95bdd1a0a867341e0bc4d4adf3190469))
- **core-gatsby-ui:** refactor navigation
  ([07fad4c](https://github.com/newrade/newrade-core/commit/07fad4c05c61edc455259cc2c43e369ed9974b90))
- **core-gatsby-ui:** wip
  ([eb7b648](https://github.com/newrade/newrade-core/commit/eb7b64894ee92faea0bf2dc576a4e997ae523bc5))
- **core-react-ui:** add mdx features
  ([bfbee76](https://github.com/newrade/newrade-core/commit/bfbee769e8f029aa4b3a2b03b75645db88877d13))
- **core-react-ui:** fix async bundle and md providers
  ([8f3404a](https://github.com/newrade/newrade-core/commit/8f3404aaa3962b794c359f1a626b4efdf5121e01))
- **core-react-ui:** fixes for links
  ([8b0068f](https://github.com/newrade/newrade-core/commit/8b0068f5911c6553e42d8dcacac4b83937dfc435))
- **core-react-ui:** implement aside for mdx docs
  ([006577f](https://github.com/newrade/newrade-core/commit/006577fc028bc948fec48a1a294f0c79892def57))
- **core-react-ui:** remove old google maps API
  ([9cd354b](https://github.com/newrade/newrade-core/commit/9cd354b1b22ad9e2269b6b12bb9ffe693a0bc131))
- **core-react-ui:** trying to find issue
  ([a62e71c](https://github.com/newrade/newrade-core/commit/a62e71c9c14b2897eb5d619457f2727eed2f2938))
- **core-react-ui:** wip
  ([093aa8f](https://github.com/newrade/newrade-core/commit/093aa8fb17d1c4b8aecca90142666984e239976d))
- **core-node-utils:** refactor envs
  ([1f82218](https://github.com/newrade/newrade-core/commit/1f82218b98f869c7e16202601bffe13ae085ae94))
- **core-webpack-config:** fix tsconfig
  ([44dc7df](https://github.com/newrade/newrade-core/commit/44dc7dfc09c8044d08e1d1c9a0182f24dbc44126))
- **core-webpack-config:** update loaders and plugins config
  ([c3810c1](https://github.com/newrade/newrade-core/commit/c3810c12439ca8f0b5c90436238b88bce61ca2d6))
- **deep-scan-fixes:** fixing medium issues
  ([ae016c5](https://github.com/newrade/newrade-core/commit/ae016c53a192df6cfdb33f3c59da987870282b07))
- **eslint:** fight with eslint and goddamned gatsby
  ([d739497](https://github.com/newrade/newrade-core/commit/d739497cbf641b3e5be26230008c5c58026f026e))
- **eslint:** fix false error for prettier
  ([afeec6a](https://github.com/newrade/newrade-core/commit/afeec6a546edb848bab42add780590dc27b13adf))
- **gastby:** fixes for markdown file generation
  ([2982616](https://github.com/newrade/newrade-core/commit/29826163498932d216cc22ec713d7de076812fbb))
- **gatsby:** add scripts to generate config files that can be easily debugged
  ([56c0a41](https://github.com/newrade/newrade-core/commit/56c0a4142a9fbd7b66a462aa18c06b60819eee69))
- **gatsby:** fixes typechecking
  ([4c3b323](https://github.com/newrade/newrade-core/commit/4c3b323dce2eda2bb0b413628290f3238898c23e))
- **gatsby:** update gatsby site config to include new flags
  ([48422e7](https://github.com/newrade/newrade-core/commit/48422e70dd02ff76bd4fdbd823cd1f5e34674136))
- **gatsby:** use shared config for gatsby
  ([0c29387](https://github.com/newrade/newrade-core/commit/0c29387167b20f890241e92297939276dd64ba43))
- **gatsby-starter:** fixes for nav queries
  ([170803a](https://github.com/newrade/newrade-core/commit/170803a87cb0bb657407d58a5084e211942fac89))
- **github-actions:** add utility to build url
  ([7ee6c90](https://github.com/newrade/newrade-core/commit/7ee6c90342c730088561dd6ba050b47790937c6d))
- **lint:** fix line width to 100
  ([49574eb](https://github.com/newrade/newrade-core/commit/49574eb1fe8aa3bbdf3cf9a6067956ccf3a96561))
- **lint-fix:** fixing current lint error on the build
  ([c28d6f3](https://github.com/newrade/newrade-core/commit/c28d6f3e688af0e4ad42abe1a8bc5630b663dbda))
- **mir-website:** add page query
  ([4d372d2](https://github.com/newrade/newrade-core/commit/4d372d2baaef8eb63093b017be0a1b83864ebd4b))
- **mir-website:** config fixes
  ([8128983](https://github.com/newrade/newrade-core/commit/81289832a9dd327dcecf11b357696ecccdd3338c))
- **mir-website:** fix build
  ([ab6b04b](https://github.com/newrade/newrade-core/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **mir-website:** fix obscure bug with treat, remove double usage of useStyle()
  ([59b043a](https://github.com/newrade/newrade-core/commit/59b043a8163318a32ea28c5b280d446ab7d291ab))
- **mir-website:** fix some gatsby codegen config
  ([c8f6746](https://github.com/newrade/newrade-core/commit/c8f674603443a17a809a37da125c940ddfa00d24))
- **mir-website:** fix tsconfig
  ([a8ea2fb](https://github.com/newrade/newrade-core/commit/a8ea2fb6e62054df36cdf320651eefa5743e7380))
- **mir-website:** fixing css
  ([94ce249](https://github.com/newrade/newrade-core/commit/94ce2494ba9366f5709067f723e72aa800149f48))
- **mir-website:** hotfix for blog generation
  ([7436d44](https://github.com/newrade/newrade-core/commit/7436d448e10a41d660adb3fdb6db946f48989d11))
- **mir-website:** implement mdx based blog posts
  ([4fca42d](https://github.com/newrade/newrade-core/commit/4fca42db2a278de3047fb72e77332115579e84e5))
- **mir-website:** remove yarn clean before each yarn build
  ([e201a90](https://github.com/newrade/newrade-core/commit/e201a90373e98a1efd21f26e977a479e755f5c07))
- **newrade-website:** clean up
  ([9534e61](https://github.com/newrade/newrade-core/commit/9534e61b01545371bde739d05c4519ead5fbd143))
- **newrade-website:** disable gatsby-remark-mermaid as gatsby-cloud doesn't support puppeteer
  ([e5c42a8](https://github.com/newrade/newrade-core/commit/e5c42a84901b71a400f58ad72c173f6c68bf3773))
- **newrade-website:** docs update
  ([08db9ce](https://github.com/newrade/newrade-core/commit/08db9ce60c3779684db9260c435792e532bd6729))
- **newrade-website:** fix fonts import
  ([31dab49](https://github.com/newrade/newrade-core/commit/31dab491d5d13eedd8b7f15a96c333c441551b9d))
- **newrade-website:** update configs
  ([90db24e](https://github.com/newrade/newrade-core/commit/90db24e3ca7e9e8e4b6d41823d4a4366ed70db26))
- **patch:** fix deps
  ([ea483f3](https://github.com/newrade/newrade-core/commit/ea483f365e260ef7a4d96b66de5a30afac4a397b))
- **react-icons:** fix react-icons import
  ([a8506f8](https://github.com/newrade/newrade-core/commit/a8506f89337f593c9745f7db399969973aa5a29f))
- **repo:** add .env type checking to all packages
  ([d382e42](https://github.com/newrade/newrade-core/commit/d382e42e2dcfbff0b635b4aa1f2c04e56deda4d7))
- **repo:** add missing prebuild commands
  ([aeebd40](https://github.com/newrade/newrade-core/commit/aeebd4009243fbbd1ce1473a31dcb26299b41121))
- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))
- **repo:** fix gatsby website
  ([f1a1e23](https://github.com/newrade/newrade-core/commit/f1a1e238938adf480d05884384425c75691fff63))
- **repo:** fix linting issues
  ([25cd3d4](https://github.com/newrade/newrade-core/commit/25cd3d4d91ada263a02177eed2eecbc4bcc0fd70))
- **repo:** fix scripts
  ([1468532](https://github.com/newrade/newrade-core/commit/1468532b791600a47b2b8082ef822148a72d764c))
- **repo:** fix typings
  ([4299ed3](https://github.com/newrade/newrade-core/commit/4299ed3367c15cee98dd6aeb22cebc2714b1c750))
- **repo:** fixes after deepscan
  ([4e6e58f](https://github.com/newrade/newrade-core/commit/4e6e58fb7788e6a4361dffd2eb593970306d9404))
- **repo:** fixes for refactor and react-ui-app
  ([91abbbd](https://github.com/newrade/newrade-core/commit/91abbbd1ee9fd658b3e02c016313292e88f19af0))
- **repo:** fixes for tsconfigs
  ([3472b8e](https://github.com/newrade/newrade-core/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** improve tsconfigs and build references
  ([22a31c1](https://github.com/newrade/newrade-core/commit/22a31c17608f6d6fda5ccd193588fd9194c68502))
- **repo:** remove postinstall command for packages
  ([7e8bd73](https://github.com/newrade/newrade-core/commit/7e8bd73bcec5877233de0770becf757d8cb7787a))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade-core/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **repo:** wip ([68d9f77](https://github.com/newrade/newrade-core/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **sites:** fixes and all assets
  ([c859573](https://github.com/newrade/newrade-core/commit/c859573dcb8eb79e095e9a98be6b08dbb0063ff9))
- **ts:** fix last non strict packages
  ([ce1a8cb](https://github.com/newrade/newrade-core/commit/ce1a8cbf6b459f1f0e0510d4df0c2885eb0d60d6))
- **typescript:** remove typeRoots which is almost a deprecated feature
  ([edfab31](https://github.com/newrade/newrade-core/commit/edfab31f34f518881c56fea74aa83331957ddcaf))
- **typescript:** revert to v3 since eslint and prettier are not ready
  ([08bc333](https://github.com/newrade/newrade-core/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))
- **vsb-api:** fixes
  ([5a987dd](https://github.com/newrade/newrade-core/commit/5a987dd707852165c3a1834e9e6d0ec359663c8f))
- **vsb-common:** fix esm build that would prevent treeshaking for gastby/webpack
  ([ad116b3](https://github.com/newrade/newrade-core/commit/ad116b38456b0eb64b6a82d7deef3d8ad66510a3))
- **vsb-website:** fix build issues
  ([11fd560](https://github.com/newrade/newrade-core/commit/11fd56082bd6eb576f5a7309b419611467a1850d))
- **vsb-website:** implement fixes for nav
  ([188087f](https://github.com/newrade/newrade-core/commit/188087f8dcd1b6e836e86186d8e291aa8c537dfe))
- **vsb-website:** optimizations
  ([ed0a853](https://github.com/newrade/newrade-core/commit/ed0a853cce3c2105c8b527cd524ee2ec55875f6d))
- **vsb-website:** optimize lcp
  ([875ce00](https://github.com/newrade/newrade-core/commit/875ce0061ada6d2b1d12f8782983e499e4e83c6c))
- **vsb-website:** refactor section layout
  ([673134c](https://github.com/newrade/newrade-core/commit/673134ce8d659e0226b438d5beb5cd4acc9da690))
- **vsb-website:** section banner done
  ([0fb9609](https://github.com/newrade/newrade-core/commit/0fb9609bcbc0d83aaee537e6033da01ff4dae620))
- **vsb-website:** wip on fix for ssr bug
  ([884e643](https://github.com/newrade/newrade-core/commit/884e6439e95f02bc724f84b14b571cac45a26a07))
- **websites:** fixes for stability
  ([f398587](https://github.com/newrade/newrade-core/commit/f3985874c00b07e7455bdff5027820f7dfd38689))
- **wip:** wip ([3319697](https://github.com/newrade/newrade-core/commit/3319697e314d643fb809a790b2d9c3b1bf1c749b))
- **wip-react-ui:** wip
  ([d8dc726](https://github.com/newrade/newrade-core/commit/d8dc7262ca611475cc028b1cdb4c9d121f170962))

### Features

- **alto-website:** init website
  ([e1f17f2](https://github.com/newrade/newrade-core/commit/e1f17f275a08e5fc75351e5c5d0567fdb447fd29))
- **core:** upgrade to typescript 4.4.0 beta
  ([98064e3](https://github.com/newrade/newrade-core/commit/98064e3096af4cb5a12c46d880fa3bd09708f954))
- **core-\*:** refactor core-design-system and core-react-ui
  ([106720e](https://github.com/newrade/newrade-core/commit/106720e4214f6491beac76c23977f5d52c1cd058))
- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade-core/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-design-system:** reorg and removing any css props from design-system
  ([b353e4f](https://github.com/newrade/newrade-core/commit/b353e4f47107dc3b1e4ff363b600033655acd044))
- **core-design-system:** working on css implementation
  ([3c6666c](https://github.com/newrade/newrade-core/commit/3c6666c2bd1c4ca239ad5ec38ebb6e78fffab43e))
- **core-gastby-config:** add feature to common plugin
  ([338812a](https://github.com/newrade/newrade-core/commit/338812a356d19a3d985000def12028b1e25e0220))
- **core-gatsby-config:** add new plugin
  ([2bd8c5c](https://github.com/newrade/newrade-core/commit/2bd8c5c32cf2992eb9f2cf5a6b6c16b666b1013d))
- **core-gatsby-config:** add remark-wikilink
  ([11d069b](https://github.com/newrade/newrade-core/commit/11d069b7ce0040cade3a0b5714ba4e2cf720afc1))
- **core-gatsby-config:** add shared config
  ([7d49add](https://github.com/newrade/newrade-core/commit/7d49adde7eb14b678c123933abdc12e7a76691e2))
- **core-gatsby-config:** refactor page creation logic for .mdx, .md, and .tsx files
  ([02cb1bb](https://github.com/newrade/newrade-core/commit/02cb1bb2dc93be32ed8e5fda87c062ae2c05ea05))
- **core-gatsby-starter:** minimal markdown setup with RichText
  ([57fbac8](https://github.com/newrade/newrade-core/commit/57fbac8b2838945fdd5a9abca09348a0605df1ba))
- **core-gatsby-ui:** implemented section banner
  ([6514337](https://github.com/newrade/newrade-core/commit/6514337788141b7bede1d74084aee10f21b6e8c2))
- **core-gatsby-ui:** trying to use loadable component, wip
  ([72c0330](https://github.com/newrade/newrade-core/commit/72c0330e06f18a6a55034ee124ce692e8dcdaefd))
- **core-gatsby-ui:** working on sections and blocks
  ([4d55bfd](https://github.com/newrade/newrade-core/commit/4d55bfde04fd1df6d8b149a69414ba5129747fd6))
- **core-github-action:** refactor set-app-env
  ([c31ca6c](https://github.com/newrade/newrade-core/commit/c31ca6c39b2efa2c32ee3e08eb39125a3d13b8b2))
- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **core-react-ui:** add CSSReset component and other utilities
  ([dadedcb](https://github.com/newrade/newrade-core/commit/dadedcb398a615c60a6a9785faa4cdfd5e9b0c6e))
- **core-react-ui:** add img-downloader component
  ([b7f89c8](https://github.com/newrade/newrade-core/commit/b7f89c812ccecb97dab7e99cb31169fe8118bdfd))
- **core-react-ui:** add nav items
  ([36d340b](https://github.com/newrade/newrade-core/commit/36d340bff5c883011c0de1caaadb072d966d8c25))
- **core-react-ui:** add seo models and components
  ([4861d62](https://github.com/newrade/newrade-core/commit/4861d626c4c25b96f1d3f22bf5a958d3417d2ad9))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **core-react-ui:** improvements to ds pages
  ([10f9095](https://github.com/newrade/newrade-core/commit/10f9095cda31b61f7b1368141243f595c6468e65))
- **core-react-ui:** wip for icon provider
  ([c0a5479](https://github.com/newrade/newrade-core/commit/c0a547903a9e8d38b82f3bd051c20baf77f72a63))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade-core/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **docs:** update docs
  ([75a7725](https://github.com/newrade/newrade-core/commit/75a7725a8c3b0b59508cdd203567af1d3fa9d308))
- **gatsby:** move layout components to core-gatsby-ui
  ([7ac5f9a](https://github.com/newrade/newrade-core/commit/7ac5f9af92d86f8266abc19fc5396df012c27dc3))
- **gatsby:** upgrade to latest v2 gatsby
  ([6ccfd11](https://github.com/newrade/newrade-core/commit/6ccfd11efe789383353be0cd3b5a251e22a8f41a))
- **logging:** implement structured loggging
  ([713cb45](https://github.com/newrade/newrade-core/commit/713cb4501897b14ff3d53c93d32bce0686759a7c))
- **mir-website:** add gatsby config for seo
  ([5a68bce](https://github.com/newrade/newrade-core/commit/5a68bce2df6ac71f533850e91f5686e3b7d352ec))
- **newrade-admin:** add google app scripts example
  ([a7a9280](https://github.com/newrade/newrade-core/commit/a7a928074a09143165c6cd1f389fdc7e35b9a7cf))
- **newrade-website:** enable mermaid
  ([b9fcc5b](https://github.com/newrade/newrade-core/commit/b9fcc5b414a0d9a5add06c75365c66ebe469ff11))
- **newrade-website:** reorg docs
  ([47856d1](https://github.com/newrade/newrade-core/commit/47856d1889c2311c01cf4cd9f94f52fadd1ac61f))
- **newrade-website:** update docs
  ([999fa76](https://github.com/newrade/newrade-core/commit/999fa7639941e100bf5c5aaff42fdd4fcb65236b))
- **treat:** add vanilla extract
  ([d39e010](https://github.com/newrade/newrade-core/commit/d39e01045115db925a6a63001471de80e540702b))
- **vsb-website:** accordions for faq section
  ([a19e65f](https://github.com/newrade/newrade-core/commit/a19e65f39193a849186c41ab2c1dcfad157e3724))
- **vsb-website:** add theme
  ([a93920b](https://github.com/newrade/newrade-core/commit/a93920b651146b05dca9adc77d5389fa56de92cc))
- **vsb-website:** adding gatsby ui components
  ([1607429](https://github.com/newrade/newrade-core/commit/16074292a2cf0ebe19f690a86011b6d750cc5380))
- **vsb-website:** fix fragments after refactor
  ([253f987](https://github.com/newrade/newrade-core/commit/253f98723f264938eab85113c71bbcdddc7a041f))
- **vsb-website:** implement sidenav
  ([6b57a86](https://github.com/newrade/newrade-core/commit/6b57a867a88f57636c1d8268608d0605a02cc924))
- **vsb-website:** wip on the theme config
  ([6362338](https://github.com/newrade/newrade-core/commit/6362338d7ba92b50b54710205582c0aedfb46a60))

# [1.13.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.12.0...@newrade/core-gatsb-config@1.13.0) (2021-06-16)

### Bug Fixes

- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))
- **react-icons:** fix react-icons import
  ([a8506f8](https://github.com/newrade/newrade/commit/a8506f89337f593c9745f7db399969973aa5a29f))

### Features

- **core-react-ui:** wip for icon provider
  ([c0a5479](https://github.com/newrade/newrade/commit/c0a547903a9e8d38b82f3bd051c20baf77f72a63))
- **treat:** add vanilla extract
  ([d39e010](https://github.com/newrade/newrade/commit/d39e01045115db925a6a63001471de80e540702b))

# [1.12.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.11.0...@newrade/core-gatsb-config@1.12.0) (2021-05-25)

### Bug Fixes

- **github-actions:** add utility to build url
  ([7ee6c90](https://github.com/newrade/newrade/commit/7ee6c90342c730088561dd6ba050b47790937c6d))
- **patch:** fix deps ([ea483f3](https://github.com/newrade/newrade/commit/ea483f365e260ef7a4d96b66de5a30afac4a397b))

### Features

- **core-github-action:** refactor set-app-env
  ([c31ca6c](https://github.com/newrade/newrade/commit/c31ca6c39b2efa2c32ee3e08eb39125a3d13b8b2))

# [1.11.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.10.1...@newrade/core-gatsb-config@1.11.0) (2021-05-21)

### Bug Fixes

- **build:** working on gh action build
  ([41efe00](https://github.com/newrade/newrade/commit/41efe00146700e0108b66eac17f8bbe033f4d1f6))
- **core-gatsby-config:** apply postcss config
  ([c3de151](https://github.com/newrade/newrade/commit/c3de15140a17f50a414dab966c87e45cac9adeb3))
- **core-gatsby-ui:** fix ssr
  ([095be84](https://github.com/newrade/newrade/commit/095be84b95bdd1a0a867341e0bc4d4adf3190469))
- **core-webpack-config:** update loaders and plugins config
  ([c3810c1](https://github.com/newrade/newrade/commit/c3810c12439ca8f0b5c90436238b88bce61ca2d6))
- **lint:** fix line width to 100
  ([49574eb](https://github.com/newrade/newrade/commit/49574eb1fe8aa3bbdf3cf9a6067956ccf3a96561))
- **newrade-website:** fix fonts import
  ([31dab49](https://github.com/newrade/newrade/commit/31dab491d5d13eedd8b7f15a96c333c441551b9d))

### Features

- **core-gatsby-config:** add remark-wikilink
  ([11d069b](https://github.com/newrade/newrade/commit/11d069b7ce0040cade3a0b5714ba4e2cf720afc1))
- **core-gatsby-ui:** trying to use loadable component, wip
  ([72c0330](https://github.com/newrade/newrade/commit/72c0330e06f18a6a55034ee124ce692e8dcdaefd))
- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **docs:** update docs ([75a7725](https://github.com/newrade/newrade/commit/75a7725a8c3b0b59508cdd203567af1d3fa9d308))
- **newrade-website:** enable mermaid
  ([b9fcc5b](https://github.com/newrade/newrade/commit/b9fcc5b414a0d9a5add06c75365c66ebe469ff11))

## [1.10.1](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.10.0...@newrade/core-gatsb-config@1.10.1) (2021-03-11)

### Bug Fixes

- **mir-website:** hotfix for blog generation
  ([7436d44](https://github.com/newrade/newrade/commit/7436d448e10a41d660adb3fdb6db946f48989d11))

# [1.10.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.9.1...@newrade/core-gatsb-config@1.10.0) (2021-03-09)

### Bug Fixes

- **core:** packages are building
  ([a6985ed](https://github.com/newrade/newrade/commit/a6985ed2e5d630c8dff85ac8625a4ef5b318a602))
- **core-design-system-docs:** init package
  ([224064a](https://github.com/newrade/newrade/commit/224064a713a5f41f998fe1e8e18ea4bfbe8b048d))
- **core-gatsby-config:** fix page path for design system page
  ([2abccf6](https://github.com/newrade/newrade/commit/2abccf6c6829061480eaa6950485b3d13885d177))
- **core-gatsby-config:** refactor create pages logic
  ([81c800c](https://github.com/newrade/newrade/commit/81c800cf698d37958035e44f5695a8ba39ca6637))
- **core-gatsby-config:** refactor page creation
  ([9b0161c](https://github.com/newrade/newrade/commit/9b0161c24dce482a98d55dc0fb0682f1f9ef80fa))
- **core-gatsby-config:** things are starting to work again
  ([9b5dec8](https://github.com/newrade/newrade/commit/9b5dec81b161122302006f924aa95f443ad116d2))
- **core-react-ui:** trying to find issue
  ([a62e71c](https://github.com/newrade/newrade/commit/a62e71c9c14b2897eb5d619457f2727eed2f2938))
- **lint-fix:** fixing current lint error on the build
  ([c28d6f3](https://github.com/newrade/newrade/commit/c28d6f3e688af0e4ad42abe1a8bc5630b663dbda))
- **newrade-website:** clean up
  ([9534e61](https://github.com/newrade/newrade/commit/9534e61b01545371bde739d05c4519ead5fbd143))
- **newrade-website:** disable gatsby-remark-mermaid as gatsby-cloud doesn't support puppeteer
  ([e5c42a8](https://github.com/newrade/newrade/commit/e5c42a84901b71a400f58ad72c173f6c68bf3773))
- **newrade-website:** docs update
  ([08db9ce](https://github.com/newrade/newrade/commit/08db9ce60c3779684db9260c435792e532bd6729))
- **vsb-website:** section banner done
  ([0fb9609](https://github.com/newrade/newrade/commit/0fb9609bcbc0d83aaee537e6033da01ff4dae620))

### Features

- **core-gatsby-config:** refactor page creation logic for .mdx, .md, and .tsx files
  ([02cb1bb](https://github.com/newrade/newrade/commit/02cb1bb2dc93be32ed8e5fda87c062ae2c05ea05))
- **core-gatsby-ui:** implemented section banner
  ([6514337](https://github.com/newrade/newrade/commit/6514337788141b7bede1d74084aee10f21b6e8c2))
- **gatsby:** upgrade to latest v2 gatsby
  ([6ccfd11](https://github.com/newrade/newrade/commit/6ccfd11efe789383353be0cd3b5a251e22a8f41a))
- **newrade-website:** reorg docs
  ([47856d1](https://github.com/newrade/newrade/commit/47856d1889c2311c01cf4cd9f94f52fadd1ac61f))
- **newrade-website:** update docs
  ([999fa76](https://github.com/newrade/newrade/commit/999fa7639941e100bf5c5aaff42fdd4fcb65236b))
- **vsb-website:** fix fragments after refactor
  ([253f987](https://github.com/newrade/newrade/commit/253f98723f264938eab85113c71bbcdddc7a041f))

## [1.9.1](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.9.0...@newrade/core-gatsb-config@1.9.1) (2021-02-22)

### Bug Fixes

- **eslint:** fight with eslint and goddamned gatsby
  ([d739497](https://github.com/newrade/newrade/commit/d739497cbf641b3e5be26230008c5c58026f026e))
- **newrade-website:** update configs
  ([90db24e](https://github.com/newrade/newrade/commit/90db24e3ca7e9e8e4b6d41823d4a4366ed70db26))
- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))

# [1.9.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.8.0...@newrade/core-gatsb-config@1.9.0) (2021-02-19)

### Bug Fixes

- **vsb-common:** fix esm build that would prevent treeshaking for gastby/webpack
  ([ad116b3](https://github.com/newrade/newrade/commit/ad116b38456b0eb64b6a82d7deef3d8ad66510a3))

### Features

- **core-gatsby-ui:** working on sections and blocks
  ([4d55bfd](https://github.com/newrade/newrade/commit/4d55bfde04fd1df6d8b149a69414ba5129747fd6))

# [1.8.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.7.1...@newrade/core-gatsb-config@1.8.0) (2021-02-15)

### Bug Fixes

- **core-node-utils:** refactor envs
  ([1f82218](https://github.com/newrade/newrade/commit/1f82218b98f869c7e16202601bffe13ae085ae94))
- **vsb-api:** fixes ([5a987dd](https://github.com/newrade/newrade/commit/5a987dd707852165c3a1834e9e6d0ec359663c8f))
- **vsb-website:** wip on fix for ssr bug
  ([884e643](https://github.com/newrade/newrade/commit/884e6439e95f02bc724f84b14b571cac45a26a07))

### Features

- **logging:** implement structured loggging
  ([713cb45](https://github.com/newrade/newrade/commit/713cb4501897b14ff3d53c93d32bce0686759a7c))

## [1.7.1](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.7.0...@newrade/core-gatsb-config@1.7.1) (2021-02-11)

### Bug Fixes

- **core-gatsby-ui:** refactor navigation
  ([07fad4c](https://github.com/newrade/newrade/commit/07fad4c05c61edc455259cc2c43e369ed9974b90))
- **deep-scan-fixes:** fixing medium issues
  ([ae016c5](https://github.com/newrade/newrade/commit/ae016c53a192df6cfdb33f3c59da987870282b07))
- **websites:** fixes for stability
  ([f398587](https://github.com/newrade/newrade/commit/f3985874c00b07e7455bdff5027820f7dfd38689))

# [1.7.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.6.0...@newrade/core-gatsb-config@1.7.0) (2021-02-03)

### Bug Fixes

- **core-gatsby-config:** fix locale in create-pages
  ([d8f5353](https://github.com/newrade/newrade/commit/d8f5353b870fc6ef3f9c0dc8809ba840afe1085f))
- **core-gatsby-config:** fix test config
  ([d3f0b7b](https://github.com/newrade/newrade/commit/d3f0b7b5103fb85fc764e10ca78e7e6c53b00172))
- **core-gatsby-ui:** fix SEO for templates
  ([9419f69](https://github.com/newrade/newrade/commit/9419f699b3a034395adb44358f94a9d01728d1bc))
- **core-react-ui:** fix async bundle and md providers
  ([8f3404a](https://github.com/newrade/newrade/commit/8f3404aaa3962b794c359f1a626b4efdf5121e01))
- **core-react-ui:** fixes for links
  ([8b0068f](https://github.com/newrade/newrade/commit/8b0068f5911c6553e42d8dcacac4b83937dfc435))
- **core-webpack-config:** fix tsconfig
  ([44dc7df](https://github.com/newrade/newrade/commit/44dc7dfc09c8044d08e1d1c9a0182f24dbc44126))
- **mir-website:** config fixes
  ([8128983](https://github.com/newrade/newrade/commit/81289832a9dd327dcecf11b357696ecccdd3338c))
- **repo:** fix linting issues
  ([25cd3d4](https://github.com/newrade/newrade/commit/25cd3d4d91ada263a02177eed2eecbc4bcc0fd70))
- **repo:** fixes after deepscan
  ([4e6e58f](https://github.com/newrade/newrade/commit/4e6e58fb7788e6a4361dffd2eb593970306d9404))
- **repo:** improve tsconfigs and build references
  ([22a31c1](https://github.com/newrade/newrade/commit/22a31c17608f6d6fda5ccd193588fd9194c68502))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **sites:** fixes and all assets
  ([c859573](https://github.com/newrade/newrade/commit/c859573dcb8eb79e095e9a98be6b08dbb0063ff9))
- **ts:** fix last non strict packages
  ([ce1a8cb](https://github.com/newrade/newrade/commit/ce1a8cbf6b459f1f0e0510d4df0c2885eb0d60d6))
- **vsb-website:** fix build issues
  ([11fd560](https://github.com/newrade/newrade/commit/11fd56082bd6eb576f5a7309b419611467a1850d))
- **vsb-website:** implement fixes for nav
  ([188087f](https://github.com/newrade/newrade/commit/188087f8dcd1b6e836e86186d8e291aa8c537dfe))
- **vsb-website:** optimizations
  ([ed0a853](https://github.com/newrade/newrade/commit/ed0a853cce3c2105c8b527cd524ee2ec55875f6d))
- **vsb-website:** optimize lcp
  ([875ce00](https://github.com/newrade/newrade/commit/875ce0061ada6d2b1d12f8782983e499e4e83c6c))
- **vsb-website:** refactor section layout
  ([673134c](https://github.com/newrade/newrade/commit/673134ce8d659e0226b438d5beb5cd4acc9da690))

### Features

- **core-react-ui:** add nav items
  ([36d340b](https://github.com/newrade/newrade/commit/36d340bff5c883011c0de1caaadb072d966d8c25))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **core-react-ui:** improvements to ds pages
  ([10f9095](https://github.com/newrade/newrade/commit/10f9095cda31b61f7b1368141243f595c6468e65))
- **gatsby:** move layout components to core-gatsby-ui
  ([7ac5f9a](https://github.com/newrade/newrade/commit/7ac5f9af92d86f8266abc19fc5396df012c27dc3))
- **newrade-admin:** add google app scripts example
  ([a7a9280](https://github.com/newrade/newrade/commit/a7a928074a09143165c6cd1f389fdc7e35b9a7cf))
- **vsb-website:** accordions for faq section
  ([a19e65f](https://github.com/newrade/newrade/commit/a19e65f39193a849186c41ab2c1dcfad157e3724))
- **vsb-website:** implement sidenav
  ([6b57a86](https://github.com/newrade/newrade/commit/6b57a867a88f57636c1d8268608d0605a02cc924))

# [1.6.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.5.0...@newrade/core-gatsb-config@1.6.0) (2021-01-04)

### Bug Fixes

- **core-gatsby-config:** add new plugin to create contentful pages
  ([3af6c82](https://github.com/newrade/newrade/commit/3af6c82d6e2a34653c63baeeb0e0fa0e24c701fa))
- **core-gatsby-config:** fix reloading bug in hmr with treat
  ([26d1a19](https://github.com/newrade/newrade/commit/26d1a19de6c66bea70b45808f4668b9a63535b8d))
- **core-gatsby-ui:** wip
  ([eb7b648](https://github.com/newrade/newrade/commit/eb7b64894ee92faea0bf2dc576a4e997ae523bc5))
- **core-react-ui:** add mdx features
  ([bfbee76](https://github.com/newrade/newrade/commit/bfbee769e8f029aa4b3a2b03b75645db88877d13))
- **core-react-ui:** implement aside for mdx docs
  ([006577f](https://github.com/newrade/newrade/commit/006577fc028bc948fec48a1a294f0c79892def57))
- **gatsby:** fixes typechecking
  ([4c3b323](https://github.com/newrade/newrade/commit/4c3b323dce2eda2bb0b413628290f3238898c23e))
- **gatsby:** update gatsby site config to include new flags
  ([48422e7](https://github.com/newrade/newrade/commit/48422e70dd02ff76bd4fdbd823cd1f5e34674136))
- **repo:** fix gatsby website
  ([f1a1e23](https://github.com/newrade/newrade/commit/f1a1e238938adf480d05884384425c75691fff63))

### Features

- **core-gatsby-config:** add new plugin
  ([2bd8c5c](https://github.com/newrade/newrade/commit/2bd8c5c32cf2992eb9f2cf5a6b6c16b666b1013d))
- **vsb-website:** add theme
  ([a93920b](https://github.com/newrade/newrade/commit/a93920b651146b05dca9adc77d5389fa56de92cc))
- **vsb-website:** adding gatsby ui components
  ([1607429](https://github.com/newrade/newrade/commit/16074292a2cf0ebe19f690a86011b6d750cc5380))
- **vsb-website:** wip on the theme config
  ([6362338](https://github.com/newrade/newrade/commit/6362338d7ba92b50b54710205582c0aedfb46a60))

# [1.5.0](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.4.2...@newrade/core-gatsb-config@1.5.0) (2020-12-18)

### Bug Fixes

- **core-common:** remove browser code from core-node-utils
  ([b2595fc](https://github.com/newrade/newrade/commit/b2595fcc496d8876b0f658592a66659840d1ec92))
- **core-contentful-lib:** changes
  ([d42278c](https://github.com/newrade/newrade/commit/d42278c313ec5ca24a450536f7dc9b624a6d2fc1))
- **core-gastby-config:** separate UI components
  ([be3d23e](https://github.com/newrade/newrade/commit/be3d23eafc6dbe76e293512fbec5521a8af5db73))
- **core-gastby-starter:** fix char & in url (rename to and)
  ([a0c5cf8](https://github.com/newrade/newrade/commit/a0c5cf8fa52cdaff56c0568a8ff7a402b44928d7))
- **core-gastby-starter:** layout for /docs /design-system /pages/
  ([ea84a5c](https://github.com/newrade/newrade/commit/ea84a5c557dd39d6b10785d604798e457ff24341))
- **core-gatsby-config:** fix config
  ([0ce5d65](https://github.com/newrade/newrade/commit/0ce5d65cb93e700ca30037a18c0bf69cea6f3eaf))
- **core-gatsby-config:** wip
  ([23fc34d](https://github.com/newrade/newrade/commit/23fc34d697170326d0fac69874652635c2cf50ba))
- **core-gatsby-starter:** add dot env files type check
  ([4c65040](https://github.com/newrade/newrade/commit/4c65040705a61efbf9e55ecd585a789dbfd9f623))
- **core-gatsby-starter:** fix page creation
  ([9e6ffaa](https://github.com/newrade/newrade/commit/9e6ffaa854dabb24560f18d673f61e9542ddebe2))
- **core-gatsby-starter:** fixes
  ([ffe7715](https://github.com/newrade/newrade/commit/ffe771547de87fd75b3745cf76ed136731c5f232))
- **core-gatsby-starter:** refactor templates + setup pages and markdown
  ([4aaa949](https://github.com/newrade/newrade/commit/4aaa949750c94a939b35767f2bd3fb20b8fb2614))
- **core-gatsby-starter:** wip
  ([6457254](https://github.com/newrade/newrade/commit/6457254e0f99917a7d7d7444ee34596e030e3a5c))
- **core-react-ui:** wip ([093aa8f](https://github.com/newrade/newrade/commit/093aa8fb17d1c4b8aecca90142666984e239976d))
- **gastby:** fixes for markdown file generation
  ([2982616](https://github.com/newrade/newrade/commit/29826163498932d216cc22ec713d7de076812fbb))
- **gatsby-starter:** fixes for nav queries
  ([170803a](https://github.com/newrade/newrade/commit/170803a87cb0bb657407d58a5084e211942fac89))
- **repo:** add .env type checking to all packages
  ([d382e42](https://github.com/newrade/newrade/commit/d382e42e2dcfbff0b635b4aa1f2c04e56deda4d7))
- **wip-react-ui:** wip ([d8dc726](https://github.com/newrade/newrade/commit/d8dc7262ca611475cc028b1cdb4c9d121f170962))

### Features

- **core-gastby-config:** add feature to common plugin
  ([338812a](https://github.com/newrade/newrade/commit/338812a356d19a3d985000def12028b1e25e0220))
- **core-react-ui:** add CSSReset component and other utilities
  ([dadedcb](https://github.com/newrade/newrade/commit/dadedcb398a615c60a6a9785faa4cdfd5e9b0c6e))

## [1.4.2](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.4.1...@newrade/core-gatsb-config@1.4.2) (2020-11-30)

**Note:** Version bump only for package @newrade/core-gatsb-config

## [1.4.1](https://github.com/newrade/newrade/compare/@newrade/core-gatsb-config@1.4.0...@newrade/core-gatsb-config@1.4.1) (2020-11-26)

### Bug Fixes

- **core-gatsby-config:** enable strict checks for gastby projects
  ([4cb9ee0](https://github.com/newrade/newrade/commit/4cb9ee0d6e34d93ced821f7187a7cb0a14504c7a))
- **mir-website:** implement mdx based blog posts
  ([4fca42d](https://github.com/newrade/newrade/commit/4fca42db2a278de3047fb72e77332115579e84e5))
- **repo:** fix typings ([4299ed3](https://github.com/newrade/newrade/commit/4299ed3367c15cee98dd6aeb22cebc2714b1c750))

# 1.4.0 (2020-11-02)

### Bug Fixes

- **build:** temporarily disable project reference for gatsby sites
  ([ea43bdd](https://github.com/newrade/newrade/commit/ea43bdd5859ca93660b1da00a81ded93b8da7b47))
- **core-gatsby-starter:** add a more reliable way to debug gatsby
  ([d63cd1c](https://github.com/newrade/newrade/commit/d63cd1c69ae3af843c74fc3bc927f4c96bf64042))
- **gatsby:** add scripts to generate config files that can be easily debugged
  ([56c0a41](https://github.com/newrade/newrade/commit/56c0a4142a9fbd7b66a462aa18c06b60819eee69))
- **gatsby:** use shared config for gatsby
  ([0c29387](https://github.com/newrade/newrade/commit/0c29387167b20f890241e92297939276dd64ba43))
- **mir-website:** add page query
  ([4d372d2](https://github.com/newrade/newrade/commit/4d372d2baaef8eb63093b017be0a1b83864ebd4b))
- **mir-website:** fix build
  ([ab6b04b](https://github.com/newrade/newrade/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **mir-website:** fix obscure bug with treat, remove double usage of useStyle()
  ([59b043a](https://github.com/newrade/newrade/commit/59b043a8163318a32ea28c5b280d446ab7d291ab))
- **mir-website:** fix some gatsby codegen config
  ([c8f6746](https://github.com/newrade/newrade/commit/c8f674603443a17a809a37da125c940ddfa00d24))
- **mir-website:** fix tsconfig
  ([a8ea2fb](https://github.com/newrade/newrade/commit/a8ea2fb6e62054df36cdf320651eefa5743e7380))
- **mir-website:** fixing css
  ([94ce249](https://github.com/newrade/newrade/commit/94ce2494ba9366f5709067f723e72aa800149f48))
- **mir-website:** remove yarn clean before each yarn build
  ([e201a90](https://github.com/newrade/newrade/commit/e201a90373e98a1efd21f26e977a479e755f5c07))
- **repo:** add missing prebuild commands
  ([aeebd40](https://github.com/newrade/newrade/commit/aeebd4009243fbbd1ce1473a31dcb26299b41121))
- **repo:** fix scripts ([1468532](https://github.com/newrade/newrade/commit/1468532b791600a47b2b8082ef822148a72d764c))
- **repo:** fixes for refactor and react-ui-app
  ([91abbbd](https://github.com/newrade/newrade/commit/91abbbd1ee9fd658b3e02c016313292e88f19af0))
- **repo:** fixes for tsconfigs
  ([3472b8e](https://github.com/newrade/newrade/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** remove postinstall command for packages
  ([7e8bd73](https://github.com/newrade/newrade/commit/7e8bd73bcec5877233de0770becf757d8cb7787a))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** wip ([68d9f77](https://github.com/newrade/newrade/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **typescript:** remove typeRoots which is almost a deprecated feature
  ([edfab31](https://github.com/newrade/newrade/commit/edfab31f34f518881c56fea74aa83331957ddcaf))
- **typescript:** revert to v3 since eslint and prettier are not ready
  ([08bc333](https://github.com/newrade/newrade/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))
- **wip:** wip ([3319697](https://github.com/newrade/newrade/commit/3319697e314d643fb809a790b2d9c3b1bf1c749b))

### Features

- **core-\*:** refactor core-design-system and core-react-ui
  ([106720e](https://github.com/newrade/newrade/commit/106720e4214f6491beac76c23977f5d52c1cd058))
- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-design-system:** reorg and removing any css props from design-system
  ([b353e4f](https://github.com/newrade/newrade/commit/b353e4f47107dc3b1e4ff363b600033655acd044))
- **core-design-system:** working on css implementation
  ([3c6666c](https://github.com/newrade/newrade/commit/3c6666c2bd1c4ca239ad5ec38ebb6e78fffab43e))
- **core-gatsby-config:** add shared config
  ([7d49add](https://github.com/newrade/newrade/commit/7d49adde7eb14b678c123933abdc12e7a76691e2))
- **core-gatsby-config:** init package
  ([0bd1e36](https://github.com/newrade/newrade/commit/0bd1e368093067c80011e8f9d9e0ecd295dc2766))
- **core-gatsby-starter:** minimal markdown setup with RichText
  ([57fbac8](https://github.com/newrade/newrade/commit/57fbac8b2838945fdd5a9abca09348a0605df1ba))
- **core-react-ui:** add seo models and components
  ([4861d62](https://github.com/newrade/newrade/commit/4861d626c4c25b96f1d3f22bf5a958d3417d2ad9))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **mir-website:** add gatsby config for seo
  ([5a68bce](https://github.com/newrade/newrade/commit/5a68bce2df6ac71f533850e91f5686e3b7d352ec))

## [1.3.2](https://github.com/newrade/newrade/compare/core-gatsby-config@1.3.1...core-gatsby-config@1.3.2) (2020-09-28)

**Note:** Version bump only for package core-gatsby-config

## [1.3.1](https://github.com/newrade/newrade/compare/core-gatsby-config@1.3.0...core-gatsby-config@1.3.1) (2020-09-17)

**Note:** Version bump only for package core-gatsby-config

# [1.3.0](https://github.com/newrade/newrade/compare/core-gatsby-config@1.2.1...core-gatsby-config@1.3.0) (2020-09-16)

### Bug Fixes

- **mir-website:** remove yarn clean before each yarn build
  ([e201a90](https://github.com/newrade/newrade/commit/e201a90373e98a1efd21f26e977a479e755f5c07))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))

### Features

- **core-react-ui:** add seo models and components
  ([4861d62](https://github.com/newrade/newrade/commit/4861d626c4c25b96f1d3f22bf5a958d3417d2ad9))
- **mir-website:** add gatsby config for seo
  ([5a68bce](https://github.com/newrade/newrade/commit/5a68bce2df6ac71f533850e91f5686e3b7d352ec))

## [1.2.1](https://github.com/newrade/newrade/compare/core-gatsby-config@1.2.0...core-gatsby-config@1.2.1) (2020-09-02)

### Bug Fixes

- **mir-website:** fix obscure bug with treat, remove double usage of useStyle()
  ([59b043a](https://github.com/newrade/newrade/commit/59b043a8163318a32ea28c5b280d446ab7d291ab))
- **repo:** add missing prebuild commands
  ([aeebd40](https://github.com/newrade/newrade/commit/aeebd4009243fbbd1ce1473a31dcb26299b41121))

# 1.2.0 (2020-08-24)

### Bug Fixes

- **gatsby:** use shared config for gatsby
  ([0c29387](https://github.com/newrade/newrade/commit/0c29387167b20f890241e92297939276dd64ba43))
- **mir-website:** fix some gatsby codegen config
  ([c8f6746](https://github.com/newrade/newrade/commit/c8f674603443a17a809a37da125c940ddfa00d24))
- **mir-website:** fix tsconfig
  ([a8ea2fb](https://github.com/newrade/newrade/commit/a8ea2fb6e62054df36cdf320651eefa5743e7380))

### Features

- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-gatsby-config:** add shared config
  ([7d49add](https://github.com/newrade/newrade/commit/7d49adde7eb14b678c123933abdc12e7a76691e2))
- **core-gatsby-config:** init package
  ([0bd1e36](https://github.com/newrade/newrade/commit/0bd1e368093067c80011e8f9d9e0ecd295dc2766))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
