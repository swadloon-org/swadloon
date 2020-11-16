import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './box.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx?: string;
    padding?: string;
    gap?: string;
  }>;

export const Box: React.FC<OwnProps> = (
  { as, className, padding, gap, maxWidthPx, ...props } = { padding: '20px', gap: '0' }
) => {
  const styles = useStyles(styleRefs);

  return (
    <div
      className={`${className || ''} ${styles.wrapper}`}
      style={{ gap: gap, padding: padding, maxWidth: maxWidthPx }}
      {...props}
    >
      {props.children}
    </div>
  );
};
