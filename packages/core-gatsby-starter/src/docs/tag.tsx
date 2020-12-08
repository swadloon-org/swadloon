import React from 'react';

type Props = {};

export const Tag: React.FC<Props> = (props) => {
  return (
    <div style={{ padding: `0.5em 1em`, backgroundColor: 'red', color: 'white', borderRadius: '9px' }}>
      {props.children}
    </div>
  );
};
