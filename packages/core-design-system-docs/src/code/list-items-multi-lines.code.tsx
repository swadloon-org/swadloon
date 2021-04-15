import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { ListItems, ListItemV2, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { lorenipsum, lorenipsumShort } from '../utils/loren-ipsum';

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
