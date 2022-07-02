import React from 'react';

import { LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { Label, Stack } from '@newrade/core-react-ui';
import { sizeVars, typographyVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const Labels: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      {keys(LABEL_SIZE).map((variant, index) => (
        <Label key={index} variant={LABEL_SIZE[variant]}></Label>
      ))}

      {keys(Variant).map((variant, index) => (
        <Label key={index} variantLevel={variant as Variant}></Label>
      ))}

      {keys(TEXT_STYLE)
        .filter((style) => !!typographyVars.labels.styles?.[style])
        .map((variant, index) => (
          <Label key={index} textStyle={TEXT_STYLE[variant]}></Label>
        ))}
    </Stack>
  );
};
