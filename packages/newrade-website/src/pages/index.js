import React, { useState, useEffect } from 'react';

import { Diez, DesignLanguage } from 'diez-newrade-diez';
import { Button } from 'core-react-ui';
import { TreatProvider } from 'react-treat';

import { lightTheme } from '../themes/light-theme.treat';

export default function Home() {
  const [ds, setDs] = useState();
  const diez = new Diez(DesignLanguage);

  useEffect(() => {
    // Here we are observing hot updates to our design language.
    //
    // Since this instance of Diez was initialized with DesignLanguage, it will deliver updates to the DesignLanguage
    // object described in `src/DesignLanguage.ts` (relative to the root of the Diez project).
    diez.attach(setDs);
  }, []);

  if (typeof ds === 'undefined') {
    return null;
  }

  return (
    <div>
      <TreatProvider theme={lightTheme}>
        <Button>Hello</Button>
        <pre>{JSON.stringify(ds.ds.themes.light.colors.primary, null, 2)}</pre>
      </TreatProvider>
    </div>
  );
}
