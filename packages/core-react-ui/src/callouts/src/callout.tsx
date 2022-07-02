import React from 'react';

import { ICON } from '@newrade/core-design-system';
import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { IconComp } from '../icons/icon.js';
import { Primitive } from '../primitive/primitive.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './callout.css.js';

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
