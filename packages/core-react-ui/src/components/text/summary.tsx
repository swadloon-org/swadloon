/**
 * Built in icons
 */
import PlusIcon from '!!file-loader!../../assets/add-outline.svg';
import MinusIcon from '!!file-loader!../../assets/remove-outline.svg';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { LABEL_SIZE } from '../../../../core-design-system/src';
import { CommonComponentProps } from '../../props/component-common.props';
import { getMergedClassname } from '../../utilities/component.utilities';
import { Label } from './label';
import * as stylesRef from './summary.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    mode?: 'swap' | 'animate';
    iconType?: 'caret' | 'angle';
    iconOpenedPath?: string;
    iconClosedPath?: string;
  };

/**
 * <summary> The HTML Disclosure Summary element (<summary>) element
 * specifies a summary, caption, or legend for a <details> element's disclosure box.
 * @see https://devdocs.io/html/element/summary
 */
export const Summary: React.FC<Props> = React.memo(
  ({ id, style, className, mode = 'swap', iconType, iconOpenedPath, iconClosedPath, children, ...props }) => {
    const { styles } = useStyles(stylesRef);

    const type: keyof React.ReactHTML = 'summary';
    const classNames = getMergedClassname([className, styles.wrapper, mode === 'animate' ? styles.animate : '']);
    const renderedIconOpenPath = iconOpenedPath ? iconOpenedPath : MinusIcon;
    const renderedIconClosedPath = iconClosedPath ? iconClosedPath : PlusIcon;

    return React.createElement(
      type,
      {
        id,
        style: {
          ...style,
          '--icon-opened': `url(${renderedIconOpenPath})`, // inject the css var to set the icon
          '--icon-closed': `url(${renderedIconClosedPath})`, // inject the css var to set the icon
        },
        className: classNames,
        ...props,
      },
      <Label variant={LABEL_SIZE.medium}>{children}</Label>
    );
  }
);
