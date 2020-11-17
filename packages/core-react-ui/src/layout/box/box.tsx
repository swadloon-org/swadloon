import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './box.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx: string;
    padding: string;
    gap: string;
  }>;

export const Box: React.FC<OwnProps> = ({
  as,
  className = '',
  padding = '10px',
  gap = '',
  maxWidthPx = '100px',
  ...props
} = {}) => {
  const styles = useStyles(styleRefs);

  return React.createElement(
    as || 'div',
    { className },
    <div
      className={`${className || ''} ${styles.wrapper}`}
      style={{ gap: gap, padding: padding, maxWidth: maxWidthPx }}
      {...props}
    >
      {props.children}
    </div>
  );
};
