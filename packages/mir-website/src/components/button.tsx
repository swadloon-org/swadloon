import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

// import styles from './button.module.scss';
import * as styleRefs from './button.treat';

import { Label } from './label';

import CornerTopLeft from '../illustrations/Illustration/CornerTopLeft.svg';
import CornerBottomRight from '../illustrations/Illustration/CornerBottomRight.svg';
import { Illustration } from './illustration';

type OwnProps = {
  type:
    | 'primaryDefault'
    | 'primaryReversed'
    | 'secondaryDefault'
    | 'secondaryReversed'
    | 'tertiaryDefault'
    | 'tertiaryReversed';
  size: 'small' | 'medium' | 'large';
  variant: 'icon' | 'text';
  icon?: string;
} & Pick<ButtonHTMLAttributes<any>, 'className'>;

export const Button: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <button
      type="button"
      className={`${props.className || ''} ${styles.base} ${styles[props.type]} ${styles[props.size]} ${
        styles[props.variant]
      }`}
    >
      {props.type === 'primaryDefault' || props.type === 'primaryReversed' ? (
        <>
          <CornerTopLeft className={`${styles.cornerTopLeft} ${styles.corner}`} preserveAspectRatio="xMinYMin meet" />
          <CornerBottomRight
            className={`${styles.cornerBottomRight} ${styles.corner}`}
            preserveAspectRatio="xMinYMax meet"
          />
        </>
      ) : null}

      {props.variant === 'icon' && props.icon ? (
        <Illustration className={`${styles.illustration}`} name={`Icon/${props.icon}`} width={42} height={42} />
      ) : (
        <Label className={`${styles.label}`} size="smallBold">
          {props.children}
        </Label>
      )}
    </button>
  );
};
