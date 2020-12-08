import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './switcher.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps & Partial<{}>;

export const Switcher: React.FC<OwnProps> = ({ as, className = '', ...props } = {}) => {
  const styles = useStyles(styleRefs);

  return React.createElement(
    as || 'div',
    { className },
    <div className={`${className || ''} ${styles.wrapper}`} style={{}} {...props}>
      {props.children}
    </div>
  );
};
