import React from 'react';
import { IoCheckmarkOutline, IoCloseOutline, IoMoon, IoSunny } from 'react-icons/io5';

import { Switch } from '@newrade/core-react-ui';
import { colorVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const SwitchesIcons: React.FC<Props> = (props) => {
  return (
    <>
      <Switch
        value={'on'}
        IconOff={<IoMoon />}
        colorOff={colorVars.colors.grey[100]}
        IconOn={<IoSunny />}
        colorOn={colorVars.colors.grey[100]}
      ></Switch>

      <Switch
        value={'on'}
        IconOff={<IoCloseOutline />}
        colorOff={colorVars.colorIntents.backgroundDisabled}
        IconOn={<IoCheckmarkOutline />}
        colorOn={colorVars.colorIntents.successAction}
      ></Switch>
    </>
  );
};
