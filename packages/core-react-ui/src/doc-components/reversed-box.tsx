import { COLOR_MODE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { CSSThemeSwitcher } from '../hooks/use-css-theme';
import { BoxV2 } from '../layout/box-v2';
import { colorVars, sizeVars } from '../theme';



type Props = HTMLAttributes<any>;

export const ReversedBox: React.FC<Props> = ({ id, style, className, ...props }) => {
  return (
    <CSSThemeSwitcher colorMode={COLOR_MODE.REVERSED}>
      <BoxV2 padding={[sizeVars.x2]} style={{ backgroundColor: colorVars.colorIntents.elevation0 }}>
        {props.children}
      </BoxV2>
    </CSSThemeSwitcher>
  );
};
