import React from 'react';

import * as styleRefs from './app.treat';
import { useStyles } from 'react-treat';
import { ButtonSize } from 'core-design-system-old';

export function App() {
  const styles = useStyles(styleRefs);

  return <div>hello</div>;
}
