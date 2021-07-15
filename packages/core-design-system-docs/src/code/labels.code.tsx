import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { Label, Stack, useTreatTheme } from '@newrade/core-react-ui/src';
import { keys } from '@newrade/core-react-ui/src/utilities';
import React from 'react';

type Props = {};

export const Labels: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
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
