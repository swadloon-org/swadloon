import { useAuth0 } from '@auth0/auth0-react';
import { Button, Center, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './auth.treat';

export function Auth() {
  const styles = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  /**
   * Auth0
   */
  const { loginWithRedirect } = useAuth0();

  function handleAuth0Connection(event: any) {
    loginWithRedirect({
      redirectUri: window.location.href,
    });
  }

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Button onClick={handleAuth0Connection}>Connexion</Button>
      </Stack>
    </Center>
  );
}
