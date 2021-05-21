import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import { useStyles } from 'react-treat';
import { useScroll } from 'react-use-gesture';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './gesture-scroll-example.treat';

type Props = CommonComponentProps;

export const GestureScrollExample: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const [{ width }, api] = useSpring(() => ({ width: '0%' }));
  const height = document.documentElement.scrollHeight;

  // Set the drag hook and define component movement based on gesture data
  const bind = useScroll(({ xy: [, y] }) => {
    api.start({ width: (y / height) * 100 + '%' });
  });

  // Bind it to a component
  return (
    <div className={styles.wrapper}>
      <animated.div {...bind()} style={{ width }} className={styles.box} />
    </div>
  );
};
