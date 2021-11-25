import React from 'react';
import { useStyles } from 'react-treat';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styleRefs from './do-dont.treat';

type Props = PrimitiveProps<'div'> & {
  kind: 'do' | 'dont';
};

export const DoDont: React.FC<Props> = ({ id, style, className, kind, children, as, ...props }) => {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps<'div'>({
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
