import React from 'react';
import { useScroll } from 'react-use-gesture';

import { animated, useSpring } from '@react-spring/web';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './gesture-scroll-example.css';

type Props = PrimitiveProps;

export const GestureScrollExample: React.FC<Props> = (props) => {
  const [{ width }, api] = useSpring(() => ({ width: '20% ' }));
  //const height = document.documentElement.scrollHeight;
  const height = 100;

  useScroll(({ xy: [, y] }) => api.start({ width: (y / height) * 100 + '% ' }));
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <animated.div style={{ width }} className={styles.boxScrolling} />
      </div>
    </div>
  );
};
