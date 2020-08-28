import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

// import styles from './button.module.scss';
import * as styleRefs from './tags.treat';

import { Label } from './label';

import OvalSquare from './illustrations/Illustration/OvalSquare.svg';
import { Illustration } from './illustration';

type OwnProps = {
  icon?: string;
};

export const Tags: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Illustration
          className={`${styles.illustration}`}
          name={`Illustration/OvalSquare`}
          width={42}
          height={42}
        ></Illustration>
        <Label className={`${styles.number}`} size="smallUppercase">
          01
        </Label>
      </div>
      <div className={styles.content}>
        <Label className={`${styles.label}`} size="small">
          {props.children}
        </Label>
      </div>
    </div>
  );
};
