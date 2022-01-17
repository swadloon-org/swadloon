import * as React from 'react';

import { render } from '@testing-library/react';

export function renderTest(Component: any) {
  return render(<div>{Component}</div>);
}
