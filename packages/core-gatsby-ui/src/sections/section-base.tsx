import { Variant } from '@newrade/core-design-system';
import { BoxV2, Center, getMergedClassname, PaddingProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionBaseLayout, SectionPadding, SectionProps } from './section.props';
import * as styleRefs from './section.treat';

type Props = SectionProps;

export const BaseSection = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      section: { variant = Variant.primary, baseLayout = SectionBaseLayout.center, padding = SectionPadding.large } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.center,
        padding: SectionPadding.large,
      },
      children,
      ...props
    },
    ref
  ) => {
    /**
     * Styling
     */
    const { cssTheme } = useTreatTheme();
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([className, styles.wrapper, variant ? styles[variant] : '']);
    const paddingProp = getPaddingProp((padding as SectionPadding) || SectionPadding.large);

    /**
     * Full width
     */
    if (baseLayout === SectionBaseLayout.fullWidth) {
      return (
        <BoxV2 id={id} style={style} className={classNames} as={'section'} padding={paddingProp} ref={ref}>
          {children}
        </BoxV2>
      );
    }

    /**
     * Centered
     */
    return (
      <Center id={id} style={style} className={classNames} as={'section'} ref={ref}>
        <BoxV2 padding={paddingProp} justifyContent={['center', 'flex-start', 'flex-start']}>
          {children}
        </BoxV2>
      </Center>
    );

    /**
     * Helper functions
     */

    function getPaddingProp(sectionPadding: SectionPadding): PaddingProps {
      switch (sectionPadding) {
        case SectionPadding.large: {
          return [cssTheme.sizing.var.x7, 0];
        }
        case SectionPadding.medium: {
          return [cssTheme.sizing.var.x6, 0];
        }
        case SectionPadding.small: {
          return [cssTheme.sizing.var.x5, 0];
        }
        default:
        case SectionPadding.none: {
          return [0];
        }
      }
    }
  }
);
