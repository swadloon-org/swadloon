import React, { HTMLAttributes } from 'react';

import { BoxV2 } from '../layout/box-v2';
import { colorVars, sizeVars } from '../theme';

type Props = HTMLAttributes<any>;

export const ReversedBox: React.FC<Props> = ({ id, style, className, ...props }) => {
  return (
    <BoxV2 padding={[sizeVars.x2]} style={{ backgroundColor: colorVars.colors.grey[1000] }}>
      {props.children}
    </BoxV2>
  );
};
