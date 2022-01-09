import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { BoxV2, Center, PaddingProps, useCSSTheme } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props';

import * as styles from './section-base.css';

type Props = SectionProps;

export const SectionBase = React.forwardRef<HTMLElement, Props>(function SectionBase(
  {
    id,
    style,
    className,
    as,
    AsElement,
    section: {
      variant = Variant.primary,
      baseLayout = SectionBaseLayout.center,
      padding = SectionPadding.large,
      colorScheme,
      colorMode,
    } = {
      variant: Variant.primary,
      baseLayout: SectionBaseLayout.center,
      padding: SectionPadding.large,
    },
    children,
    theme,
    ...props
  },
  ref
) {
  /**
   *
   * Styling
   *
   */

  const { getCSSColorModeClassnames } = useCSSTheme();

  const classNames = getMergedClassname([
    className,
    styles.wrapper,
    variant ? styles[variant] : variant === null ? styles.primary : '',
    getCSSColorModeClassnames({ colorMode, colorScheme }),
  ]);
  const paddingProp = getPaddingProp((padding as SectionPadding) || SectionPadding.large);

  /**
   * Full width
   */
  if (baseLayout === SectionBaseLayout.fullWidth) {
    return (
      <BoxV2
        id={id}
        style={style}
        className={classNames}
        as={'section'}
        padding={paddingProp}
        ref={ref}
      >
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
        return [sizeVars.x7, 0];
      }
      case SectionPadding.medium: {
        return [sizeVars.x6, 0];
      }
      case SectionPadding.small: {
        return [sizeVars.x5, 0];
      }
      default:
      case SectionPadding.none: {
        return [0];
      }
    }
  }
});
