/**
 * Identifier for source instance name when creating pages
 */
export enum SOURCE_INSTANCE_NAME {
  /** for mdx files located at the root of the monorepository, <root>/docs/ */
  MONO_REPO_DOCS = 'MONO_REPO_DOCS',
  /** mdx doc files related to the design system */
  DESIGN_SYSTEM_DOCS = 'DESIGN_SYSTEM_DOCS',
  /** package's specific docs, located in /src/docs/ */
  DOCS = 'DOCS',
  /** mdx pages located in /src/pages/ */
  MDX_PAGES = 'MDX_PAGES',
}
