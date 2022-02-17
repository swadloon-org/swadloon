import React from 'react';

import { InputSelect, InputText, InputWrapper } from '@newrade/core-react-ui';

type Props = {};

export const InputsSize: React.FC<Props> = (props) => {
  return (
    <>
      <InputWrapper>
        <InputText placeholder={'Placeholder'} />
      </InputWrapper>

      <InputWrapper>
        <InputSelect placeholder={'Choose value'}>
          <option value={'normal'}>Normal</option>
          <option value={'reversed'}>Reversed</option>
        </InputSelect>
      </InputWrapper>
    </>
  );
};
