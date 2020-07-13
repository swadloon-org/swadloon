import React, { useCallback, useState, useEffect } from 'react';
import { Diez, DesignLanguage } from 'diez-newrade-diez';

const App = () => {
  const [ds, setDs] = useState();
  const diez = new Diez(DesignLanguage);

  console.log(ds);

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
      <h1 style={{ ...ds.typography.headings.heading1.style }}>hello world</h1>
    </div>
  );
};

export default App;
