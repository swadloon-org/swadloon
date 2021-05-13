import { useAuth0 } from '@auth0/auth0-react';
import { ButtonSize, PARAGRAPH_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import {
  Button,
  DesktopSideBar,
  Label,
  Link,
  Main,
  MainWrapper,
  NavBar,
  Paragraph,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { useCheckAPIStatus } from '@newrade/vsb-common/lib/index-browser';
import React, { useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { clientEnv } from '../../types/dot-env-client';
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

  useEffect(() => {
    if (isAuthenticated && user) {
      const getUserMetadata = async () => {
        const domain = 'vsb.us.auth0.com';

        try {
          const accessToken = await getAccessTokenSilently({
            audience: `https://api.vasectomie-pierre-boucher.ca/`,
            scope: 'read:current_user read:patients',
          });
          const response = await fetch(`/api/patients`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const payload = await response.json();
          console.log(payload);
        } catch (e) {
          console.log(e.message);
        }
      };

      getUserMetadata();
    }
  }, [isAuthenticated, user, getAccessTokenSilently, isLoading]);

  return isAuthenticated || isLoading ? (
    <MainWrapper>
      <NavBar
        MobileSvgLogo={<LogoSymbol />}
        DesktopSvgLogo={<LogoSymbol />}
        maxWidth={'100%'}
        MenuLinks={
          <>
            {user?.email ? <Label>{user?.email}</Label> : null}
            <Link onClick={handleLogout}>Déconnexion</Link>
          </>
        }
      ></NavBar>
      <DesktopSideBar>Hey</DesktopSideBar>
      <Main minHeight={true} navbarPadding={true} desktopSidebarPadding={true}>
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

          <Button size={ButtonSize.large} style={{ width: `100%` }} onClick={handleAuth0Connection}>
            Connexion
          </Button>

          <Paragraph
            variant={PARAGRAPH_SIZE.small}
            variantLevel={Variant.secondary}
            style={{ justifySelf: `center` }}
          >
            v{clientEnv.APP_VERSION}
          </Paragraph>
          {apiStatus ? (
            <Paragraph
              variantStyle={TEXT_STYLE.bold}
              variant={PARAGRAPH_SIZE.small}
              variantLevel={Variant.secondary}
              style={{ justifySelf: `center` }}
            >
              État système :{' '}
              {apiStatus === 'en ligne' ? (
                <span className={styles.status}>OK</span>
              ) : (
                <span>Error</span>
              )}
            </Paragraph>
          ) : null}
        </div>
      </Main>
    </MainWrapper>
  );
};
