import React from 'react';
import { IoMailOutline } from 'react-icons/io5';

import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { ListItem, ListItems, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const ListItemsSizes: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <ListItems gap={[cssTheme.sizing.var.x3]}>
        <ListItem variantSize={PARAGRAPH_SIZE.large} variantIcon={'bullet'}></ListItem>

        <ListItem variantSize={PARAGRAPH_SIZE.medium} variantIcon={'bullet'}></ListItem>

        <ListItem variantSize={PARAGRAPH_SIZE.small} variantIcon={'bullet'}></ListItem>

        <ListItem variantSize={PARAGRAPH_SIZE.xSmall} variantIcon={'bullet'}></ListItem>
      </ListItems>

      <ListItems gap={[cssTheme.sizing.var.x3]}>
        <ListItem
          variantSize={PARAGRAPH_SIZE.large}
          variantIcon={'icon'}
          Icon={<IoMailOutline />}
        ></ListItem>

        <ListItem
          variantSize={PARAGRAPH_SIZE.medium}
          variantIcon={'icon'}
          Icon={<IoMailOutline />}
        ></ListItem>

        <ListItem
          variantSize={PARAGRAPH_SIZE.small}
          variantIcon={'icon'}
          Icon={<IoMailOutline />}
        ></ListItem>

        <ListItem
          variantSize={PARAGRAPH_SIZE.xSmall}
          variantIcon={'icon'}
          Icon={<IoMailOutline />}
        ></ListItem>
      </ListItems>
    </>
  );
};
