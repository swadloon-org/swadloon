import { Center, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const DesignSystemFooter: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <footer style={{ width: `100%`, height: 300 }}>
      <Center>footer</Center>
    </footer>
  );
};
