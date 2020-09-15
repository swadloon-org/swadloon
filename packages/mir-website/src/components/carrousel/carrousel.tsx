import React, { HTMLAttributes, useState } from 'react';
import { useStyles } from 'react-treat';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import * as styleRefs from './carrousel.treat';

enum MOTION_STATE {
  ENTER = 'ENTER',
  CENTER = 'CENTER',
  EXIT = 'EXIT',
}

const variants = {
  [MOTION_STATE.ENTER]: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  [MOTION_STATE.CENTER]: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  [MOTION_STATE.EXIT]: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

/**
 *
 **/

interface OwnProps {
  indexChildren: number;
}

export const ImageFrame: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const arrayImg = [
    'https://media.graphcms.com/resize=fit:max,width:900/5iKlzUXmQNSdwU2KZ1EL',
    'https://media.graphcms.com/resize=fit:max,width:900/5iKlzUXmQNSdwU2KZ1EL',
    'https://media.graphcms.com/resize=fit:max,width:900/QfmLEvNQSGkypJ7xmhgC',
  ];

  const arrayIndex = wrap(0, props.indexChildren, page);
  console.log(arrayIndex);

  return (
    <div className={`${props.className || ''} ${styles.wrapper}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          style={{ backgroundImage: `url(${arrayImg[arrayIndex]})` }}
          key={page}
          custom={direction}
          variants={variants}
          initial={MOTION_STATE.ENTER}
          animate={MOTION_STATE.CENTER}
          exit={MOTION_STATE.EXIT}
          transition={{
            x: { type: 'keyframes', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div>
        <div
          style={{
            position: 'absolute',
            left: '440px',
            backgroundColor: 'red',
            color: 'white',
            top: '0',
            width: '30px',
            height: '30px',
            fontSize: '30px',
            textAlign: 'center',
          }}
          onClick={() => setPage([0, 0])}
        >
          1
        </div>
        <div
          style={{
            position: 'absolute',
            left: '490px',
            backgroundColor: 'red',
            color: 'white',
            top: '0',
            width: '30px',
            height: '30px',
            fontSize: '30px',
            textAlign: 'center',
          }}
          onClick={() => setPage([1, 0])}
        >
          2
        </div>
        <div
          style={{
            position: 'absolute',
            left: '540px',
            backgroundColor: 'red',
            color: 'white',
            top: '0',
            width: '30px',
            height: '30px',
            fontSize: '30px',
            textAlign: 'center',
          }}
          onClick={() => setPage([2, 0])}
        >
          3
        </div>
      </div>
    </div>
  );
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
