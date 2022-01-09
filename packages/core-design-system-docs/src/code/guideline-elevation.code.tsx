import React from 'react';

import { BoxShadow } from '@newrade/core-design-system';
import { BoxV2, useThemeElevationBG } from '@newrade/core-react-ui';
import { ShadowSwatch } from '@newrade/core-react-ui/doc-components';
import { effectsVars, sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const GuidelineElevation: React.FC<Props> = (props) => {
  const shadow = effectsVars.boxShadows.light as BoxShadow;

  const elevation0BG = useThemeElevationBG({ level: 0 });
  const elevation1BG = useThemeElevationBG({ level: 1 });
  const elevation2BG = useThemeElevationBG({ level: 2 });
  const elevation3BG = useThemeElevationBG({ level: 3, greyLevel: 1 });
  const elevation4BG = useThemeElevationBG({ level: 4, greyLevel: 2 });

  const elevationStyle = {
    width: `100%`,
    height: `100%`,
    gridAutoRows: `1fr auto`,
    padding: sizeVars.x4,
  };

  return (
    <BoxV2
      style={{
        height: `calc(5 * 90 + 200}px)`,
      }}
    >
      <ShadowSwatch
        shadow={shadow}
        name={'elevation 0'}
        size={`100%`}
        style={elevationStyle}
        shadowStyle={{
          backgroundColor: elevation0BG,
        }}
      >
        <ShadowSwatch
          shadow={shadow}
          name={'elevation 1'}
          size={`100%`}
          style={elevationStyle}
          shadowStyle={{
            backgroundColor: elevation1BG,
          }}
        >
          <ShadowSwatch
            shadow={shadow}
            name={'elevation 2'}
            size={`100%`}
            style={elevationStyle}
            shadowStyle={{
              backgroundColor: elevation2BG,
            }}
          >
            <ShadowSwatch
              shadow={shadow}
              name={'elevation 3 (grey level 1)'}
              size={`100%`}
              style={elevationStyle}
              shadowStyle={{
                backgroundColor: elevation3BG,
              }}
            >
              <ShadowSwatch
                shadow={shadow}
                name={'elevation 4 (grey level 2)'}
                size={`100px`}
                style={elevationStyle}
                shadowStyle={{
                  backgroundColor: elevation4BG,
                }}
              ></ShadowSwatch>
            </ShadowSwatch>
          </ShadowSwatch>
        </ShadowSwatch>
      </ShadowSwatch>
    </BoxV2>
  );
};
