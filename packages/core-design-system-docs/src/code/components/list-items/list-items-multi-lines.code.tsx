import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { CodeOutline, ListItem, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { lorenipsum } from '../../../utils/loren-ipsum';

type Props = {};

export const ListItemsMultiLine: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Stack as={'ul'} gap={[cssTheme.sizing.var.x4]}>
        <ListItem variantIcon={'bullet'} variantSize={PARAGRAPH_SIZE.large}>
          <Paragraph>{lorenipsum}</Paragraph>
        </ListItem>

        <ListItem variantIcon={'bullet'} variantSize={PARAGRAPH_SIZE.large}>
          <Paragraph>{lorenipsum}</Paragraph>
        </ListItem>

        <ListItem variantIcon={'bullet'}>{lorenipsum}</ListItem>
        <ListItem variantIcon={'bullet'}>{lorenipsum}</ListItem>

        <ListItem variantIcon={'bullet'} variantSize={PARAGRAPH_SIZE.xSmall}>
          {lorenipsum}
        </ListItem>
        <ListItem variantIcon={'bullet'} variantSize={PARAGRAPH_SIZE.xSmall}>
          {lorenipsum}
        </ListItem>
      </Stack>
    </CodeOutline>
  );
};
