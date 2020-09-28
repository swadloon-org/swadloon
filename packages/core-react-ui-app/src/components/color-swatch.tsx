import React from 'react';
import { useStyles } from 'react-treat';
import { Color } from '@newrade/core-design-system';

import * as styleRefs from './color-swatch.treat';
import { getHSLColor } from '../../../core-react-ui/src';

type Props = {
  color: Color;
};

export const ColorSwatch: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <code className={styles.wrapper} style={{ backgroundColor: getHSLColor(props.color) }}>
      <pre>{JSON.stringify(getHSLColor(props.color), null, 2)}</pre>
      <pre>{JSON.stringify(props.color, null, 2)}</pre>
    </code>
  );
};
