import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import {
  lorenipsum,
  lorenipsumShort,
} from '@newrade/core-gatsby-ui/lib/docs-components/loren-ipsum';
import { ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ListItemsMultiLine: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack as={'ul'} gap={[cssTheme.sizing.var.x2]}>
        <ListItem variantSize={PARAGRAPH_SIZE.large}>{lorenipsumShort}</ListItem>
        <ListItem variantSize={PARAGRAPH_SIZE.large}>{lorenipsum}</ListItem>

        <ListItem>{lorenipsumShort}</ListItem>
        <ListItem>{lorenipsum}</ListItem>

        <ListItem variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsumShort}</ListItem>
        <ListItem variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsum}</ListItem>
      </Stack>

      <Stack as={'ol'} gap={[cssTheme.sizing.var.x4]}>
        <ListItem variantSize={PARAGRAPH_SIZE.large}>{lorenipsumShort}</ListItem>
        <ListItem variantSize={PARAGRAPH_SIZE.large}>{lorenipsum}</ListItem>

        <ListItem>{lorenipsumShort}</ListItem>
        <ListItem>{lorenipsum}</ListItem>

        <ListItem variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsumShort}</ListItem>
        <ListItem variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsum}</ListItem>
      </Stack>
    </>
  );
};
