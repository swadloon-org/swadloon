import { Center, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Placeholder } from '../../../core-gatsby-ui/src/docs-components/placeholder';
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
