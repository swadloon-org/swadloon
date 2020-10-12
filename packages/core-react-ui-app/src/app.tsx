import React from 'react';

import * as styleRefs from './app.treat';
import { useStyles } from 'react-treat';
import { ColorSwatch } from './components/color-swatch';
import { animations } from '@newrade/core-react-ui';

export function App() {
  const styles = useStyles(styleRefs);
  // const theme = useTheme();

  return (
    <div>
      {JSON.stringify(animations)}
      <ColorSwatch
        color={{
          h: 33,
          s: 100,
          l: 50,
          a: 80,
        }}
      ></ColorSwatch>
      {/* <GraphQLVoyagerPage /> */}
    </div>
  );
}
