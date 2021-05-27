import { InputSelect, InputText, InputWrapper, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Inputs: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <InputWrapper>
        <InputText></InputText>
      </InputWrapper>
      <InputWrapper>
        <InputSelect></InputSelect>
      </InputWrapper>
    </>
  );
};
