declare module '@mdx-js/react' {
  const value: any;
  const MDXProvider: any;
  const MDXContext: any;
  const createElement: any;
  const useMDXComponents: any;
  const withMDXComponents: any;
  export default value;
  export { MDXContext, MDXProvider, createElement as mdx, useMDXComponents, withMDXComponents };
}

declare module '*.mdx' {
  const value: any;
  export default value;
}

declare module '*.md' {
  const value: any;
  export default value;
}
