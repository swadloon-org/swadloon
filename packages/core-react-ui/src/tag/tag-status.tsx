import { TagProps } from '@newrade/core-design-system';
import React from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { Cluster } from '../layout/cluster';
import { CommonComponentProps } from '../props/component-common.props';
import * as stylesRef from './tag-status.treat';

type Props = CommonComponentProps &
  TagProps & {
    type?: 'version';
    name?: string;
    status?: string;
    children?: string;
  };

export const TagStatus: React.FC<Props> = React.memo(
  ({ id, style, className, children, as, variant, type, name, status, ...props }) => {
    const styles = useStyles(stylesRef);
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.base],
      ...props,
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

        <div className={styles.status}>
          <span className={styles.statusSpan}>{status}</span>
        </div>
      </Cluster>
    );
  }
);
