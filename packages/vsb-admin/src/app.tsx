import { Button, Center, Heading, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './app.treat';
import './fonts';

export function App() {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Center>
      <Stack className={styles.wrapper}>
        <Heading>Core React App !</Heading>
        <Paragraph>Core React App</Paragraph>
        <Button>{cssTheme.name}</Button>
      </Stack>
    </Center>
  );
}
