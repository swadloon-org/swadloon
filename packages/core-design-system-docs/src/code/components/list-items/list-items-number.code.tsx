import { CodeOutline, ListItem, ListItems, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ListItemsNumber: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <ListItems gap={[cssTheme.sizing.var.x3]} as={'ol'}>
        <ListItem variantIcon={'number'}></ListItem>

        <ListItem variantIcon={'number'}></ListItem>

        <ListItem variantIcon={'number'}></ListItem>
      </ListItems>
    </CodeOutline>
  );
};
