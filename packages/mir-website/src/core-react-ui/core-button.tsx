import { ButtonProps } from 'core-design-system';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './core-button.treat';

type OwnProps = ButtonProps & ButtonHTMLAttributes<any> & { as?: 'button' | 'a' };

export const Button: React.FC<OwnProps> = ({ className, variant, size, state, icon, ...props }) => {
  const styles = useStyles(styleRefs);

  const sizeClass = `${size ? styles[size] : styles.medium}`;
  const variantClass = `${variant ? styles[variant] : ''}`;
  const iconClass = `${icon ? styles[icon] : ''}`;
  const stateClass = `${size ? styles[size] : ''}`;
  const propsClassnames = `${sizeClass} ${variantClass} ${iconClass} ${stateClass}`;

  // TODO should we use reakti as a base https://reakit.io/docs/button/?

  return (
    <button className={`${className || ''} ${propsClassnames}`} {...props}>
      {props.children}
    </button>
  );
};

() => {
  return (
    <Button disabled={true} onClick={() => {}}>
      hello
    </Button>
  );
};
