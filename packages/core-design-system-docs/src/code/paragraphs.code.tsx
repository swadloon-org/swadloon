import React from 'react';

import { PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { lorenipsum, Paragraph, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const Paragraphs: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x4]}>
      {keys(PARAGRAPH_SIZE).map((variant, index) => (
        <Paragraph key={index} size={PARAGRAPH_SIZE[variant]}>
          {variant} - {lorenipsum}
        </Paragraph>
      ))}

      {keys(TEXT_STYLE).map((style, index) => (
        <Paragraph key={index} textStyle={TEXT_STYLE[style]}>
          {style} - {lorenipsum}
        </Paragraph>
      ))}
    </Stack>
  );
};
