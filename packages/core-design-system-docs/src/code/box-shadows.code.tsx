import { ShadowSwatch } from '@newrade/core-gatsby-ui/lib/docs-components/shadow-swatch';
import { BoxV2, useTreatTheme } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/lib/utilities';
import React from 'react';

type Props = {};

export const BoxShadows: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <BoxV2
      padding={[cssTheme.sizing.var.x6]}
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
