import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './center.treat';
import { CommonComponentProps } from '../props/component-common.props';

type OwnProps = CommonComponentProps &
  Partial<{
    /**
     * Force the maxWidth of the content
     */
    maxWidth: string;
    /**
     * className applied to the centered content
     */
    contentClassName: string;
  }>;

export const Center = React.forwardRef<any, OwnProps>(
  ({ as, className, contentClassName, style, maxWidth, ...props } = {}, ref) => {
    const { styles } = useStyles(styleRefs);

    // TODO: enable as
    // return React.createElement(as, )

    return (
      <div
        ref={ref}
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
          className={`${styles.content} ${contentClassName || ''}`}
        >
          {props.children}
        </div>
        {/* padding only div */}
        <div></div>
      </div>
    );
  }
);
