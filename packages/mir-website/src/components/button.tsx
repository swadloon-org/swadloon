import React from 'react';
import styles from './button.module.scss';
import { Label } from './label';

import CornerTopLeft from '../illustrations/Illustration/CornerTopLeft.svg';
import CornerBottomRight from '../illustrations/Illustration/CornerBottomRight.svg';

interface ThisProps {
  type: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  variant: 'icon' | 'text';
  variantStyle: 'default' | 'reversed';
}

export const Button: React.FC<ThisProps> = (props) => {
  return (
    <button
      type="button"
      className={`${styles[props.type]} ${styles[props.size]} ${styles[props.variant]} ${styles[props.variantStyle]}`}
    >
      <CornerTopLeft className={styles.cornerTopLeft} preserveAspectRatio="xMinYMin meet" />

      <Label variant="bold" size="small">
        {props.children}
      </Label>

      <CornerBottomRight className={styles.cornerBottomRight} preserveAspectRatio="xMinYMax meet" />
    </button>
  );
};
