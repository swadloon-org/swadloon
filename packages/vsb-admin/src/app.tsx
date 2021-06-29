import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './app.treat';
import './fonts';
import { Layout } from './layouts/layout';

export function App() {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  return <Layout></Layout>;
}
