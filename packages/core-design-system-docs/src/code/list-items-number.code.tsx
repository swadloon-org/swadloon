import React from 'react';

import { ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const ListItemsNumber: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack as={'ol'} gap={[cssTheme.sizing.var.x3]}>
        <ListItem variantIcon={'number'}></ListItem>

        <ListItem variantIcon={'number'}></ListItem>

        <ListItem variantIcon={'number'}></ListItem>
      </Stack>
    </>
  );
};
