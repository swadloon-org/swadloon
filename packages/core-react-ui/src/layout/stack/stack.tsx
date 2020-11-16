import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as styleRefs from './stack.treat';

type OwnProps = CommonComponentProps &
  Partial<{
    padding: string;
    gap: string;
  }>;

export const Stack: React.FC<OwnProps> = (
  { as, className, padding, gap, ...props } = { padding: '20px', gap: '0' }
) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${className || ''} ${styles.wrapper}`} style={{ gap: gap, padding }} {...props}>
      {props.children}
    </div>
  );
};
