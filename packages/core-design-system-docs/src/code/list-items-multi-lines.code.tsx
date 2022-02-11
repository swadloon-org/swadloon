import React from 'react';

import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { ListItemV2, Stack } from '@newrade/core-react-ui';
import { lorenipsum, lorenipsumShort } from '@newrade/core-react-ui/doc-components';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ListItemsMultiLine: React.FC<Props> = (props) => {
  return (
    <>
      <Stack as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2 size={PARAGRAPH_SIZE.large}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 size={PARAGRAPH_SIZE.large}>{lorenipsum}</ListItemV2>

        <ListItemV2>{lorenipsumShort}</ListItemV2>
        <ListItemV2>{lorenipsum}</ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.xSmall}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 size={PARAGRAPH_SIZE.xSmall}>{lorenipsum}</ListItemV2>
      </Stack>

      <Stack as={'ol'} gap={[sizeVars.x4]}>
        <ListItemV2 size={PARAGRAPH_SIZE.large}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 size={PARAGRAPH_SIZE.large}>{lorenipsum}</ListItemV2>

        <ListItemV2>{lorenipsumShort}</ListItemV2>
        <ListItemV2>{lorenipsum}</ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.xSmall}>{lorenipsumShort}</ListItemV2>
        <ListItemV2 size={PARAGRAPH_SIZE.xSmall}>{lorenipsum}</ListItemV2>
      </Stack>
    </>
  );
};
