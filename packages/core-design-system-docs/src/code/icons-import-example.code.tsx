import { ICON } from '@newrade/core-design-system';
import { Icon, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const IconsImportExample: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Icon name={ICON.ARROW_UP} />
      <Icon name={ICON.ARROW_RIGHT} />
    </>
  );
};
