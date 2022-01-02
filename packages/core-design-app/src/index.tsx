import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Providers } from './providers/providers';
import { App } from './app';

export function RootComponent() {
  return (
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  );
}

const container = document.getElementById('index');

// @ts-ignore
const root = ReactDOM.createRoot(container);

root.render(<RootComponent />);
