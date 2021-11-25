declare module '@mdx-js/react' {
  const value: any;
  const MDXProvider: any;
  const MDXContext: any;
  const createElement: any;
  const useMDXComponents: any;
  const withMDXComponents: any;
  export default value;
  export { createElement as mdx, MDXContext, MDXProvider, useMDXComponents, withMDXComponents };
}

declare module '*.mdx' {
  const value: any;
  export default value;
}

declare module '*.md' {
  const value: any;
  export default value;
}
