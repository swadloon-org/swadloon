import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router';

import { Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

const LazyButtonsCode = lazy(() =>
  import('@newrade/core-design-system-docs/src/code/buttons.code').then((module) => ({
    default: module.Buttons,
  }))
);

type Props = {};

export const ComponentLazy: React.FC<Props> = function Layout(props) {
  const params = useParams<'componentSlug'>();

  return (
    <div>
      <Stack gap={[sizeVars.x2]}>
        <Suspense fallback={<div>loading...</div>}>
          <LazyButtonsCode />
        </Suspense>
      </Stack>
    </div>
  );
};
