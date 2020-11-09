import { LABEL } from '@newrade/core-design-system-old';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import CornerBottomRight from '../../illustrations/Illustration/IllustrationCornerBottomRight.svg';
import CornerTopLeft from '../../illustrations/Illustration/IllustrationCornerTopLeft.svg';
import * as styleRefs from './button.treat';
import { Illustration } from './illustration';
import { Label } from './label';

type OwnProps = {
  variantType:
    | 'primaryDefault'
    | 'primaryReversed'
    | 'secondaryDefault'
    | 'secondaryReversed'
    | 'tertiaryDefault'
    | 'tertiaryReversed';
  size: 'small' | 'medium' | 'large' | 'social';
  variant: 'icon' | 'text';
  icon?: string;
} & ButtonHTMLAttributes<any>;

export const Button: React.FC<OwnProps> = ({ className, variantType, size, variant, icon, ...props }) => {
  const styles = useStyles(styleRefs);

  return (
    <button
      type={props.type ? props.type : 'button'}
      className={`${className || ''}  ${styles[variantType]} ${styles[size]} ${styles[variant]} ${styles.base}`}
      {...props}
    >
      {variantType === 'primaryDefault' || variantType === 'primaryReversed' ? (
        <>
          <CornerTopLeft className={`${styles.cornerTopLeft} ${styles.corner}`} preserveAspectRatio="xMinYMin meet" />
          <CornerBottomRight
            className={`${styles.cornerBottomRight} ${styles.corner}`}
            preserveAspectRatio="xMinYMax meet"
          />
        </>
      ) : null}

      {variant === 'icon' && icon ? (
        <Illustration className={`${styles.illustration}`} name={`Icon/${icon}`} width={42} height={42} />
      ) : (
        <Label as="div" className={`${styles.label}`} variant={getLabelSize(size)}>
          {props.children}
        </Label>
      )}
    </button>
  );

  function getLabelSize(size: OwnProps['size']): LABEL {
    switch (size) {
      case 'large': {
        return LABEL.mediumBold;
      }
      case 'medium': {
        return LABEL.smallBold;
      }
      case 'small': {
        return LABEL.smallBold;
      }
    }
  }
};
