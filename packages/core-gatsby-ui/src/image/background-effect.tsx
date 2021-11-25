import React from 'react';
import { useStyles } from 'react-treat';

import { FilterProps, PrimitiveProps } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';

import * as styleRefs from './background-effect.treat';

export type BackgroundEffectConfig = Partial<{
  background: string;
  backgroundColor: string;
  filter: FilterProps;
  zIndex: number;
}>;

type Props = Omit<PrimitiveProps, 'as'> & {
  effect?: BackgroundEffectConfig;
};

export const BackgroundEffect: React.FC<Props> = ({
  id,
  style,
  className,
  effect,
  children,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([className, styles.wrapper]);

  return <div id={id} style={{ ...style, ...effect }} className={mergedClassNames}></div>;
};
