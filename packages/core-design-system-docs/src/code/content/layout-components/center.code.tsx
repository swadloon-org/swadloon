import { Center, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Placeholder } from '../../../utils/placeholder';
type Props = {};

export const LayoutCenter: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Center>
        <Placeholder>Content</Placeholder>
      </Center>
    </CodeOutline>
  );
};
