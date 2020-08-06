import React from 'react';
import styles from './button.module.scss';
import { Label } from './label';

import CornerTopLeft from '../illustrations/Illustration/CornerTopLeft.svg';
import CornerBottomRight from '../illustrations/Illustration/CornerBottomRight.svg';
import { Illustration } from './illustration';

interface ThisProps {
  type: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  variant: 'icon' | 'text';
  icon?: string;
  variantStyle: 'default' | 'reversed';
}

export const Button: React.FC<ThisProps> = (props) => {
  return (
    <button
      type="button"
      className={`${styles[props.type]} ${styles[props.size]} ${styles[props.variant]} ${styles[props.variantStyle]}`}
    >
      {props.type === 'primary' ? (
        <>
          <CornerTopLeft className={styles.cornerTopLeft} preserveAspectRatio="xMinYMin meet" />
          <CornerBottomRight className={styles.cornerBottomRight} preserveAspectRatio="xMinYMax meet" />
        </>
      ) : null}

      {props.variant === 'icon' && props.icon ? (
        <Illustration className={`${styles.illustration}`} name={`Icon/${props.icon}`} width={42} height={42} />
      ) : (
        <Label variant="bold" size="small">
          {props.children}
        </Label>
      )}
    </button>
  );
};
