import React from 'react';
import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5';

import { ListItem, Stack } from '@newrade/core-react-ui';

type Props = {};

export const ListItemsIcon: React.FC<Props> = (props) => {
  return (
    <>
      <Stack as={'ul'} gap={[sizeVars.x2]}>
        <ListItem variantIcon={'icon'} Icon={<IoMailOutline />}>
          info@website.ca
        </ListItem>

        <ListItem variantIcon={'icon'} Icon={<IoMailOutline />}>
          info@website.ca
        </ListItem>

        <ListItem variantIcon={'icon'} Icon={<IoPhonePortraitOutline />}>
          444-555-2222
        </ListItem>
      </Stack>
    </>
  );
};
