import React from 'react';

interface OwnProps {
  type: 'framed' | 'text' | 'framed-text';
  variant: 'reversed' | 'default';
  src: string;
}

export const Logo: React.FC<OwnProps> = (props) => {
  return <img src={`${[props.src]}`}>{props.children}</img>;
};
