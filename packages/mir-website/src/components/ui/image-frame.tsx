import React, { HTMLAttributes, useState } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './image-frame.treat';
import LazyLoad from 'react-lazyload';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { ICON_SIZE } from '@newrade/core-design-system-old';
import { Icon } from '../ui/icon';
import { Illustration } from './illustration';
import GatsbyImage, { FixedObject, FluidObject } from 'gatsby-image';
import { FadeIn } from '../animation/fade-in';

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

interface OwnProps {
  type?: 'static' | 'caroussel';
  fluid?: FluidObject;
  fixed?: FixedObject;
  url?: string;
  variant: 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';
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
    'https://media.graphcms.com/resize=fit:max,width:900/QfmLEvNQSGkypJ7xmhgC',
  ];

  const imageIndex = wrap(0, arrayImg.length, page);

  return (
    <div className={`${props?.className || ''} ${styles.wrapper}`}>
      <Illustration
        name={'Illustration/IllustrationSquare'}
        className={`${styles.backgroundIllustration} ${getVariantStyle(props?.variant)}`}
        preserveAspectRatio="none"
        width={200}
        height={200}
      />
      {getTypeSwitcher(props?.type)}
    </div>
  );

  function getTypeSwitcher(value: any) {
    switch (value) {
      case 'static': {
        return props?.fluid ? (
          <div className={`${styles.content} ${styles[props?.variant]}`}>
            <GatsbyImage className={`${styles.image}`} fluid={props?.fluid}></GatsbyImage>
          </div>
        ) : (
          <LazyLoad>
            <div className={`${styles.content} ${styles[props?.variant]}`}>
              <div className={`${styles.image}`} style={{ backgroundImage: `url(${props?.url})` }} />
            </div>
          </LazyLoad>
        );
      }
      case 'caroussel': {
        return (
          <LazyLoad>
            <div className={`${styles.content} ${styles[props?.variant]}`}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  className={`${styles.image}`}
                  style={{ backgroundImage: `url(${arrayImg[imageIndex]})` }}
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
              <div className={styles.carrouselButton}>
                {arrayImg.map((object, index) => {
                  return (
                    <div key={index} onClick={() => setPage([index, 0])}>
                      <Icon
                        className={styles.iconCarrousel}
                        icon={`${index === imageIndex ? 'IconCircle' : 'IconDot'}`}
                        size={ICON_SIZE.medium}
                      ></Icon>
                    </div>
                  );
                })}
              </div>
            </div>
          </LazyLoad>
        );
      }
      default: {
        return (
          <LazyLoad>
            <div className={`${styles.content} ${styles[props?.variant]}`}>
              <div className={`${styles.image}`} style={{ backgroundImage: `url(${props?.url})` }} />
            </div>
          </LazyLoad>
        );
      }
    }
  }
  function getVariantStyle(value: string) {
    switch (value) {
      case 'bottomRight': {
        return styles.topLeft;
      }
      case 'bottomLeft': {
        return styles.topRight;
      }
      case 'topLeft': {
        return styles.bottomRight;
      }
      case 'topRight': {
        return styles.bottomLeft;
      }
      default: {
        return '';
      }
    }
  }
};
const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
