import { ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5';

type Props = {};

export const ListItemsIcon: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack as={'ul'} gap={[cssTheme.sizing.var.x2]}>
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
