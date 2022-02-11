import React, { Suspense } from 'react';
import { useParams } from 'react-router';

import { Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { getFormattedAnchorId } from '@newrade/core-react-ui/utilities';

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
    /(titles|headings|labels|paragraphs-?|links|buttons)(.*)\.code\.tsx$/i,
    'lazy'
  )
);

type Props = {};

export const Component: React.FC<Props> = function Layout(props) {
  const params = useParams<'componentSlug'>();

  const LazyRenderedComponent = React.lazy(() => {
    const selectedModule = lazyComponentImports.find(({ slug }) => slug === params.componentSlug);

    if (!selectedModule?.requireFn) {
      return Promise.resolve({
        default: () => <div>Could not load component ({selectedModule})</div>,
      });
    }

    const loadedModule = selectedModule
      .requireFn(selectedModule.moduleId)
      .then((moduleResolved) => {
        const requireProps = Object.getOwnPropertyNames(moduleResolved).filter(
          (prop) => prop !== '__esModule'
        );
        if (requireProps.length) {
          // @ts-ignore
          if (typeof moduleResolved[requireProps[0]] === 'function') {
            // @ts-ignore
            const component = moduleResolved[requireProps[0]] as React.FC;
            return { default: component };
          }
        }

        throw new Error('');
      })
      .catch((error) => {
        return Promise.resolve({
          default: () => <div>Could not load component ({selectedModule})</div>,
        });
      });

    return loadedModule;
  });

  return (
    <div>
      <Stack gap={[sizeVars.x2]}>
        <Suspense fallback={<div>loading...</div>}>
          <LazyRenderedComponent />
        </Suspense>
      </Stack>
    </div>
  );
};
