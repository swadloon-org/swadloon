import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import {
  lorenipsum,
  lorenipsumShort,
} from '@newrade/core-gatsby-ui/src/docs-components/loren-ipsum';
import { ListItems, ListItemV2, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ListItemsMultiLine: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <ListItems as={'ul'} gap={[cssTheme.sizing.var.x4]}>
        <ListItemV2 variantSize={PARAGRAPH_SIZE.large}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 variantSize={PARAGRAPH_SIZE.large}>{lorenipsum}</ListItemV2>

        <ListItemV2>{lorenipsumShort}</ListItemV2>
        <ListItemV2>{lorenipsum}</ListItemV2>

        <ListItemV2 variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsum}</ListItemV2>
      </ListItems>

      <ListItems as={'ol'} gap={[cssTheme.sizing.var.x4]}>
        <ListItemV2 variantSize={PARAGRAPH_SIZE.large}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 variantSize={PARAGRAPH_SIZE.large}>{lorenipsum}</ListItemV2>

        <ListItemV2>{lorenipsumShort}</ListItemV2>
        <ListItemV2>{lorenipsum}</ListItemV2>

        <ListItemV2 variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 variantSize={PARAGRAPH_SIZE.xSmall}>{lorenipsum}</ListItemV2>
      </ListItems>
    </>
  );
};
