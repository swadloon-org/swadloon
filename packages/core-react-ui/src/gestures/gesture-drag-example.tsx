import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import { useStyles } from 'react-treat';
import { useDrag } from 'react-use-gesture';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as styleRefs from './gesture-drag-example.treat';

type Props = PrimitiveProps;

export const GestureDragExample: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0 });
  });

  // Bind it to a component
  return (
    <div className={styles.wrapper}>
      <animated.div {...bind()} style={{ x, y }} className={styles.box} />
    </div>
  );
};
