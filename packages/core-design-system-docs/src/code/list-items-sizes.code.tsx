import React from 'react';
import { IoMailOutline } from 'react-icons/io5';

import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { ListItems, ListItemV2 } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ListItemsSizes: React.FC<Props> = (props) => {
  return (
    <>
      <ListItems gap={[sizeVars.x3]}>
        <ListItemV2 size={PARAGRAPH_SIZE.large}></ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.medium}></ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.small}></ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.xSmall}></ListItemV2>
      </ListItems>

      <ListItems gap={[sizeVars.x3]}>
        <ListItemV2 size={PARAGRAPH_SIZE.large} IconSVG={<IoMailOutline />}></ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.medium} IconSVG={<IoMailOutline />}></ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.small} IconSVG={<IoMailOutline />}></ListItemV2>

        <ListItemV2 size={PARAGRAPH_SIZE.xSmall} IconSVG={<IoMailOutline />}></ListItemV2>
      </ListItems>
    </>
  );
};
