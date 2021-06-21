import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { Providers } from './context/providers';

export function RootComponent() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

const rootNode = document.getElementById('index');

ReactDOM.render(<RootComponent />, rootNode);
// ReactDOM.hydrate(<RootComponent />, document.getElementById('index'));
