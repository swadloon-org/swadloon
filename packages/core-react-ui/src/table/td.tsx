// TODO

// table	Table
// thead	Table head
// tbody	Table body
// tr	Table row
// td/th	Table cell

import React from 'react';

type Props = {};

export const Td: React.FC<Props> = (props) => {
  return <td>{props.children}</td>;
};
