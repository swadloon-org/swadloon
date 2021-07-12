import { LOGO } from '@newrade/core-design-system';
import { globalThemeLight, Logo, SvgDownloader, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Logos: { [key in LOGO]: React.FC<Props> } = {
  [LOGO.STANDARD]: (props) => {
    const { theme, cssTheme } = useTreatTheme();

    return (
      <>
        <SvgDownloader filename={'logo-standard'}>
          <Logo name={LOGO.STANDARD} style={{ height: 100 }} />
        </SvgDownloader>
      </>
    );
  },
  [LOGO.SYMBOL]: (props) => {
    const { theme, cssTheme } = useTreatTheme();

    return (
      <>
        <SvgDownloader filename={'logo-symbol'}>
          <Logo name={LOGO.SYMBOL} style={{ height: 100 }} />
        </SvgDownloader>
      </>
    );
  },
  [LOGO.FAVICON]: (props) => {
    const { theme, cssTheme } = useTreatTheme();

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
    const { theme, cssTheme } = useTreatTheme();

    return (
      <>
        <Logo name={LOGO.DEFS} />
      </>
    );
  },
};
