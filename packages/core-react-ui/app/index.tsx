import React from 'react';
import ReactDOM from 'react-dom';

export function RootComponent() {
  return <div> Hello React</div>;
}

ReactDOM.hydrate(<RootComponent />, document.getElementById('app'));
