# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.4.1](https://github.com/newrade/newrade/compare/@newrade/core-gatsby-config@1.4.0...@newrade/core-gatsby-config@1.4.1) (2020-11-26)

### Bug Fixes

- **core-gatsby-config:** enable strict checks for gastby projects ([4cb9ee0](https://github.com/newrade/newrade/commit/4cb9ee0d6e34d93ced821f7187a7cb0a14504c7a))
- **mir-website:** implement mdx based blog posts ([4fca42d](https://github.com/newrade/newrade/commit/4fca42db2a278de3047fb72e77332115579e84e5))
- **repo:** fix typings ([4299ed3](https://github.com/newrade/newrade/commit/4299ed3367c15cee98dd6aeb22cebc2714b1c750))

# 1.4.0 (2020-11-02)

### Bug Fixes

- **build:** temporarily disable project reference for gatsby sites ([ea43bdd](https://github.com/newrade/newrade/commit/ea43bdd5859ca93660b1da00a81ded93b8da7b47))
- **core-gatsby-starter:** add a more reliable way to debug gatsby ([d63cd1c](https://github.com/newrade/newrade/commit/d63cd1c69ae3af843c74fc3bc927f4c96bf64042))
- **gatsby:** add scripts to generate config files that can be easily debugged ([56c0a41](https://github.com/newrade/newrade/commit/56c0a4142a9fbd7b66a462aa18c06b60819eee69))
- **gatsby:** use shared config for gatsby ([0c29387](https://github.com/newrade/newrade/commit/0c29387167b20f890241e92297939276dd64ba43))
- **mir-website:** add page query ([4d372d2](https://github.com/newrade/newrade/commit/4d372d2baaef8eb63093b017be0a1b83864ebd4b))
- **mir-website:** fix build ([ab6b04b](https://github.com/newrade/newrade/commit/ab6b04b26868fa94741c9a28de7c9ff0b1981ec4))
- **mir-website:** fix obscure bug with treat, remove double usage of useStyle() ([59b043a](https://github.com/newrade/newrade/commit/59b043a8163318a32ea28c5b280d446ab7d291ab))
- **mir-website:** fix some gatsby codegen config ([c8f6746](https://github.com/newrade/newrade/commit/c8f674603443a17a809a37da125c940ddfa00d24))
- **mir-website:** fix tsconfig ([a8ea2fb](https://github.com/newrade/newrade/commit/a8ea2fb6e62054df36cdf320651eefa5743e7380))
- **mir-website:** fixing css ([94ce249](https://github.com/newrade/newrade/commit/94ce2494ba9366f5709067f723e72aa800149f48))
- **mir-website:** remove yarn clean before each yarn build ([e201a90](https://github.com/newrade/newrade/commit/e201a90373e98a1efd21f26e977a479e755f5c07))
- **repo:** add missing prebuild commands ([aeebd40](https://github.com/newrade/newrade/commit/aeebd4009243fbbd1ce1473a31dcb26299b41121))
- **repo:** fix scripts ([1468532](https://github.com/newrade/newrade/commit/1468532b791600a47b2b8082ef822148a72d764c))
- **repo:** fixes for refactor and react-ui-app ([91abbbd](https://github.com/newrade/newrade/commit/91abbbd1ee9fd658b3e02c016313292e88f19af0))
- **repo:** fixes for tsconfigs ([3472b8e](https://github.com/newrade/newrade/commit/3472b8edfa5a83b1664dcabbfce30acb72d8daa9))
- **repo:** remove postinstall command for packages ([7e8bd73](https://github.com/newrade/newrade/commit/7e8bd73bcec5877233de0770becf757d8cb7787a))
- **repo:** rework .gitignore and eslint config files ([f8f584e](https://github.com/newrade/newrade/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))
- **repo:** wip ([68d9f77](https://github.com/newrade/newrade/commit/68d9f77225d5b7eae54f195f34a206f8b9f0e3ac))
- **typescript:** remove typeRoots which is almost a deprecated feature ([edfab31](https://github.com/newrade/newrade/commit/edfab31f34f518881c56fea74aa83331957ddcaf))
- **typescript:** revert to v3 since eslint and prettier are not ready ([08bc333](https://github.com/newrade/newrade/commit/08bc333bc7044153c50f5cbdb077f2861a74d981))
- **wip:** wip ([3319697](https://github.com/newrade/newrade/commit/3319697e314d643fb809a790b2d9c3b1bf1c749b))

### Features

- **core-\*:** refactor core-design-system and core-react-ui ([106720e](https://github.com/newrade/newrade/commit/106720e4214f6491beac76c23977f5d52c1cd058))
- **core-cli:** add oclif ([e3b89a1](https://github.com/newrade/newrade/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-design-system:** reorg and removing any css props from design-system ([b353e4f](https://github.com/newrade/newrade/commit/b353e4f47107dc3b1e4ff363b600033655acd044))
- **core-design-system:** working on css implementation ([3c6666c](https://github.com/newrade/newrade/commit/3c6666c2bd1c4ca239ad5ec38ebb6e78fffab43e))
- **core-gatsby-config:** add shared config ([7d49add](https://github.com/newrade/newrade/commit/7d49adde7eb14b678c123933abdc12e7a76691e2))
- **core-gatsby-config:** init package ([0bd1e36](https://github.com/newrade/newrade/commit/0bd1e368093067c80011e8f9d9e0ecd295dc2766))
- **core-gatsby-starter:** minimal markdown setup with RichText ([57fbac8](https://github.com/newrade/newrade/commit/57fbac8b2838945fdd5a9abca09348a0605df1ba))
- **core-react-ui:** add seo models and components ([4861d62](https://github.com/newrade/newrade/commit/4861d626c4c25b96f1d3f22bf5a958d3417d2ad9))
- **core-webpack-config:** refactor config to be used in gatsby packages ([3a9f06f](https://github.com/newrade/newrade/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
- **mir-website:** add gatsby config for seo ([5a68bce](https://github.com/newrade/newrade/commit/5a68bce2df6ac71f533850e91f5686e3b7d352ec))

## [1.3.2](https://github.com/newrade/newrade/compare/core-gatsby-config@1.3.1...core-gatsby-config@1.3.2) (2020-09-28)

**Note:** Version bump only for package core-gatsby-config

## [1.3.1](https://github.com/newrade/newrade/compare/core-gatsby-config@1.3.0...core-gatsby-config@1.3.1) (2020-09-17)

**Note:** Version bump only for package core-gatsby-config

# [1.3.0](https://github.com/newrade/newrade/compare/core-gatsby-config@1.2.1...core-gatsby-config@1.3.0) (2020-09-16)

### Bug Fixes

- **mir-website:** remove yarn clean before each yarn build ([e201a90](https://github.com/newrade/newrade/commit/e201a90373e98a1efd21f26e977a479e755f5c07))
- **repo:** rework .gitignore and eslint config files ([f8f584e](https://github.com/newrade/newrade/commit/f8f584e5fbdcfa87e79a2b3d53780e40b51ea8c0))

### Features

- **core-react-ui:** add seo models and components ([4861d62](https://github.com/newrade/newrade/commit/4861d626c4c25b96f1d3f22bf5a958d3417d2ad9))
- **mir-website:** add gatsby config for seo ([5a68bce](https://github.com/newrade/newrade/commit/5a68bce2df6ac71f533850e91f5686e3b7d352ec))

## [1.2.1](https://github.com/newrade/newrade/compare/core-gatsby-config@1.2.0...core-gatsby-config@1.2.1) (2020-09-02)

### Bug Fixes

- **mir-website:** fix obscure bug with treat, remove double usage of useStyle() ([59b043a](https://github.com/newrade/newrade/commit/59b043a8163318a32ea28c5b280d446ab7d291ab))
- **repo:** add missing prebuild commands ([aeebd40](https://github.com/newrade/newrade/commit/aeebd4009243fbbd1ce1473a31dcb26299b41121))

# 1.2.0 (2020-08-24)

### Bug Fixes

- **gatsby:** use shared config for gatsby ([0c29387](https://github.com/newrade/newrade/commit/0c29387167b20f890241e92297939276dd64ba43))
- **mir-website:** fix some gatsby codegen config ([c8f6746](https://github.com/newrade/newrade/commit/c8f674603443a17a809a37da125c940ddfa00d24))
- **mir-website:** fix tsconfig ([a8ea2fb](https://github.com/newrade/newrade/commit/a8ea2fb6e62054df36cdf320651eefa5743e7380))

### Features

- **core-cli:** add oclif ([e3b89a1](https://github.com/newrade/newrade/commit/e3b89a1e19e6f1db94492983bc50f83f1f17681f))
- **core-gatsby-config:** add shared config ([7d49add](https://github.com/newrade/newrade/commit/7d49adde7eb14b678c123933abdc12e7a76691e2))
- **core-gatsby-config:** init package ([0bd1e36](https://github.com/newrade/newrade/commit/0bd1e368093067c80011e8f9d9e0ecd295dc2766))
- **core-webpack-config:** refactor config to be used in gatsby packages ([3a9f06f](https://github.com/newrade/newrade/commit/3a9f06fa246ab8b5b2b595295f02aaac5b2da86e))
