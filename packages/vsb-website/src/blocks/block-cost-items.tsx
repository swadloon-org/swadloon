import { LABEL_SIZE } from '@newrade/core-design-system';
import { BlockProps } from '@newrade/core-gatsby-ui/src';
import { CommonComponentProps, Label, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlockCostItemFragment } from '../../types/graphql-types';
import * as styleRefs from './block-cost-item.treat';

type Props = CommonComponentProps &
  BlockProps & {
    costItem: BlockCostItemFragment;
  };

export const BlockCostItem: React.FC<Props> = ({ id, style, className, costItem, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const classNames = [styles.wrapper];
  const commonProps = useCommonProps({ ...props, classNames });

  return (
    <div className={styles.wrapper} {...commonProps}>
      <Label variant={LABEL_SIZE.medium} className={styles.label}>
        {costItem.text?.text}
      </Label>

      <Label variant={LABEL_SIZE.medium}>{costItem.priceText}</Label>
    </div>
  );
};
