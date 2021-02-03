import { Label } from '@newrade/core-react-ui';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<any>;

export const Placeholder: React.FC<Props> = ({ id, style, className, ...props }) => {
  return (
    <div
      id={id}
      className={className}
      style={{
        display: 'flex',
        flex: '1 1 100%',
        backgroundColor: 'rgb(255 0 255 / 6%)',
        padding: '2em',
        textAlign: 'center',
        justifyContent: 'center',
        ...style,
      }}
      {...props}
    >
      <Label>{props.children || 'Content'}</Label>
    </div>
  );
};
