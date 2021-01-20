import React from 'react';
import { useStyles } from 'react-treat';
import { FilterProps } from '../../props/background.props';
import { CommonComponentProps } from '../../props/component-common.props';
import { getMergedClassname } from '../../utilities/component.utilities';
import * as styleRefs from './background-effect.treat';

export type BackgroundEffectConfig = Partial<{
  background: string;
  backgroundColor: string;
  filter: FilterProps;
  zIndex: number;
}>;

type Props = Omit<CommonComponentProps, 'as'> & {
  effect?: BackgroundEffectConfig;
};

export const BackgroundEffect: React.FC<Props> = ({ id, style, className, effect, children, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([className, styles.wrapper]);

  return <div id={id} style={{ ...style, ...effect }} className={styles.wrapper}></div>;
};
