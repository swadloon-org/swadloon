import { CodeOutline, ListItem, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { IoMailOutline } from '@react-icons/all-files/io5/IoMailOutline';
import { IoPhonePortraitOutline } from '@react-icons/all-files/io5/IoPhonePortraitOutline';
import React from 'react';

type Props = {};

export const ListItemsIcon: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
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
    </CodeOutline>
  );
};
