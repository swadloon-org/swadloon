import React, { Suspense } from 'react';
import { useParams } from 'react-router';

import { Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import type { lazyComponentImports } from './context-require';

type Props = {
  lazyComponentImports: typeof lazyComponentImports;
};

export const LazyComponentLoader: React.FC<Props> = function Layout({ lazyComponentImports }) {
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
        console.error(error);
        return Promise.resolve({
          default: () => <div>Could not load component ({selectedModule.moduleId})</div>,
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
