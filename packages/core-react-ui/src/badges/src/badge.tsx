import React from 'react';

import { TagProps } from '@newrade/core-design-system';
import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { Cluster } from '../layout/cluster';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './badge.css';

type Props = PrimitiveProps &
  Omit<TagProps, 'kind'> & {
    type?: 'version' | 'status';
    kind?: 'neutral' | 'success' | 'warning' | 'error';
    name?: string;
    status?: string;
    children?: string;
  };

export const Badge: React.FC<Props> = React.memo(
  ({ id, style, className, children, as, variant, kind, type, name, status, ...props }) => {
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.base],
      ...props,
    });

    const commonPropsStatus = useCommonProps({
      classNames: [styles.status, kind ? styles[kind] : styles.neutral],
    });

    const ariaTitle = `${name}: ${status}`;

    return (
      <Cluster
        aria-label={ariaTitle}
        {...commonProps}
        justifyContent={['flex-start']}
        alignItems={['stretch']}
        gap={['0px']}
      >
        <div className={styles.name}>
          <span className={styles.nameSpan}>{name}</span>
        </div>

        <div {...commonPropsStatus}>
          <span className={styles.statusSpan}>{status}</span>
        </div>
      </Cluster>
    );
  }
);
