import { Variant } from '@newrade/core-design-system';
import { Tag, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Tags: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Tag variant={Variant.primary}>Tag</Tag>
    </>
  );
};
