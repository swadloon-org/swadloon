import React from 'react';

import { Placeholder } from '@newrade/core-gatsby-ui/src/docs-components/placeholder';
import { Center, useTreatTheme } from '@newrade/core-react-ui';
type Props = {};

export const LayoutCenter: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Center>
        <Placeholder>Content</Placeholder>
      </Center>
    </>
  );
};
