import { globalHistory } from '@reach/router';
import React from 'react';

export function useLocation() {
  const [location, setLocation] = React.useState(globalHistory.location);

  React.useEffect(() => globalHistory.listen((params) => setLocation(params.location)), [setLocation]);

  return location;
}
