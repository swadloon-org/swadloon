import React from 'react';

import { BoxV2 } from '@newrade/core-react-ui';
import { ShadowSwatch } from '@newrade/core-react-ui/doc-components';
import { keys } from '@newrade/core-react-ui/utilities';

type Props = {};

export const BoxShadows: React.FC<Props> = (props) => {
  return (
    <BoxV2
      padding={[sizeVars.x6]}
      style={{ height: `calc(${keys(theme.effects.boxShadows).length * 90 + 400}px)` }}
    >
      {theme.effects?.boxShadows &&
        keys(theme.effects.boxShadows).map((boxShadowKey, index) => {
          const shadow = theme.effects.boxShadows[boxShadowKey];
          const xOffset = 100;
          const yOffset = 60;
          const size = 400;
          return (
            <ShadowSwatch
              key={boxShadowKey}
              shadow={shadow}
              name={boxShadowKey as string}
              size={size}
              style={{
                width: size,
                height: size,
                position: 'absolute',
                left: xOffset * index,
                top: yOffset * (index + 1),
              }}
            />
          );
        })}
    </BoxV2>
  );
};
