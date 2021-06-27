import { ButtonProps } from '@newrade/core-design-system-old';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './button.treat';

type OwnProps = ButtonProps & ButtonHTMLAttributes<any> & { as?: 'button' | 'a' };

export const Button: React.FC<OwnProps> = ({ className, variant, size, state, icon, ...props }) => {
  const styles = useStyles(styleRefs) as any;

  const sizeClass = `${size ? styles[size] : styles.medium}`;
  const variantClass = `${variant ? styles[variant] : ''}`;
  const iconClass = `${icon ? styles[icon] : ''}`;
  const stateClass = `${size ? styles[size] : ''}`;
  const propsClassnames = `${sizeClass} ${variantClass} ${iconClass} ${stateClass}`;

  return (
    <button className={`${className || ''} ${propsClassnames}`} {...props}>
      {props.children}
    </button>
  );
};

// () => {
//   return (
//     <Button disabled={true} onClick={() => {}}>
//       hello
//     </Button>
//   );
// };
