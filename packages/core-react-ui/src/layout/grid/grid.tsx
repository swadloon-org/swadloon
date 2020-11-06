// import { ButtonProps } from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './grid.treat';

type OwnProps = {};

export const LayoutGrid: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return <div className={``}>{props.children}</div>;
};
