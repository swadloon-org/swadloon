import { Variant } from '@newrade/core-design-system';
import {
  BoxV2,
  CommonComponentProps,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionBase } from './section-base';
import * as styleRefs from './section-messenger.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps &
  SectionProps & {
    LeftBlock: React.ReactNode;
    RightBlocks: React.ReactNode;
  };

export const SectionMessenger = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      LeftBlock,
      RightBlocks,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.center,
        padding = SectionPadding.large,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.center,
        padding: SectionPadding.large,
      },
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(styleRefs);
    const { cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({ id, style, className, ...props });

    return (
      <SectionBase
        ref={ref}
        {...commonProps}
        section={{
          variant,
          baseLayout,
          padding,
        }}
      >
        <div className={styles.grid}>
          <BoxV2 className={styles.gridTitle} alignItems={['flex-start']}>
            {LeftBlock}
          </BoxV2>

          <Stack gap={[cssTheme.sizing.var.x5]} className={styles.gridMessages}>
            {RightBlocks}
          </Stack>
        </div>
      </SectionBase>
    );
  }
);
