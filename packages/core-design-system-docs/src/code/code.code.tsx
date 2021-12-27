import React, { Suspense } from 'react';

import { Cluster, useTreatTheme } from '@newrade/core-react-ui';
import { CodeBlockLazy } from '@newrade/core-react-ui/code';

type Props = {};

export const CodeHighlightExamples: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Cluster justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x1]} wrap={true}>
        <Suspense fallback={''}>
          <CodeBlockLazy filename={'example file name.tsx'}>{'hello'}</CodeBlockLazy>
        </Suspense>
      </Cluster>
    </>
  );
};
