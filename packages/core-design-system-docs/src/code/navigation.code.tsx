import { Label, NavBar, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { LogoPlaceholder } from '../utils/logo-placeholder';

type Props = {};

export const Navigation: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <NavBar
        style={{ position: 'relative' }}
        MobileSvgLogo={<LogoPlaceholder height={'100%'} />}
        DesktopSvgLogo={<LogoPlaceholder height={'100%'} />}
        MenuLinks={
          <>
            <Label>Services</Label>
            <Label>Technologies</Label>
            <Label>Agence</Label>
            <Label>Contact</Label>
          </>
        }
      />
    </>
  );
};
