import { BoxV2, Center, getMergedClassname, PaddingProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionLayout, SectionPadding, SectionProps } from './section.props';
import * as styleRefs from './section.treat';

type Props = SectionProps;

export const Section = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      variant,
      variantLayout = SectionLayout.center,
      variantPadding = SectionPadding.medium,
      children,
      ...props
    },
    ref
  ) => {
    /**
     * Styling
     */
    const { styles } = useStyles(styleRefs);
    const classNames = getMergedClassname([styles.wrapper, className, variant ? styles[variant] : '']);
    const { cssTheme } = useTreatTheme();
    const padding = getPaddingProp(variantPadding);

    /**
     * Full width
     */
    if (variantLayout === SectionLayout.fullWidth) {
      return (
        <BoxV2 id={id} style={style} className={classNames} as={'section'} padding={padding} ref={ref}>
          {children}
        </BoxV2>
      );
    }

    /**
     * Centered
     */
    return (
      <Center id={id} style={style} className={classNames} as={'section'} ref={ref}>
        <BoxV2 padding={padding} justifyContent={['center', 'flex-start', 'flex-start']}>
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
          return [cssTheme.sizing.var.x7, 0];
        }
        case SectionPadding.small: {
          return [cssTheme.sizing.var.x7, 0];
        }
        default:
        case SectionPadding.none: {
          return [0];
        }
      }
    }
  }
);
