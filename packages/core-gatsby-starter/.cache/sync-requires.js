const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/elliot/Documents/nrRepo/newrade/packages/core-gatsby-starter/.cache/dev-404-page.js"))),
  "component---src-pages-blog-post-tsx": hot(preferDefault(require("/Users/elliot/Documents/nrRepo/newrade/packages/core-gatsby-starter/src/pages/blog-post.tsx"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/elliot/Documents/nrRepo/newrade/packages/core-gatsby-starter/src/pages/index.mdx")))
}

