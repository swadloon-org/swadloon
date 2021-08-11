/// <reference types="@newrade/core-types/lib/svg" />

import { LABEL_SIZE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
/**
 * Built in icons
 */
import PlusIcon from '../assets/add-outline.svg';
import MinusIcon from '../assets/remove-outline.svg';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';
import { Label } from './label';
import * as stylesRef from './summary.treat';

type Props = PrimitiveProps &
  HTMLAttributes<HTMLHeadingElement> & {
    mode?: 'swap' | 'animate';
    iconType?: 'caret' | 'angle';
    iconOpened?: React.ReactNode;
    iconClosed?: React.ReactNode;
  };

/**
 * <summary> The HTML Disclosure Summary element (<summary>) element
 * specifies a summary, caption, or legend for a <details> element's disclosure box.
 * @see https://devdocs.io/html/element/summary
 */
export const Summary: React.FC<Props> = React.memo(
  ({
    id,
    style,
    className,
    mode = 'swap',
    iconType,
    iconOpened,
    iconClosed,
    children,
    ...props
  }) => {
    const { styles } = useStyles(stylesRef);

    const type: keyof React.ReactHTML = 'summary';
    const classNames = getMergedClassname([
      className,
      styles.wrapper,
      mode === 'animate' ? styles.animate : '',
    ]);
    const iconOpenedClassNames = getMergedClassname([styles.icon, styles.iconOpened]);
    const iconClosedClassNames = getMergedClassname([styles.icon, styles.iconClosed]);
    const IconOpened = iconOpened ? iconOpened : MinusIcon;
    const IconClosed = iconClosed ? iconClosed : PlusIcon;

    return React.createElement(
      type,
      {
        id,
        style: {
          ...style,
        },
        className: classNames,
        ...props,
      },
      <Label variant={LABEL_SIZE.medium}>
        {children}
        <IconOpened className={iconOpenedClassNames} />
        <IconClosed className={iconClosedClassNames} />
      </Label>
    );
  }
);
