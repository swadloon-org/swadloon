import { useAuth0 } from '@auth0/auth0-react';
import { ButtonIcon, ButtonSize, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import {
  BoxV2,
  Button,
  DesktopSideBar,
  Label,
  Main,
  MainWrapper,
  NavBarApp,
  NavItem,
  Paragraph,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { useCheckAPIStatus } from '@newrade/vsb-common/lib/index-browser';
import { IoExitOutline } from '@react-icons/all-files/io5/IoExitOutline';
import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { clientEnv } from '../../types/dot-env-client';
import { StatusIndicator, StatusIndicatorMobile } from '../components/status-indicator';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import { Patients } from '../patients/patients';
import * as styleRefs from './layout.treat';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  /**
   * vsb-api
   */
  const [apiStatus] = useCheckAPIStatus();

  /**
   * Auth0
   */
  const {
    isAuthenticated,
    logout,
    isLoading,
    user,
    getAccessTokenSilently,
    loginWithRedirect,
  } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  function handleLogout(event: any) {
    logout({ returnTo: window.location.href });
  }

  function handleAuth0Connection(event: any) {
    loginWithRedirect({
      redirectUri: window.location.href,
    });
  }

  return isAuthenticated || isLoading ? (
    <MainWrapper>
      <NavBarApp
        MobileSvgLogo={<LogoSymbol />}
        DesktopSvgLogo={<LogoSymbol />}
        MobileMenuLinks={
          <>
            <StatusIndicatorMobile apiStatus={apiStatus} />

            <Button
              variant={Variant.tertiary}
              collapsePadding={'right'}
              icon={ButtonIcon.icon}
              Icon={<IoExitOutline />}
              onClick={handleLogout}
            >
              Déconnexion
            </Button>
          </>
        }
        DesktopMenuLinks={
          <>
            {user?.email ? <Label variantLevel={Variant.secondary}>{user?.email}</Label> : null}

            <StatusIndicator apiStatus={apiStatus} />

            <Button
              size={ButtonSize.small}
              variant={Variant.tertiary}
              collapsePadding={'left'}
              onClick={handleLogout}
            >
              Déconnexion
            </Button>
          </>
        }
      ></NavBarApp>

      <DesktopSideBar>
        <BoxV2
          padding={[cssTheme.sizing.var.x2, 0, cssTheme.sizing.var.x6]}
          style={{ flexDirection: 'column', backgroundColor: cssTheme.colors.colors.grey[0] }}
          justifyContent={['flex-start']}
          alignItems={['stretch']}
        >
          <Stack gap={[cssTheme.sizing.var.x4]}>
            <Stack gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
              <Stack>
                <NavItem active={true}>Patients</NavItem>
              </Stack>
            </Stack>
          </Stack>
        </BoxV2>
      </DesktopSideBar>

      <Main
        minHeight={false}
        navbarPadding={false}
        desktopSidebarPadding={true}
        className={styles.main}
      >
        <Patients />
      </Main>
    </MainWrapper>
  ) : (
    <MainWrapper className={styles.wrapper}>
      <Main
        fullHeight={true}
        navbarPadding={false}
        desktopSidebarPadding={false}
        className={styles.wrapper}
      >
        <div className={styles.loginWrapper}>
          <Logo className={styles.logo} />

          <Paragraph>Veuillez vous connecter pour accéder à l&apos;application</Paragraph>

          <Button
            disabled={isLoading}
            size={ButtonSize.large}
            style={{ width: `100%` }}
            onClick={handleAuth0Connection}
          >
            Connexion
          </Button>

          <Paragraph
            variant={PARAGRAPH_SIZE.small}
            variantLevel={Variant.secondary}
            style={{ justifySelf: `center` }}
          >
            v{clientEnv.APP_VERSION}
          </Paragraph>

          <StatusIndicator apiStatus={apiStatus} />
        </div>
      </Main>
    </MainWrapper>
  );
};
