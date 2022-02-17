import React from 'react';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { Cluster } from '../layout/cluster';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import { sizeVars } from '../theme';

import * as styles from './online-indicator.css';

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
