declare module '@mdx-js/react' {
  const value: any;
  const MDXProvider: any;
  const mdx: any;
  export default value;
  export { MDXProvider, mdx };
}

declare module '*.mdx' {
  const value: any;
  export default value;
}
