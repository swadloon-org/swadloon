import React, { useState } from 'react';

import { ICON } from '@newrade/core-design-system';
import { NavbarSelectItem } from '@newrade/core-react-ui';
import { Cluster, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const NavbavSelectItems: React.FC<Props> = (props) => {
  type ThemeValue = 'Light' | 'Dark';

  const [selectedTheme, setSelectedTheme] = useState<ThemeValue>('Light');

  function handleChangeTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    if (!value) {
      return;
    }
    setSelectedTheme(value as ThemeValue);
  }

  return (
    <Stack gap={[sizeVars.x3]}>
      <Cluster justifyContent={['flex-start']}>
        <NavbarSelectItem
          Icon={ICON.ARROW_UP}
          select={{
            placeholder: 'Choose Theme',
            value: selectedTheme,
            onChange: handleChangeTheme,
          }}
        >
          <option value={'Light'}>Light</option>
          <option value={'Dark'}>Dark</option>
        </NavbarSelectItem>
      </Cluster>
    </Stack>
  );
};
