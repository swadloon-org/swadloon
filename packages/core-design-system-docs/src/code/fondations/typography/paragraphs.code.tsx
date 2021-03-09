import { PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/lib/utilities';
import React from 'react';
import { lorenipsum } from '../../../utils/loren-ipsum';

type Props = {};

export const TypoParagraphs: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      {keys(PARAGRAPH_SIZE).map((variant, index) => (
        <Paragraph key={index} variant={PARAGRAPH_SIZE[variant]}>
          {lorenipsum}
        </Paragraph>
      ))}

      {keys(TEXT_STYLE)
        .filter((style) => cssTheme.typography.paragraphs.styles[style])
        .map((variant, index) => (
          <Paragraph key={index} variantStyle={TEXT_STYLE[variant]}>
            {lorenipsum}
          </Paragraph>
        ))}
    </Stack>
  );
};
