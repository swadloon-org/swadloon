import { BlockProps } from '@newrade/core-gatsby-ui/src';
import { CommonComponentProps, Label, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { LABEL_SIZE } from '../../../core-design-system/src';
import * as styleRefs from './section-cost-items.treat';

type Props = CommonComponentProps &
  BlockProps & {
    costItem: {
      title: string;
      text: string;
      priceText: string;
    };
  };

export const BlockCostItem: React.FC<Props> = ({ id, style, className, costItem, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const classNames = [styles.wrapper];
  const commonProps = useCommonProps({ ...props, classNames });

  return (
    <div className={styles.costItem} {...commonProps}>
      <Label variant={LABEL_SIZE.medium} className={styles.costItemLabel}>
        {costItem.text}
      </Label>
      <Label variant={LABEL_SIZE.medium}>{costItem.priceText}</Label>
    </div>
  );
};
