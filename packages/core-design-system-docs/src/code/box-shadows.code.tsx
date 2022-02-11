import React from 'react';

import { BoxV2 } from '@newrade/core-react-ui';
import { ShadowSwatch } from '@newrade/core-react-ui/doc-components';
import { effectsVars, sizeVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const BoxShadows: React.FC<Props> = (props) => {
  const boxShadows = keys(effectsVars.boxShadows); // light, medium, heavy...

  return (
    <BoxV2 padding={[sizeVars.x6]} style={{ height: `calc(${boxShadows.length * 90 + 400}px)` }}>
      {boxShadows.map((boxShadow, boxShadowIndex) => {
        const boxShadowOrShadows = effectsVars.boxShadows[boxShadow];
        const xOffset = 100;
        const yOffset = 60;
        const size = 400;
        return (
          <ShadowSwatch
            key={boxShadowIndex}
            shadow={boxShadowOrShadows}
            name={boxShadow}
            size={size}
            style={{
              width: size,
              height: size,
              position: 'absolute',
              left: xOffset * boxShadowIndex,
              top: yOffset * (boxShadowIndex + 1),
            }}
          />
        );
      })}
    </BoxV2>
  );
};
