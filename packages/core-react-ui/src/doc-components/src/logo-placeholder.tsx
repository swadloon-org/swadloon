import React, { SVGAttributes } from 'react';

import { colorVars } from '../theme.js';

type Props = SVGAttributes<any>;

export const LogoPlaceholder: React.FC<Props> = (props) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      {...props}
    >
      <rect width="1024" height="1024" fill={colorVars.colorIntents.background1}>
        <text>LOGO</text>
      </rect>
    </svg>
  );
};
