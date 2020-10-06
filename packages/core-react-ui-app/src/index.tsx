import React from 'react';
import ReactDOM from 'react-dom';
import { TreatProvider } from 'react-treat';
import { App } from './app';
import { light } from './design-system/themes.treat';

export function RootComponent() {
  return (
    <TreatProvider theme={light}>
      {/* <ThemeProvider theme={{}}> */}
      <App />
      {/* </ThemeProvider> */}
    </TreatProvider>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('app'));
