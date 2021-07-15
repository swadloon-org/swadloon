import { InputSelect, InputText, InputWrapper, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

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
