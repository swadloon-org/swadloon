import React from 'react';

type Props = {};

export const Placeholder: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: '1 1 100%',
        backgroundColor: 'rgb(255 0 255 / 10%)',
        padding: '2em',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children || 'Placeholder'}
    </div>
  );
};
