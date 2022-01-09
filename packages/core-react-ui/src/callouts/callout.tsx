import React from 'react';

import { ICON } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { IconComp } from '../icons/icon';
import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './callout.css';

type Props = PrimitiveProps<'div'> & {
  kind: 'positive' | 'warn' | 'negative';
};

export const Callout: React.FC<Props> = ({ kind, children, as, ...props }) => {
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
