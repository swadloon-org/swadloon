import React from 'react';

type Props = {};

export const LogoPlaceholder: React.FC<Props> = (props) => {
  return (
    <svg width="190" height="100%" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="80" fill="grey">
        LOGO
      </rect>
    </svg>
  );
};
