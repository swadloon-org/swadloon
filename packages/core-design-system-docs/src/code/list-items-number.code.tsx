import React from 'react';

import { ListItems, ListItemV2 } from '@newrade/core-react-ui';

type Props = {};

export const ListItemsNumber: React.FC<Props> = (props) => {
  return (
    <>
      <ListItems as={'ol'}>
        <ListItemV2></ListItemV2>

        <ListItemV2></ListItemV2>

        <ListItemV2></ListItemV2>
      </ListItems>
    </>
  );
};
