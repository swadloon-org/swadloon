import React from 'react';

import { TITLE, Variant } from '@newrade/core-design-system';
import { Heading, lorenipsumMedium, lorenipsumShort, Stack } from '@newrade/core-react-ui';
import { sizeVars, typoSpaceVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const Titles: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <Stack gap={[typoSpaceVars.titles.t1.after]}>
        <Heading variant={TITLE.t1} variantLevel={Variant.primary}>
          {lorenipsumMedium}
        </Heading>
      </Stack>

      <Heading variant={TITLE.t2} variantLevel={Variant.primary}>
        {lorenipsumMedium}
      </Heading>
    </Stack>
  );
};
