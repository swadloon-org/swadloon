import { Color } from '@newrade/core-design-system';
import { getCSSColor } from '@newrade/core-react-ui/lib/utilities';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './color-swatch.treat';

type Props = {
  color: Color;
};

export const ColorSwatch: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <code className={styles.wrapper} style={{ backgroundColor: getCSSColor(props.color) }}>
      <pre>{JSON.stringify(getCSSColor(props.color), null, 2)}</pre>
      <pre>{JSON.stringify(props.color, null, 2)}</pre>
    </code>
  );
};
