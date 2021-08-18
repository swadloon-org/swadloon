import { Placeholder } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder';
import { Switcher, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const LayoutSwitcher: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Switcher gap={[cssTheme.sizing.var.x2]} col={3}>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
      </Switcher>
    </>
  );
};
