import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './summary.treat';

type Props = CommonComponentProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Summary',
};

/**
 * <summary> The HTML Disclosure Summary element (<summary>) element
 * specifies a summary, caption, or legend for a <details> element's disclosure box.
 * @see https://devdocs.io/html/element/summary
 */
export const Summary: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type: keyof React.ReactHTML = 'summary';

  return React.createElement(type, {
    className: `${className || ''}  ${styles.wrapper}`,
    ...props,
  });
});
