import React from 'react';

import { InputSelect, InputText, InputWrapper, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const InputsSize: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <InputWrapper>
        <InputText placeholder={'Placeholder'} />
      </InputWrapper>

      <InputWrapper>
        <InputSelect />
      </InputWrapper>
    </>
  );
};
