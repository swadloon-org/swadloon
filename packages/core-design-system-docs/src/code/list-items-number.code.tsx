import React from 'react';

import { ListItem, Stack } from '@newrade/core-react-ui';

type Props = {};

export const ListItemsNumber: React.FC<Props> = (props) => {
  return (
    <>
      <Stack as={'ol'} gap={[sizeVars.x3]}>
        <ListItem variantIcon={'number'}></ListItem>

        <ListItem variantIcon={'number'}></ListItem>

        <ListItem variantIcon={'number'}></ListItem>
      </Stack>
    </>
  );
};
