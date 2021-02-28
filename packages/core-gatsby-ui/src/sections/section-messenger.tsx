import { BoxV2, CommonComponentProps, Stack, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { BaseSection } from './section-base';
import * as styleRefs from './section-messenger.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps &
  SectionProps & {
    LeftBlock: React.ReactNode;
    RightBlocks: React.ReactNode;
  };

export const SectionMessenger = React.forwardRef<any, Props>(
  ({ id, style, className, LeftBlock, RightBlocks, ...props }, ref) => {
    const { styles } = useStyles(styleRefs);
    const { cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({ id, style, className, ...props });

    return (
      <BaseSection {...commonProps} ref={ref}>
        <div className={styles.grid}>
          <BoxV2 className={styles.gridTitle} alignItems={['flex-start']}>
            {LeftBlock}
          </BoxV2>

          <Stack gap={[cssTheme.sizing.var.x5]} className={styles.gridMessages}>
            {RightBlocks}
          </Stack>
        </div>
      </BaseSection>
    );
  }
);
