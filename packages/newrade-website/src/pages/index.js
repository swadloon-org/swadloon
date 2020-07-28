import React from 'react';

import * as ds from 'diez-newrade-diez';

export default function Home() {
  return <pre>{JSON.stringify(new ds.DesignLanguage(), null, 2)}</pre>;
}
