import React from 'react';
import { Button } from 'core-react-ui';

import * as styleRefs from './app.treat';
import { useStyles } from 'react-treat';

export function App() {
  const styles = useStyles(styleRefs);

  return (
    <div>
      <Button>hey</Button>
    </div>
  );
}
