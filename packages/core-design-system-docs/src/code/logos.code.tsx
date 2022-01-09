import React from 'react';

import { LOGO } from '@newrade/core-design-system';
import { Logo, SvgDownloader } from '@newrade/core-react-ui';
import { globalThemeLight } from '@newrade/core-react-ui/global';

type Props = {};

export const Logos: { [key in LOGO]: React.FC<Props> } = {
  [LOGO.STANDARD]: (props) => {
    return (
      <>
        <SvgDownloader filename={'logo-standard'}>
          <Logo name={LOGO.STANDARD} style={{ height: 100 }} />
        </SvgDownloader>
      </>
    );
  },
  [LOGO.SYMBOL]: (props) => {
    return (
      <>
        <SvgDownloader filename={'logo-symbol'}>
          <Logo name={LOGO.SYMBOL} style={{ height: 100 }} />
        </SvgDownloader>
      </>
    );
  },
  [LOGO.FAVICON]: (props) => {
    return (
      <>
        <SvgDownloader filename={'logo-favicon'}>
          <Logo
            name={LOGO.FAVICON}
            style={{ height: 32, width: 32 }}
            className={globalThemeLight}
          />
        </SvgDownloader>
      </>
    );
  },
  [LOGO.DEFS]: (props) => {
    return (
      <>
        <Logo name={LOGO.DEFS} />
      </>
    );
  },
};
