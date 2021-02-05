import React, { DetailsHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './details.treat';

type Props = CommonComponentProps & DetailsHTMLAttributes<any> & {};

/**
 * <details> The HTML Details Element (<details>) creates a disclosure
 * widget in which information is visible only when the widget is toggled into an "open" state.
 * @see https://devdocs.io/html/element/details
 */
export const Details: React.FC<Props> = React.memo(({ id, style, className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type: keyof React.ReactHTML = 'details';
  const classNames = getMergedClassname([className, styles.wrapper]);

  return React.createElement(type, {
    id,
    style,
    className: classNames,
    ...props,
  });
});
