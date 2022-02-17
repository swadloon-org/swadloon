import React from 'react';

import { ICON } from '@newrade/core-design-system';
import { IconComp } from '@newrade/core-react-ui';

type Props = {};

export const IconsImportExample: React.FC<Props> = (props) => {
  return (
    <>
      <IconComp name={ICON.ARROW_RIGHT} />
      <IconComp name={ICON.ARROW_LEFT} />
    </>
  );
};
