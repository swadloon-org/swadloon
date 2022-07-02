import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { sizeVars } from '../default-theme/src/theme.js';
import { Cluster } from '../layout/cluster.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';
import { Label } from '../text/label.js';

import * as styles from './online-indicator.css.js';

type Props = PrimitiveProps & {
  status?: 'online' | 'offline' | 'loading';
};

export const OnlineIndicator: React.FC<Props> = ({
  id,
  style,
  className,
  status = 'loading',
  children,
  as,
  AsElement,
  ...props
}) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.status, status === 'online' ? styles.statusOnline : styles.statusOffline],
    ...props,
  });

  return (
    <Cluster justifyContent={['flex-start']} gap={[sizeVars.x2]} {...commonProps}>
      <div className={styles.statusDot}></div>
      <Label style={{ color: 'inherit' }}>{children || status}</Label>
    </Cluster>
  );
};
