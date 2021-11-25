import * as React from 'react';
import { TreatProvider } from 'react-treat';

import { render } from '@testing-library/react';

import { light } from './test-theme.treat';

export function renderTest(Component: any) {
  return render(<TreatProvider theme={light}>{Component}</TreatProvider>);
}
