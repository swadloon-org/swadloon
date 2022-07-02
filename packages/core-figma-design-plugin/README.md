# Swadloon Figma Design Plugin ➿

**Automatically sync your Swadloon design system's styles to Figma.**

🅰 &nbsp; Validate used fonts against available fonts in Figma.

🔡 &nbsp; Create and update text styles.

🎨 &nbsp; Create and update colors styles.

---

**Install the plugin here: (TODO)**

## Development

To build the plugin in watch mode:

```bash
yarn start
```

To build the plugin once (e.g. for publishing):

```bash
yarn build
```

### Client Env Variables

Currently, you have to set a minimal `.env` file to develop locally:

```dotenv
#
# NodeJS
#
NODE_ENV=development
#
# Debugging
#
DEBUG=nr*
#
# Application
#
APP_ENV=local
```

## Resources

- Plugin Docs: https://www.figma.com/plugin-docs/intro/
- Plugin API: https://www.figma.com/plugin-docs/api/api-reference/
- Publishing: https://www.figma.com/plugin-docs/publishing/
