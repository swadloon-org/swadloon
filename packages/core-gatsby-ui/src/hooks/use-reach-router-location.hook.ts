import React from 'react';

import { globalHistory } from '@reach/router';

export function useReachRouterLocation() {
  const [location, setLocation] = React.useState(globalHistory.location);

  React.useEffect(
    () => globalHistory.listen((params) => setLocation(params.location)),
    [globalHistory]
  );

  return location;
}
