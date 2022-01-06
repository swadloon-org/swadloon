import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { CSSThemeSwitcher, Switcher, useCommonProps } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props';
import { SectionBase } from './section-base';

import * as styles from './section-switcher.css';

type Props = SectionProps & {
  RightBlock?: React.ReactNode | null;
  LeftBlock?: React.ReactNode | null;
};

const defaultProps: Props = {
  section: {
    variant: Variant.primary,
    baseLayout: SectionBaseLayout.center,
    padding: SectionPadding.large,
  },
};

export const SectionSwitcher = React.forwardRef<HTMLElement, Props>(function SectionSwitcher(
  {
    id,
    style,
    className,
    as,
    AsElement,
    RightBlock,
    LeftBlock,
    section = defaultProps.section,
    ...props
  },
  ref
) {
  const mergedSection = { ...defaultProps.section, ...section };
  const commonProps = useCommonProps<'section'>({ id, style, className, ...props });

  return (
    <CSSThemeSwitcher
      colorMode={mergedSection.colorMode}
      colorScheme={mergedSection.colorScheme}
      variant={mergedSection.variant}
    >
      <SectionBase ref={ref} section={mergedSection} {...commonProps}>
        <Switcher
          col={[1, 1, 2]}
          gap={[sizeVars.x6]}
          alignItems={['flex-start', 'center', 'center']}
        >
          <div className={styles.left}>{LeftBlock}</div>
          <div className={styles.right}>{RightBlock}</div>
        </Switcher>
      </SectionBase>
    </CSSThemeSwitcher>
  );
});
