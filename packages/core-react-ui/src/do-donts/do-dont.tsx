import React from 'react';
import { useStyles } from 'react-treat';
import { Stack } from 'src/';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './do-dont.treat';

type Props = CommonComponentProps & {
  kind: 'do' | 'dont';
};

export const DoDont: React.FC<Props> = ({ id, style, className, kind, children, ...props }) => {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.base],
    ...props,
  });

  return (
    <>
      {/* <Stack className={styles.base} gap={[cssTheme.sizing.var.x5]}>
        <div {...commonProps}>{children}</div>
        <IoCheckmarkCircle className={styles.icon}></IoCheckmarkCircle>
      </Stack> */}
      <div {...commonProps}>
        <Stack className={styles.do}>{children}</Stack>
        <Stack className={styles.dont}>{children}</Stack>
      </div>
    </>
  );
};
