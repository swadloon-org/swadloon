/// <reference types="@newrade/core-types/src/svg" />

import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { ICON, LABEL_SIZE } from '@newrade/core-design-system';

import { IconComp } from '../icons/icon';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';

import { Label } from './label';
import * as stylesRef from './summary.treat';

type Props = PrimitiveProps &
  HTMLAttributes<HTMLHeadingElement> & {
    mode?: 'swap' | 'animate';
    iconOpened?: React.ReactNode;
    iconClosed?: React.ReactNode;
  };

/**
 * The HTML Disclosure Summary element
 * specifies a summary, caption, or legend for a <details/> element's disclosure box.
 * @see https://devdocs.io/html/element/summary
 */
export const Summary: React.FC<Props> = React.memo(
  ({ id, style, className, mode = 'swap', iconOpened, iconClosed, children, ...props }) => {
    const { styles } = useStyles(stylesRef);

    const type: keyof React.ReactHTML = 'summary';
    const classNames = getMergedClassname([
      className,
      styles.wrapper,
      mode === 'animate' ? styles.animate : '',
    ]);
    const iconOpenedClassNames = getMergedClassname([styles.icon, styles.iconOpened]);
    const iconClosedClassNames = getMergedClassname([styles.icon, styles.iconClosed]);
    const IconOpened = <IconComp name={ICON.REMOVE} className={iconOpenedClassNames}></IconComp>;
    const IconClosed = <IconComp name={ICON.ADD} className={iconClosedClassNames}></IconComp>;

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
        {IconOpened}
        {IconClosed}
      </Label>
    );
  }
);
