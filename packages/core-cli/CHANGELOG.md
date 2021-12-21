# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.15.0](https://github.com/newrade/newrade-core/compare/@newrade/core-cli@1.14.1...@newrade/core-cli@1.15.0) (2021-12-21)

### Bug Fixes

- **core:** fix bad global import in core-react-ui/global and other fixes in
  gatsby config
  ([b039f05](https://github.com/newrade/newrade-core/commit/b039f05dfe91716bbf62ea36e5f14927761d2d32))
- **core:** fixes for fork-ts-checker and ts-loader config
  ([3ae9b37](https://github.com/newrade/newrade-core/commit/3ae9b37fb43e12cf9d375fb85cea6d81f6efbecd))
- **core-cli:** fix deps and update version after new command
  ([16a26b2](https://github.com/newrade/newrade-core/commit/16a26b2bf91b61e11ac8ae84f542ab480d2aac62))
- **core-cli:** fix manifest
  ([456c0b6](https://github.com/newrade/newrade-core/commit/456c0b60b9565b931e24e9587d415d252f3242e2))
- **core-gatsby-config:** enable progress plugin only for build
  ([4a8ec4d](https://github.com/newrade/newrade-core/commit/4a8ec4d5d83f426e6aaf0104c32ccb1ca872cf6c))
- **core-ui:** improvements for theming selection and organization
  ([5a49a03](https://github.com/newrade/newrade-core/commit/5a49a03bdf9d0a5c571906745f4594e400ed09f0))

### Features

- **core-css-extractor:** new utility to extract css tokens from vanilla-extract
  styles
  ([567d698](https://github.com/newrade/newrade-core/commit/567d6984e197123c559b00cfdf62e516dda7e838))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.14.1](https://github.com/newrade/newrade-core/compare/@newrade/core-cli@1.14.0...@newrade/core-cli@1.14.1) (2021-11-23)

### Bug Fixes

- **core-cli:** fix bug when using prepare-exports in scoped package
  ([b6f228c](https://github.com/newrade/newrade-core/commit/b6f228cd34113a7830edea5d3b43ae552c36a875))
- **core-cli:** fix release package
  ([67ba069](https://github.com/newrade/newrade-core/commit/67ba069c4c6133c37f0c35d86a78c2f8bd9f274e))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.14.0](https://github.com/newrade/newrade-core/compare/@newrade/core-cli@1.13.1...@newrade/core-cli@1.14.0) (2021-11-18)

### Bug Fixes

- **core:** fix typecheck command
  ([a4ee25e](https://github.com/newrade/newrade-core/commit/a4ee25eb09e9aee5d363acdf106f0420aeb9cf33))
- **core-cli:** fix gatsby command
  ([9905459](https://github.com/newrade/newrade-core/commit/9905459d588d3a1122548b74cfabcb0fc8bf7d12))
- **core-cli:** fix npm link command
  ([b36690b](https://github.com/newrade/newrade-core/commit/b36690be1d9fecc7b31e52e40517752030f7652f))
- **core-ui:** fix iframe style replication
  ([e25915b](https://github.com/newrade/newrade-core/commit/e25915b4416bc2f340ecc47d534a59d5e3eabc98))
- **core-utils:** reorg files
  ([4108a26](https://github.com/newrade/newrade-core/commit/4108a263592b97b7750b24886bf680bf33280aea))

### Features

- **core-cli:** add lerna-version command
  ([833337e](https://github.com/newrade/newrade-core/commit/833337ec237c77f342d965e1fac65e26a7b2cf43))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.13.1](https://github.com/newrade/newrade-core/compare/@newrade/core-cli@1.13.0...@newrade/core-cli@1.13.1) (2021-10-05)

### Bug Fixes

- **core:** fix gatsby related error during build
  ([bab4df4](https://github.com/newrade/newrade-core/commit/bab4df48d7cd4c2b43157f26319660ef806c7f39))
- **core:** fixes for components
  ([f84cca4](https://github.com/newrade/newrade-core/commit/f84cca4f9753bab261f841a132964c02f8b8c85a))
- **core:** fixes for gatsby ssr in dev
  ([6ea2782](https://github.com/newrade/newrade-core/commit/6ea27825a630eb55deefa17da243ddc7f81a1304))
- **core:** update scripts and doc to support windows
  ([22694d7](https://github.com/newrade/newrade-core/commit/22694d7dd96f8d72669fa480f3a4354876e2f319))
- **core-cli:** another fix for windows
  ([91d1393](https://github.com/newrade/newrade-core/commit/91d13939f69eb770ad578e1567d1a00084110560))
- **core-cli:** fix for jest, add new command for jest watch
  ([e09c53e](https://github.com/newrade/newrade-core/commit/e09c53e7dbff793f14e19efc205e878a5b1cb425))
- **core-cli:** fix for webpack wrapper
  ([afbe2e6](https://github.com/newrade/newrade-core/commit/afbe2e6ab909bf77189a196e9794cbe6c1774b72))
- **core-cli:** fix gatsby command for deprecation warning
  ([7667f93](https://github.com/newrade/newrade-core/commit/7667f937b0e49be40f32136ac1aa055d7366cb8e))
- **core-cli:** fix path of bin for windows
  ([eb15ad4](https://github.com/newrade/newrade-core/commit/eb15ad4dcdb18223b4cef860478ac4c1a52c00da))
- **core-cli:** fix std bugs
  ([038eea7](https://github.com/newrade/newrade-core/commit/038eea7de819a1316e2d638f5594d34dff193e8a))
- **core-cli:** fixes for windows compatibility
  ([6c08f00](https://github.com/newrade/newrade-core/commit/6c08f000c22b3bfce2d8ffdf117cc3090080c002))
- **core-cli:** potential fix for windows issue with oclif
  ([cf2b71f](https://github.com/newrade/newrade-core/commit/cf2b71f835aad373d92fcefc4141ac74ff3a40d6))
- **core-cli:** prepack after changes
  ([523f856](https://github.com/newrade/newrade-core/commit/523f856249636e596a02c7af12f9f33ecca566a1))
- **core-gatsby-ui:** finalize logic for navigation api utilities
  ([23811da](https://github.com/newrade/newrade-core/commit/23811daa6d2df12209b4d43d098b162a86bf758d))
- **core-react-ui:** fixes for bodyscrolllock for ios 15
  ([544178d](https://github.com/newrade/newrade-core/commit/544178d23d8b34ef2d326df8d8f3d39676c57954))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.13.0](https://github.com/newrade/newrade-core/compare/@newrade/core-cli@1.12.0...@newrade/core-cli@1.13.0) (2021-09-09)

### Bug Fixes

- **core-cli:** fix for jest wrapper
  ([398e394](https://github.com/newrade/newrade-core/commit/398e3942a367ace048e7fdf614737b1ce9a3c906))
- **core-cli:** fix gatsby wrapper
  ([6d704df](https://github.com/newrade/newrade-core/commit/6d704df752c488b332b1ae7db58ead77e044ab40))
- **core-cli:** fix manifest for new version
  ([8c799d4](https://github.com/newrade/newrade-core/commit/8c799d4ec98a54e34585d1618d8332766950fab3))
- **core-cli:** fix stderr handling
  ([8f30647](https://github.com/newrade/newrade-core/commit/8f3064757f02673547a69fa86ec0171d9054c7ca))
- **core-cli:** fix wrong jest command file
  ([52cc45b](https://github.com/newrade/newrade-core/commit/52cc45b6fd5fcb1b952e3cd8f7eef76a07cf1dd0))
- **core-figma-extractor:** fix rgba exporter bug
  ([e646535](https://github.com/newrade/newrade-core/commit/e646535461c52eff21edebdc5a551914673720a5))
- **ze:** fix dependencies
  ([77b25c0](https://github.com/newrade/newrade-core/commit/77b25c018d6d4c00b8fc2c193ce9a07d1b86f8a3))

### Features

- **core-figma-extractor:** finalize v1
  ([3da3cfe](https://github.com/newrade/newrade-core/commit/3da3cfefcc6f8c3efd2ea1025b7bef2125f1742f))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.12.0](https://github.com/newrade/newrade-core/compare/@newrade/core-cli@1.11.0...@newrade/core-cli@1.12.0) (2021-08-31)

### Bug Fixes

- **core:** add ls-lint
  ([76728ca](https://github.com/newrade/newrade-core/commit/76728ca9b5e340d7587f596e3e4ca373e788ca91))
- **core:** big cleanup of unnecessary tsconfig files
  ([36cbad5](https://github.com/newrade/newrade-core/commit/36cbad539a31dc00c8ab7cf12e6a1916692917a7))
- **core:** create additionnal workflows
  ([02e4041](https://github.com/newrade/newrade-core/commit/02e4041ff7a755ff2f69f5c2c3d4410c318978ec))
- **core:** fix config files for gatsby
  ([5f495d0](https://github.com/newrade/newrade-core/commit/5f495d071b5e8f078d7be39f2618ecc57905273b))
- **core:** fix contentful typo
  ([f3074ba](https://github.com/newrade/newrade-core/commit/f3074bad28122733cef54e64a0c13c7a7724513f))
- **core:** fix core-repo-diagram workflow
  ([698b596](https://github.com/newrade/newrade-core/commit/698b596b3edc66de0de6d3eb5f515b3aed91c2b3))
- **core:** fix core-webpack-config entry
  ([e1bdf14](https://github.com/newrade/newrade-core/commit/e1bdf14466b3e3f20ae7397faf2da79382a94e40))
- **core:** fix deps in packages
  ([112f5c4](https://github.com/newrade/newrade-core/commit/112f5c421e3e5aef5ffb510cc6cf3d615ef7aba1))
- **core:** fix for base node setup workflow
  ([18a4374](https://github.com/newrade/newrade-core/commit/18a437411e87c35aa253211810206d0efb8d5d5b))
- **core:** fix for core-repo-diagram-workflow
  ([a588d68](https://github.com/newrade/newrade-core/commit/a588d6845c3f10e08914cafbfc7672ae928c115b))
- **core:** fix for core-repo-diagram-workflow
  ([d8e3be3](https://github.com/newrade/newrade-core/commit/d8e3be339ba548dae5abee1b3f3ee09d73803a1b))
- **core:** fix for imports
  ([5cc63ef](https://github.com/newrade/newrade-core/commit/5cc63ef99078f5cf01835c9d2116f15300f5fb63))
- **core:** fix ls-lint config
  ([bb554f2](https://github.com/newrade/newrade-core/commit/bb554f2427845dc80b0cc0d4493874fac539cb5e))
- **core:** fix test config
  ([9d3757b](https://github.com/newrade/newrade-core/commit/9d3757be70590a7b59f536258c8c6bb9215e1076))
- **core:** fix typecheck command
  ([4bab26c](https://github.com/newrade/newrade-core/commit/4bab26c27b1f679dc8376b84347aa94d2d235eea))
- **core:** fix typescript version and husky push hook
  ([3b8e031](https://github.com/newrade/newrade-core/commit/3b8e0318e64ccaf58afd948b1d6d127cbbfe85d2))
- **core:** various fixes for core packages targeting documentation & core docs
  update
  ([3ce203f](https://github.com/newrade/newrade-core/commit/3ce203fbbc073394a71adcad1979cc1ef1031903))
- **core-cli:** fixes after merge
  ([6fb4f7a](https://github.com/newrade/newrade-core/commit/6fb4f7adfd1c6b38cf9631c7a4683c0398c51c5b))
- **core-cli:** update manifest
  ([2932554](https://github.com/newrade/newrade-core/commit/2932554511cfc2edcbf041965b9a86bf328fca3f))
- **core-react-ui:** fix bad import
  ([46caa70](https://github.com/newrade/newrade-core/commit/46caa70461d41762723fe3d152475117f6a397c2))
- **root:** fixes for webpack and gatsby config
  ([0421692](https://github.com/newrade/newrade-core/commit/04216928e08cfdf9be562e8b0ac4263db22943ec))
- **ze:** fixes for ze demo website
  ([0f31dbf](https://github.com/newrade/newrade-core/commit/0f31dbf5434b749562cb98c9fa20b2591ecaebcb))

### Features

- **core:** add i18n component
  ([756b0f1](https://github.com/newrade/newrade-core/commit/756b0f1e958be77689b3733e62157a3c1d029adc))
- **core-cli:** add new command to copy github labels
  ([031f3c8](https://github.com/newrade/newrade-core/commit/031f3c80132fc9e85ef51db82e40f33b37b6d7ef))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.11.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.10.2...@newrade/core-cli@1.11.0) (2021-07-15)

### Features

- **core-react-ui:** add new navbar components
  ([6d5ac76](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/6d5ac76507f73eea1a5bc9c331948fa3a61ff82b))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.10.2](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.10.1...@newrade/core-cli@1.10.2) (2021-07-12)

**Note:** Version bump only for package @newrade/core-cli

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.10.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.10.0...@newrade/core-cli@1.10.1) (2021-07-05)

**Note:** Version bump only for package @newrade/core-cli

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.10.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.9.0...@newrade/core-cli@1.10.0) (2021-07-03)

### Bug Fixes

- **adding-log-fix:** fixing the formating of the figma-color.ts and adding new
  logError
  ([ad7d646](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ad7d6460b93aa3a83efc948138fadc8cea3dc7b8))
- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))
- **core-cli:** bumb version
  ([9b38f2b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/9b38f2b1a223165c47ce46f17ab1ec636161b041))
- **core-cli:** fix tsconfig path
  ([15ff3d4](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/15ff3d4ca98070f5bc2ff19452f00eb04b51c0c1))
- **core-figma-extractor:** fix bad import
  ([68b3c64](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/68b3c645928aa2c65719d8b3b54740a2042ef782))
- **core-figma-extractor:** refactor extract color functions
  ([bba1455](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bba1455cde161672fbff7184964fdd894b9af694))
- **core-gatsby-config:** things are starting to work again
  ([9b5dec8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/9b5dec81b161122302006f924aa95f443ad116d2))
- **core-react-ui:** add a node script to copy files
  ([4079d99](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4079d99ad5f946c582579ec740c6ffa18b202d5c))
- **deep-scan-fixes:** fixing medium issues
  ([ae016c5](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ae016c53a192df6cfdb33f3c59da987870282b07))
- **fix-error-compile:** fixing the creation of figma colors
  ([b72ef19](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b72ef192ed693d333d3cf266abc04f5abf81f16e))
- **lint:** fix line width to 100
  ([49574eb](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/49574eb1fe8aa3bbdf3cf9a6067956ccf3a96561))
- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))
- **repo:** improve tsconfigs and build references
  ([22a31c1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/22a31c17608f6d6fda5ccd193588fd9194c68502))
- **vsb-website:** working on sections & blocks
  ([8641d04](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/8641d04cb1a44737d19a7330ed038105fa9b6b7c))

### Features

- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **core-react-ui:** add img-downloader component
  ([b7f89c8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b7f89c812ccecb97dab7e99cb31169fe8118bdfd))
- **core-react-ui:** add sections and blocs
  ([04a5386](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/04a5386073c903740c635ff38cef435963078f12))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **gsap:** wip
  ([0d099eb](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/0d099ebbc78f50910e56ffada9b92d6d51025883))
- **new-figma-request-model:** adding thefigma style request in the current
  color extractor
  ([8f63750](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/8f637506d77f9df0936c142d87f29f5452702c43))
- **parsing-color:** parsing all the color of the style
  ([6124b85](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/6124b85eadfc10c5f878fec58b16b16b33c22bb6))

## 1.4.2 (2021-01-13)

## 1.4.1 (2021-01-13)

### Bug Fixes

- **build:** fix for core-cli and retry build after updating secrets
  ([70c1c3b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/70c1c3b3296a4177f0b9763d04aa1565c1661096))
- **core-cli:** commit bin folder
  ([7d640ec](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7d640ec8441b600cb96d9209da5ee3c697835370))
- **core-cli:** fix linting issues
  ([cbe3d20](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/cbe3d209e55e6de4f3389c44b18a255ad7a83904))
- **core-cli:** fixes for core-cli tsconfig file
  ([1ad420e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/1ad420e3c909f0f1fc183fb256bfc24d5fa721a8))
- **core-cli:** revert bad change
  ([bde6146](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bde6146922385b342b96ab600046cd32daf0d474))
- **core-common:** remove browser code from core-utils
  ([b2595fc](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b2595fcc496d8876b0f658592a66659840d1ec92))
- **core-contentful-lib:** changes
  ([d42278c](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/d42278c313ec5ca24a450536f7dc9b624a6d2fc1))
- **core-design-system:** small refactoring and additions
  ([a2a2af3](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/a2a2af348dfeb1a0c70a7a8d8948442d6ff22c99))
- **core-gatsby-starter:** refactor templates + setup pages and markdown
  ([4aaa949](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4aaa949750c94a939b35767f2bd3fb20b8fb2614))
- **mir-website:** fix build
  ([ab6b04b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **repo:** add .env type checking to all packages
  ([d382e42](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/d382e42e2dcfbff0b635b4aa1f2c04e56deda4d7))
- **repo:** fixes for tsconfigs
  ([3472b8e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **repo:** wip
  ([68d9f77](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **typescript:** revert to v3 since eslint and prettier are not ready
  ([08bc333](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))

### Features

- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-cli:** add the figma-sync command
  ([c53788f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/c53788f7a03b989954328c6b41227f3dae9c20bf))
- **core-cli:** bump ts version
  ([bed9c6b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bed9c6b049879f9f10e35b000cf3640d34f447d3))
- **core-cli:** clean up core-cli project files
  ([09fe51e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/09fe51e5db9f6a6de5d9e9da18236780fea8d9cb))
- **core-design-system:** add Sizing.sizes to access CSS variables more easily
  (var())
  ([3db4195](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3db41956b5a91b05f0f2651472a0cbbd4dd826cc))
- **core-react-ui:** shadow test resolved
  ([ad179dd](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ad179ddad6b3b6137dc382a612a33b48272be7dc))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **mir-website:** some fixes
  ([254280a](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/254280a3c72c579d6a6f7689e7ad602291638dee))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.9.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.9.0...@newrade/core-cli@1.9.0) (2021-07-03)

### Bug Fixes

- **adding-log-fix:** fixing the formating of the figma-color.ts and adding new
  logError
  ([ad7d646](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ad7d6460b93aa3a83efc948138fadc8cea3dc7b8))
- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))
- **core-cli:** fix tsconfig path
  ([15ff3d4](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/15ff3d4ca98070f5bc2ff19452f00eb04b51c0c1))
- **core-figma-extractor:** fix bad import
  ([68b3c64](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/68b3c645928aa2c65719d8b3b54740a2042ef782))
- **core-figma-extractor:** refactor extract color functions
  ([bba1455](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bba1455cde161672fbff7184964fdd894b9af694))
- **core-gatsby-config:** things are starting to work again
  ([9b5dec8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/9b5dec81b161122302006f924aa95f443ad116d2))
- **core-react-ui:** add a node script to copy files
  ([4079d99](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4079d99ad5f946c582579ec740c6ffa18b202d5c))
- **deep-scan-fixes:** fixing medium issues
  ([ae016c5](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ae016c53a192df6cfdb33f3c59da987870282b07))
- **fix-error-compile:** fixing the creation of figma colors
  ([b72ef19](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b72ef192ed693d333d3cf266abc04f5abf81f16e))
- **lint:** fix line width to 100
  ([49574eb](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/49574eb1fe8aa3bbdf3cf9a6067956ccf3a96561))
- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))
- **repo:** improve tsconfigs and build references
  ([22a31c1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/22a31c17608f6d6fda5ccd193588fd9194c68502))
- **vsb-website:** working on sections & blocks
  ([8641d04](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/8641d04cb1a44737d19a7330ed038105fa9b6b7c))

### Features

- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))
- **core-react-ui:** add img-downloader component
  ([b7f89c8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b7f89c812ccecb97dab7e99cb31169fe8118bdfd))
- **core-react-ui:** add sections and blocs
  ([04a5386](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/04a5386073c903740c635ff38cef435963078f12))
- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))
- **gsap:** wip
  ([0d099eb](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/0d099ebbc78f50910e56ffada9b92d6d51025883))
- **new-figma-request-model:** adding thefigma style request in the current
  color extractor
  ([8f63750](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/8f637506d77f9df0936c142d87f29f5452702c43))
- **parsing-color:** parsing all the color of the style
  ([6124b85](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/6124b85eadfc10c5f878fec58b16b16b33c22bb6))

## 1.4.2 (2021-01-13)

## 1.4.1 (2021-01-13)

### Bug Fixes

- **build:** fix for core-cli and retry build after updating secrets
  ([70c1c3b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/70c1c3b3296a4177f0b9763d04aa1565c1661096))
- **core-cli:** commit bin folder
  ([7d640ec](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7d640ec8441b600cb96d9209da5ee3c697835370))
- **core-cli:** fix linting issues
  ([cbe3d20](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/cbe3d209e55e6de4f3389c44b18a255ad7a83904))
- **core-cli:** fixes for core-cli tsconfig file
  ([1ad420e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/1ad420e3c909f0f1fc183fb256bfc24d5fa721a8))
- **core-cli:** revert bad change
  ([bde6146](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bde6146922385b342b96ab600046cd32daf0d474))
- **core-common:** remove browser code from core-utils
  ([b2595fc](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b2595fcc496d8876b0f658592a66659840d1ec92))
- **core-contentful-lib:** changes
  ([d42278c](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/d42278c313ec5ca24a450536f7dc9b624a6d2fc1))
- **core-design-system:** small refactoring and additions
  ([a2a2af3](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/a2a2af348dfeb1a0c70a7a8d8948442d6ff22c99))
- **core-gatsby-starter:** refactor templates + setup pages and markdown
  ([4aaa949](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4aaa949750c94a939b35767f2bd3fb20b8fb2614))
- **mir-website:** fix build
  ([ab6b04b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **repo:** add .env type checking to all packages
  ([d382e42](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/d382e42e2dcfbff0b635b4aa1f2c04e56deda4d7))
- **repo:** fixes for tsconfigs
  ([3472b8e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4b28071d704905c281b304a78c5888fbf5961de5))
- **repo:** wip
  ([68d9f77](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **typescript:** revert to v3 since eslint and prettier are not ready
  ([08bc333](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))

### Features

- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-cli:** add the figma-sync command
  ([c53788f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/c53788f7a03b989954328c6b41227f3dae9c20bf))
- **core-cli:** bump ts version
  ([bed9c6b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bed9c6b049879f9f10e35b000cf3640d34f447d3))
- **core-cli:** clean up core-cli project files
  ([09fe51e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/09fe51e5db9f6a6de5d9e9da18236780fea8d9cb))
- **core-design-system:** add Sizing.sizes to access CSS variables more easily
  (var())
  ([3db4195](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3db41956b5a91b05f0f2651472a0cbbd4dd826cc))
- **core-react-ui:** shadow test resolved
  ([ad179dd](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ad179ddad6b3b6137dc382a612a33b48272be7dc))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **mir-website:** some fixes
  ([254280a](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/254280a3c72c579d6a6f7689e7ad602291638dee))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.8.2](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.8.1...@newrade/core-cli@1.8.2) (2021-06-16)

### Bug Fixes

- **build:** simplify build commands
  ([433ef53](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/433ef533f2812a73a9e4062f394b42f9c2c94ebf))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.8.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.8.0...@newrade/core-cli@1.8.1) (2021-05-25)

**Note:** Version bump only for package @newrade/core-cli

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.8.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.7.0...@newrade/core-cli@1.8.0) (2021-05-21)

### Bug Fixes

- **lint:** fix line width to 100
  ([49574eb](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/49574eb1fe8aa3bbdf3cf9a6067956ccf3a96561))

### Features

- **core-graphql-ui:** init package
  ([7c4df6b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7c4df6bc867e61a8e545dc7d389f6bc58777f899))

# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.7.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.6.1...@newrade/core-cli@1.7.0) (2021-03-09)

### Bug Fixes

- **adding-log-fix:** fixing the formating of the figma-color.ts and adding new
  logError
  ([ad7d646](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ad7d6460b93aa3a83efc948138fadc8cea3dc7b8))
- **core-cli:** fix tsconfig path
  ([15ff3d4](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/15ff3d4ca98070f5bc2ff19452f00eb04b51c0c1))
- **core-figma-extractor:** fix bad import
  ([68b3c64](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/68b3c645928aa2c65719d8b3b54740a2042ef782))
- **core-figma-extractor:** refactor extract color functions
  ([bba1455](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bba1455cde161672fbff7184964fdd894b9af694))
- **core-gatsby-config:** things are starting to work again
  ([9b5dec8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/9b5dec81b161122302006f924aa95f443ad116d2))
- **fix-error-compile:** fixing the creation of figma colors
  ([b72ef19](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b72ef192ed693d333d3cf266abc04f5abf81f16e))
- **vsb-website:** working on sections & blocks
  ([8641d04](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/8641d04cb1a44737d19a7330ed038105fa9b6b7c))

### Features

- **gsap:** wip
  ([0d099eb](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/0d099ebbc78f50910e56ffada9b92d6d51025883))
- **new-figma-request-model:** adding thefigma style request in the current
  color extractor
  ([8f63750](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/8f637506d77f9df0936c142d87f29f5452702c43))
- **parsing-color:** parsing all the color of the style
  ([6124b85](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/6124b85eadfc10c5f878fec58b16b16b33c22bb6))

## [1.6.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.6.0...@newrade/core-cli@1.6.1) (2021-02-22)

### Bug Fixes

- **repo:** clean up eslint and gitignore files
  ([5a0a45d](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/5a0a45d7d6e669dc6859f361093d6d5b1e3c5d09))

# [1.6.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.5.2...@newrade/core-cli@1.6.0) (2021-02-19)

### Features

- **core-react-ui:** add sections and blocs
  ([04a5386](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/04a5386073c903740c635ff38cef435963078f12))

## [1.5.2](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.5.1...@newrade/core-cli@1.5.2) (2021-02-15)

**Note:** Version bump only for package @newrade/core-cli

## [1.5.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.5.0...@newrade/core-cli@1.5.1) (2021-02-11)

### Bug Fixes

- **deep-scan-fixes:** fixing medium issues
  ([ae016c5](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ae016c53a192df6cfdb33f3c59da987870282b07))

# [1.5.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.4.1...@newrade/core-cli@1.5.0) (2021-02-03)

### Bug Fixes

- **core-react-ui:** add a node script to copy files
  ([4079d99](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4079d99ad5f946c582579ec740c6ffa18b202d5c))
- **repo:** improve tsconfigs and build references
  ([22a31c1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/22a31c17608f6d6fda5ccd193588fd9194c68502))
- **repo:** share .d.ts files in core-types
  ([4b28071](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4b28071d704905c281b304a78c5888fbf5961de5))

### Features

- **core-react-ui:** fix syntax highlighting for mdx or regular react code
  ([1f03fa8](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/1f03fa8d0b8345cdbc1cb54328c39baa35e979f8))

## [1.4.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.4.0...@newrade/core-cli@1.4.1) (2021-01-04)

**Note:** Version bump only for package @newrade/core-cli

# [1.4.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.3.2...@newrade/core-cli@1.4.0) (2020-12-18)

### Bug Fixes

- **core-common:** remove browser code from core-utils
  ([b2595fc](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/b2595fcc496d8876b0f658592a66659840d1ec92))
- **core-contentful-lib:** changes
  ([d42278c](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/d42278c313ec5ca24a450536f7dc9b624a6d2fc1))
- **core-gatsby-starter:** refactor templates + setup pages and markdown
  ([4aaa949](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/4aaa949750c94a939b35767f2bd3fb20b8fb2614))
- **repo:** add .env type checking to all packages
  ([d382e42](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/d382e42e2dcfbff0b635b4aa1f2c04e56deda4d7))

### Features

- **core-react-ui:** shadow test resolved
  ([ad179dd](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ad179ddad6b3b6137dc382a612a33b48272be7dc))

## [1.3.2](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.3.1...@newrade/core-cli@1.3.2) (2020-11-30)

**Note:** Version bump only for package @newrade/core-cli

## [1.3.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/@newrade/core-cli@1.3.0...@newrade/core-cli@1.3.1) (2020-11-26)

**Note:** Version bump only for package @newrade/core-cli

# 1.3.0 (2020-11-02)

### Bug Fixes

- **build:** fix for core-cli and retry build after updating secrets
  ([70c1c3b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/70c1c3b3296a4177f0b9763d04aa1565c1661096))
- **core-cli:** add test command
  ([9226801](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/92268017f96777148e096fe586a2cb1ecf690fa1))
- **core-cli:** commit bin folder
  ([7d640ec](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7d640ec8441b600cb96d9209da5ee3c697835370))
- **core-cli:** fix build order
  ([2a808cf](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/2a808cff54bf9eb5af44a4cf7153eb43211069c6))
- **core-cli:** fix core-cli build
  ([18f266c](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/18f266c436c11c632ab846bf43615d8188e0d632))
- **core-cli:** fix core-cli build
  ([7a3e2e6](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7a3e2e63b662f9d6555d1e2e2201e47393cb6b43))
- **core-cli:** fix linting issues
  ([cbe3d20](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/cbe3d209e55e6de4f3389c44b18a255ad7a83904))
- **core-cli:** fixes for core-cli tsconfig file
  ([1ad420e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/1ad420e3c909f0f1fc183fb256bfc24d5fa721a8))
- **core-cli:** revert bad change
  ([bde6146](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bde6146922385b342b96ab600046cd32daf0d474))
- **core-design-system:** small refactoring and additions
  ([a2a2af3](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/a2a2af348dfeb1a0c70a7a8d8948442d6ff22c99))
- **mir-website:** fix build
  ([ab6b04b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **repo:** fixes for tsconfigs
  ([3472b8e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** wip
  ([68d9f77](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **typescript:** revert to v3 since eslint and prettier are not ready
  ([08bc333](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))

### Features

- **core-cli:** add basic cli setup
  ([57ae78e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/57ae78e22860cf8116964220c5f5a47ed0488fcf))
- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-cli:** add the figma-sync command
  ([c53788f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/c53788f7a03b989954328c6b41227f3dae9c20bf))
- **core-cli:** add typescript setup
  ([11c38b5](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/11c38b54837aaa0a8fc9f4bdca0e0ae59b32e6d0))
- **core-cli:** bump ts version
  ([bed9c6b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bed9c6b049879f9f10e35b000cf3640d34f447d3))
- **core-cli:** clean up core-cli project files
  ([09fe51e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/09fe51e5db9f6a6de5d9e9da18236780fea8d9cb))
- **core-design-system:** add Sizing.sizes to access CSS variables more easily
  (var())
  ([3db4195](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3db41956b5a91b05f0f2651472a0cbbd4dd826cc))
- **core-gatsby-config:** init package
  ([0bd1e36](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/0bd1e368093067c80011e8f9d9e0ecd295dc2766))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **mir-website:** some fixes
  ([254280a](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/254280a3c72c579d6a6f7689e7ad602291638dee))

## [1.2.2](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/core-cli@1.2.1...core-cli@1.2.2) (2020-09-28)

**Note:** Version bump only for package core-cli

## [1.2.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/core-cli@1.2.0...core-cli@1.2.1) (2020-09-17)

**Note:** Version bump only for package core-cli

# [1.2.0](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/core-cli@1.1.1...core-cli@1.2.0) (2020-09-16)

### Bug Fixes

- **core-cli:** revert bad change
  ([bde6146](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/bde6146922385b342b96ab600046cd32daf0d474))
- **repo:** rework .gitignore and eslint config files
  ([f8f584e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))

### Features

- **core-design-system:** add Sizing.sizes to access CSS variables more easily
  (var())
  ([3db4195](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3db41956b5a91b05f0f2651472a0cbbd4dd826cc))
- **mir-website:** some fixes
  ([254280a](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/254280a3c72c579d6a6f7689e7ad602291638dee))

## [1.1.1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/compare/core-cli@1.1.0...core-cli@1.1.1) (2020-09-02)

**Note:** Version bump only for package core-cli

# 1.1.0 (2020-08-24)

### Bug Fixes

- **build:** fix for core-cli and retry build after updating secrets
  ([70c1c3b](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/70c1c3b3296a4177f0b9763d04aa1565c1661096))
- **core-cli:** add test command
  ([9226801](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/92268017f96777148e096fe586a2cb1ecf690fa1))
- **core-cli:** commit bin folder
  ([7d640ec](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7d640ec8441b600cb96d9209da5ee3c697835370))
- **core-cli:** fix build order
  ([2a808cf](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/2a808cff54bf9eb5af44a4cf7153eb43211069c6))
- **core-cli:** fix core-cli build
  ([18f266c](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/18f266c436c11c632ab846bf43615d8188e0d632))
- **core-cli:** fix core-cli build
  ([7a3e2e6](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/7a3e2e63b662f9d6555d1e2e2201e47393cb6b43))
- **core-cli:** fix linting issues
  ([cbe3d20](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/cbe3d209e55e6de4f3389c44b18a255ad7a83904))
- **core-design-system:** small refactoring and additions
  ([a2a2af3](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/a2a2af348dfeb1a0c70a7a8d8948442d6ff22c99))

### Features

- **core-cli:** add basic cli setup
  ([57ae78e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/57ae78e22860cf8116964220c5f5a47ed0488fcf))
- **core-cli:** add oclif
  ([e3b89a1](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-cli:** add the figma-sync command
  ([c53788f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/c53788f7a03b989954328c6b41227f3dae9c20bf))
- **core-cli:** add typescript setup
  ([11c38b5](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/11c38b54837aaa0a8fc9f4bdca0e0ae59b32e6d0))
- **core-cli:** clean up core-cli project files
  ([09fe51e](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/09fe51e5db9f6a6de5d9e9da18236780fea8d9cb))
- **core-gatsby-config:** init package
  ([0bd1e36](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/0bd1e368093067c80011e8f9d9e0ecd295dc2766))
- **core-webpack-config:** refactor config to be used in gatsby packages
  ([3a9f06f](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
