import React from 'react';

import { DoDont } from '@newrade/core-react-ui';

type Props = {};

export const DoDonts: React.FC<Props> = (props) => {
  return (
    <>
      <DoDont kind={'do'}>Yes</DoDont>
      <DoDont kind={'dont'}>No</DoDont>
    </>
  );
};
