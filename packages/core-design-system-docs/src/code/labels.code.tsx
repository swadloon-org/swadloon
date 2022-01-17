import React from 'react';

import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { Label, Stack } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const Labels: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      {keys(LABEL_SIZE).map((variant, index) => (
        <Label key={index} variant={LABEL_SIZE[variant]}></Label>
      ))}

      {keys(TEXT_STYLE)
        .filter((style) => cssTheme.typography.labels.styles[style])
        .map((variant, index) => (
          <Label key={index} variantStyle={TEXT_STYLE[variant]}></Label>
        ))}
    </Stack>
  );
};
