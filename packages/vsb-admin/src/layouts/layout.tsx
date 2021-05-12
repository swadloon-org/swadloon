import { useAuth0 } from '@auth0/auth0-react';
import { DesktopSideBar, Link, Main, MainWrapper, NavBar } from '@newrade/core-react-ui';
import React, { useEffect, useState } from 'react';
import { Auth } from '../auth/auth';
import LogoSymbol from '../images/logo-symbol.svg';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  /**
   * Auth0
   */
  const { isAuthenticated, logout, isLoading, user, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  function handleLogout(event: any) {
    logout({ returnTo: window.location.href });
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
        MenuLinks={<Link onClick={handleLogout}>Déconnexion</Link>}
      ></NavBar>
      <DesktopSideBar>Hey</DesktopSideBar>
      <Main minHeight={true} navbarPadding={true} desktopSidebarPadding={true}>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        {props.children}
      </Main>
    </MainWrapper>
  ) : (
    <Auth></Auth>
  );
};
