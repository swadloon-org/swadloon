import { LABEL } from '@newrade/core-design-system-old';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Illustration } from '../ui/illustration';
import { Label } from '../ui/label';
import * as styleRefs from './info-section-check.treat';

type OwnProps = {
  illustration: string;
  size: 'small' | 'medium' | 'large';
};

export const CheckLabel: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconCheck}>
        <Illustration name={`illustrations/${props.illustration}`}></Illustration>
      </div>
      <Label className={`${styles.label}`} variant={LABEL.mediumRegular}>
        {props.children}
      </Label>
    </div>
  );
};
