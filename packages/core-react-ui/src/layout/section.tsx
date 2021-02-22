import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './section.treat';

/**
 * Todos
 *
 * - [ ] create entry in DS
 * - [ ] create reversed variant (should we use the TreatProvider?)
 */

type Props = CommonComponentProps & {
  /**
   * Offset the navbar height
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  baseLayout?: 'center' | 'fullWidth';
};

/**
 * High level layout component to create sections in a page.
 * Should be used inside <Main/>
 */
export const Section: React.FC<Props> = React.memo(
  ({ id, style, className, as, variant = 'primary', baseLayout = 'center', ...props }) => {
    const { styles } = useStyles(styleRefs);
    const type = as ? as : 'section';
    const classNames = getMergedClassname([className, styles.wrapper]);

    return React.createElement(type, {
      style: {
        ...style,
      },
      className: classNames,
      ...props,
    });
  }
);
