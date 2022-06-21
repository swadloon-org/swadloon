import React, { useState } from 'react';
import { useWheel } from 'react-use-gesture';

// @ts-ignore
import { Lethargy } from 'lethargy';

import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './gesture-scroll-wheel-example.css.js';

type Props = PrimitiveProps;

export const GestureScrollWheelExample: React.FC<Props> = (props) => {
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
      {/* <div className={styles.wrapper}>
          <animated.div
            {...bind()}
            style={{ transform: `translateY(${-index * 82.5} vh)` }}
            className={styles.box}
            {...boxs.map((i) => <div key={i}>{i}</div>)}
          />
        </div> */}
      <div></div>
    </>
  );
};
