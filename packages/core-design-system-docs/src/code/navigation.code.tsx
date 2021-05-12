import { LogoPlaceholder } from '@newrade/core-gatsby-ui/src/docs-components/logo-placeholder';
import { Label, NavBar, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Navigation: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <NavBar
        style={{ position: 'relative' }}
        MobileSvgLogo={<LogoPlaceholder height={'30px'} />}
        DesktopSvgLogo={<LogoPlaceholder height={'40px'} />}
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
