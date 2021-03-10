import { LinkProps, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { Paragraph } from '../text/paragraph';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './list-item-v2.treat';

type Props = CommonComponentProps & HTMLAttributes<HTMLLIElement> & Pick<LinkProps, 'variantSize' | 'variantLevel'>;

export const ListItemV2: React.FC<Props> = React.memo(
  ({ id, style, className, variantLevel, variantSize = PARAGRAPH_SIZE.medium, as, AsElement, children, ...props }) => {
    /**
     * Hooks
     */
    const { styles } = useStyles(stylesRef);

    /**
     * Props
     */
    const wrapperClassNames = getMergedClassname([
      styles.wrapper,
      className,
      variantLevel ? styles[variantLevel] : '',
      variantSize ? styles[variantSize] : styles.small,
    ]);

    /**
     * Default children
     */
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('list item', {
          variantSize,
        });

    /**
     * Render
     */
    return React.createElement(
      'li',
      {
        id,
        style,
        className: wrapperClassNames,
        ...props,
      },
      <>
        <Paragraph variant={variantSize} className={styles.content}>
          {renderedChildren}
        </Paragraph>
      </>
    );
  }
);
