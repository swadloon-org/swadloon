import { animated } from '@react-spring/web';
// @ts-ignore
import { Lethargy } from 'lethargy';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { useWheel } from 'react-use-gesture';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './gesture-scroll-wheel-example.treat';

type Props = CommonComponentProps;

export const GestureScrollWheelExample: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const lethargy = new Lethargy();
  const boxs = [0, 1, 2, 3, 4, 5];
  const clamp = (value: number, min: number, max: number) => Math.max(Math.min(max, value), min);
  const [scrolling, setScrolling] = useState('rested');
  const [index, setIndex] = useState(0);

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    if (!last) {
      const s = lethargy.check(event);
      if (s) {
        setScrolling(`lethargy says scroll ${s < 0 ? 'down' : 'up'}`);
        if (!wait) {
          setIndex((i) => clamp(i - s, 0, boxs.length - 1));
          return true;
        }
      } else return false;
    } else {
      setScrolling('rested');
      return false;
    }
  });

  // Bind it to a component
  return (
    <>
      <div className={styles.wrapper}>
        <animated.div
          {...bind()}
          style={{ transform: `translateY(${-index * 82.5} vh)` }}
          className={styles.box}
          {...boxs.map((i) => <div key={i}>{i}</div>)}
        />
      </div>
    </>
  );
};
