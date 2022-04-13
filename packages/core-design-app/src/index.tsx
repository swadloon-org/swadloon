import React from 'react';
import { createRoot } from 'react-dom/client';
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

if (container) {
  const root = createRoot(container);
  root.render(<RootComponent />);
}
