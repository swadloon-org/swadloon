import React from 'react';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styles from './center.css';



type AsTypes = 'div' | 'footer' | 'section' | 'nav';

type Props = PrimitiveProps<AsTypes> &
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

export const Center = React.forwardRef<HTMLElement, Props>(
  ({ id, as, AsElement, className, contentClassName, style, maxWidth, ...props }, ref) => {
    const type = as ? as : 'div';

    const classNames = getMergedClassname([className || '', styles.wrapper]);

    return React.createElement(
      type,
      {
        id,
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
