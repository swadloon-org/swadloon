import { LABEL } from 'core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Illustration } from './illustration';
import * as styleRefs from './info-section-check.treat';
import { Label } from './label';

type OwnProps = {
  illustration: string;
  size: 'small' | 'medium' | 'large';
};

export const CheckLabel: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconCheck}>
        <Illustration name={`Illustration/${props.illustration}`}></Illustration>
      </div>
      <Label className={`${styles.label}`} variant={LABEL.mediumRegular}>
        {props.children}
      </Label>
    </div>
  );
};
