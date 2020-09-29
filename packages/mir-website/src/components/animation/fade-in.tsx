import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type OwnProps = {
  time: number;
};

export const FadeIn: React.FC<OwnProps> = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      return;
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 10,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: props.time,
          },
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};
