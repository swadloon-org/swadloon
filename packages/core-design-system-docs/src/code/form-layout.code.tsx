import React from 'react';

import { LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { Button, InputLabel, InputText, InputWrapper, Label, Stack } from '@newrade/core-react-ui';

type Props = {};

export const FormLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Stack gap={[sizeVars.x3]}>
        <InputWrapper>
          <InputLabel htmlFor={'label'}>Label</InputLabel>
          <Label variantStyle={TEXT_STYLE.normal} variant={LABEL_SIZE.xSmall}>
            Helper Text
          </Label>
          <InputText
            name="placeholderText"
            autoComplete="given-name"
            placeholder={'Placeholder Text'}
          />
          <Label variant={LABEL_SIZE.xSmall}> Validation</Label>
        </InputWrapper>

        <Button variant={Variant.primary}>Action</Button>
      </Stack>
    </>
  );
};
