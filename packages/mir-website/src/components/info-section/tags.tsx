import { LABEL } from '@newrade/core-design-system-old';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Illustration } from '../ui/illustration';
import { Label } from '../ui/label';
import * as styleRefs from './tags.treat';

type OwnProps = {
  numberIndex: string;
};

export const Tags: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Illustration
          className={`${styles.illustration}`}
          name={`illustrations/IllustrationOvalSquare`}
          width={42}
          height={42}
        ></Illustration>
        <Label className={`${styles.number}`} variant={LABEL.smallBoldUppercase}>
          {props.numberIndex}
        </Label>
      </div>
      <div className={styles.content}>
        <Label className={`${styles.label}`} variant={LABEL.smallRegular}>
          {props.children}
        </Label>
      </div>
    </div>
  );
};
