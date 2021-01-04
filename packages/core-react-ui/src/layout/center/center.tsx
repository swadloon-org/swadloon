import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './center.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidth: string;
  }>;

export const Center: React.FC<OwnProps> = ({ as, className, style, maxWidth, ...props } = {}) => {
  const { styles } = useStyles(styleRefs);

  // TODO: enable as
  // return React.createElement(as, )

  return (
    <div
      style={{
        ...style,
      }}
      className={`${className || ''} ${styles.wrapper}`}
    >
      {/* padding only div */}
      <div></div>
      {/* centered content */}
      <div
        style={{
          // @ts-ignore
          '--max-content-width': maxWidth,
        }}
        className={styles.content}
      >
        {props.children}
      </div>
      {/* padding only div */}
      <div></div>
    </div>
  );
};
