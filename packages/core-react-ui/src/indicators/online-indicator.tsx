import React from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Cluster } from '../layout/cluster';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import * as styleRefs from './online-indicator.treat';

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
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.status, status === 'online' ? styles.statusOnline : styles.statusOffline],
    ...props,
  });

  return (
    <Cluster justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x2]} {...commonProps}>
      <div className={styles.statusDot}></div>
      <Label style={{ color: 'inherit' }}>{children || status}</Label>
    </Cluster>
  );
};
