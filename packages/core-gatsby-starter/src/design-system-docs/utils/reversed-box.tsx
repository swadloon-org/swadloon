import { BoxV2, useTreatTheme } from '@newrade/core-react-ui';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<any>;

export const ReversedBox: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { cssTheme } = useTreatTheme();

  return (
    <BoxV2 padding={[cssTheme.sizing.var.x2]} style={{ backgroundColor: cssTheme.colors.colors.grey[1000] }}>
      {props.children}
    </BoxV2>
  );
};
