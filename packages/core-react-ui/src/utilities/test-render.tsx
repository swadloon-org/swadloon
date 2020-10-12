import * as React from 'react';
import { render } from '@testing-library/react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

export function renderTest(Component: any) {
  return render(<TreatProvider theme={light}>{Component}</TreatProvider>);
}
