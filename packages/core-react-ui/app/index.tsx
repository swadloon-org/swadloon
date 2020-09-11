import React from 'react';
import ReactDOM from 'react-dom';

export function RootComponent() {
  return <div> Hello React</div>;
}

ReactDOM.render(<RootComponent />, document.getElementById('app'));
