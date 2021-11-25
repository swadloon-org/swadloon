import React from 'react';
import { useStyles } from 'react-treat';

import { ICON } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { IconComp } from '../icons/icon';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Primitive } from '..';

import * as styleRefs from './callout.treat';

type Props = PrimitiveProps<'div'> & {
  kind: 'positive' | 'warn' | 'negative';
};

export const Callout: React.FC<Props> = ({ kind, children, as, ...props }) => {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps<'div'>({
    classNames: [styles.base],
    ...props,
  });

  return (
    <Primitive classNames={[styles.base]} {...props}>
      <IconComp name={ICON.CHECKMARK_CIRCLE} />
      <div className={styles.doStyle}>{children}</div>
    </Primitive>
  );
};
