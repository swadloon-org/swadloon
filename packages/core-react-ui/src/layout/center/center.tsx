import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './center.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidth: string;
    marginVerticalTop?: number | 'auto';
    marginVerticalBottom?: number | 'auto';
    marginHorizontal?: number | 'auto';
  }>;

export const Center: React.FC<OwnProps> = ({
  as,
  className = '',
  style = {},
  marginVerticalTop = '',
  marginVerticalBottom = '',
  maxWidth = '',
  marginHorizontal = 'auto',
  ...props
} = {}) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div
      style={{
        ...style,
        marginTop: marginVerticalTop,
        marginBottom: marginVerticalBottom,
        marginRight: marginHorizontal,
        marginLeft: marginHorizontal,
      }}
      className={`${className || ''} ${styles.wrapper}`}
    >
      {/* padding */}
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
      {/* padding */}
      <div></div>
    </div>
  );
};
