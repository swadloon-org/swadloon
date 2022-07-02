import React, { useRef } from 'react';

import { Variant } from '@newrade/core-design-system';
import { Switcher, useCommonProps } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props.js';
import { SectionBase } from './section-base.js';
import * as styles from './section-switcher.css.js';

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
  forwardedRef
) {
  const mergedSection = { ...defaultProps.section, ...section };
  const commonProps = useCommonProps<'section'>({ id, style, className, ...props });
  const localRef = useRef<HTMLElement>(null);
  const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLElement>) : localRef;

  return (
    <SectionBase ref={ref} section={mergedSection} {...commonProps}>
      <Switcher col={[1, 1, 2]} gap={[sizeVars.x6]} alignItems={['flex-start', 'center', 'center']}>
        <div className={styles.left}>{LeftBlock}</div>
        <div className={styles.right}>{RightBlock}</div>
      </Switcher>
    </SectionBase>
  );
});
