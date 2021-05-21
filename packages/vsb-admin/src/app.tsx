import { Button, Center, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './app.treat';
import './fonts';

export function App() {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading>Core React App !!</Heading>
        <Button>Refresh</Button>
      </Stack>
    </Center>
  );
}
