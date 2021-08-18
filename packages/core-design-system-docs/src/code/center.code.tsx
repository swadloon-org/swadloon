import { Placeholder } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder';
import { Center, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
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
