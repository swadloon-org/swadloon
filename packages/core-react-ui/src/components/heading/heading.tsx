import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './heading.treat';

type Props = CommonComponentProps & {};

export const Heading: React.FC<HTMLAttributes<any> & Props> = ({ className, ...props }) => {
  const styles = useStyles(stylesRef);

  return <h1 className={`${className || ''} ${styles.h1}`}>{props.children}</h1>;
};
