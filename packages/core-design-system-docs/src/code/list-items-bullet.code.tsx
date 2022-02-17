import React from 'react';

import { ListItems, ListItemV2 } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ListItemsBullet: React.FC<Props> = (props) => {
  return (
    <>
      <ListItems as={'ul'} gap={[sizeVars.x2]}>
        <ListItemV2></ListItemV2>
        <ListItemV2></ListItemV2>
        <ListItemV2></ListItemV2>
      </ListItems>
    </>
  );
};
