import { getFormattedAnchorId } from '@newrade/core-react-ui/utilities-iso';

/**
 * @see https://webpack.js.org/guides/dependency-management/#require-context
 */
interface NodeRequire extends NodeJS.Require {
  /**
   * A context module exports a (require) function that takes one argument: the request.
   */
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
    mode: 'sync' | 'lazy'
  ) => RequireFunction;
}

type RequireMode = 'sync' | 'lazy';

interface RequireFunction<TMode extends RequireMode = 'sync'> extends Function {
  (id: string): TMode extends 'lazy' ? Promise<object> : any;
  /**
   * resolve is a function and returns the module id of the parsed request.
   */
  resolve: () => string;
  /**
   * keys is a function that returns an array of all possible requests that the context module can handle.
   */
  keys: () => string[];
  /**
   * id is the module id of the context module. This may be useful for module.hot.accept
   */
  id: string;
}

declare var require: NodeRequire;

function importComponentsLazy(
  requireFn: RequireFunction
): { moduleId: string; requireFn: RequireFunction<'lazy'>; slug: string }[] {
  return requireFn.keys().map((moduleId) => {
    return {
      moduleId,
      requireFn,
      slug: getFormattedAnchorId(
        moduleId
          .replaceAll(/^\./g, '')
          .replaceAll(/\.tsx$/g, '')
          .replaceAll(/\./g, '-')
      ),
    };
  });
}

export const lazyComponentImports = importComponentsLazy(
  require.context(
    '@newrade/core-design-system-docs/src/code/',
    true,
    /(titles|headings|labels|paragraphs-?|list|links|buttons|icon-sizes)(.*)\.code\.tsx$/i,
    'lazy'
  )
);
