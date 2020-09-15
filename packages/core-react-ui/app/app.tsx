import React from 'react';
import { Button } from '../src/components/button/button';

import * as styleRefs from './app.treat';
import { useStyles } from 'react-treat';
import { ButtonSize } from 'core-design-system';

export function App() {
  const styles = useStyles(styleRefs);

  return (
    <div>
      <Button size={ButtonSize.large}>hey</Button>
      <Button size={ButtonSize.medium}>hey</Button>
      <Button size={ButtonSize.small}>hey</Button>
    </div>
  );
}
