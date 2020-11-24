import { HEADING, TITLE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './heading.treat';

type Props = CommonComponentProps & {
  variant: HEADING & TITLE;
};

export const Heading: React.FC<HTMLAttributes<any> & Props> = ({ className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  return <h1 className={`${className || ''} ${styles.t1}`}>{props.children}</h1>;
};
