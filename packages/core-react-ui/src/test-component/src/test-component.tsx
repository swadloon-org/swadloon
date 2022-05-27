import React from 'react';

import { base } from './test-component.css';

type Props = {
  name: string;
};

export const TestComponent: React.FC<Props> = (props) => {
  return <div className={base}>hello {props.name}</div>;
};
