import { ICON } from '@newrade/core-design-system';
import { IconComp, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const IconsImportExample: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <IconComp name={ICON.ARROW_RIGHT} />
      <IconComp name={ICON.ARROW_LEFT} />
    </>
  );
};
