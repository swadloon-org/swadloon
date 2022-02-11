import React from 'react';

import { TEXT_STYLE } from '@newrade/core-design-system';
import { lorenipsum, Paragraph, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities';

type Props = {};

export const ParagraphsStyles: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x4]}>
      {keys(TEXT_STYLE).map((variant, index) => (
        <Paragraph key={index} variantStyle={TEXT_STYLE[variant]}>
          {variant} - {lorenipsum}
        </Paragraph>
      ))}
    </Stack>
  );
};
