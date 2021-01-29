import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './center.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';

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
    const type = as ? as : 'div';
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([className || '', styles.wrapper]);

    return React.createElement(
      type,
      {
        ref,
        style: {
          ...style,
        },
        className: classNames,
        ...props,
      },
      <>
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
      </>
    );
  }
);
