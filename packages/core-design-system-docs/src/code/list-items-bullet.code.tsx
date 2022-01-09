import React from 'react';

import { ListItems, ListItemV2 } from '@newrade/core-react-ui';

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
