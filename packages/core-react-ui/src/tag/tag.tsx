import { TagProps, Variant } from '@newrade/core-design-system';
import React from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import * as stylesRef from './tag.treat';

type Props = CommonComponentProps &
  TagProps & {
    children?: string;
  };

export const Tag: React.FC<Props> = React.memo(
  ({ id, style, className, children, as, variant, ...props }) => {
    const styles = useStyles(stylesRef);
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.base, variant ? styles[variant] : styles[Variant.primary]],
    });

    return (
      <div {...commonProps}>
        <Label>{children}</Label>
      </div>
    );
  }
);
