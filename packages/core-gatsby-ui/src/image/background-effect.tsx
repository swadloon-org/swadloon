import React from 'react';

import { PrimitiveProps } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities-iso';

import * as styles from './background-effect.css.js';

export type BackgroundEffectConfig = Partial<{
  background: string;
  backgroundColor: string;
  filter: FilterProps;
  zIndex: number;
}>;

import { Property } from 'csstype';

export type FilterProps = Property.Filter;

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
  const mergedClassNames = getMergedClassname([className, styles.wrapper]);

  return <div id={id} style={{ ...style, ...effect }} className={mergedClassNames}></div>;
};
