import React from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
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
      <div {...commonProps}>
        <Stack className={styles.doStyle}>{children}</Stack>
        <Stack className={styles.dontStyle}>{children}</Stack>
      </div>
    </>
  );
};
