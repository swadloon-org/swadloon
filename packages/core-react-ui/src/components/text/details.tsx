import React, { HTMLAttributes, DetailsHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './details.treat';

type Props = CommonComponentProps & DetailsHTMLAttributes<any> & {};

/**
 * <details> The HTML Details Element (<details>) creates a disclosure
 * widget in which information is visible only when the widget is toggled into an "open" state.
 * @see https://devdocs.io/html/element/details
 */
export const Details: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type: keyof React.ReactHTML = 'details';

  return React.createElement(type, {
    className: `${className || ''} ${styles.wrapper}`,
    ...props,
  });
});
