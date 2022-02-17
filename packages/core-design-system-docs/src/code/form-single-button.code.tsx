import React from 'react';

import { HEADING, Variant } from '@newrade/core-design-system';
import {
  Button,
  Heading,
  InputLabel,
  InputText,
  InputWrapper,
  Stack,
  Switcher,
} from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const FormSingleButton: React.FC<Props> = (props) => {
  return (
    <>
      <Stack gap={[sizeVars.x4]}>
        <Heading variant={HEADING.h4}>Contact</Heading>
        <Stack gap={[sizeVars.x3]}>
          <Switcher gap={[sizeVars.x3]}>
            <InputWrapper>
              <InputLabel htmlFor={'firstName'}>First Name</InputLabel>
              <InputText name="firstName" autoComplete="given-name" placeholder={''} />
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor={'lastName'}>Last Name</InputLabel>
              <InputText name="firstName" autoComplete="given-name" placeholder={''} />
            </InputWrapper>
          </Switcher>
          <InputWrapper>
            <InputLabel htmlFor={'email'}>Email</InputLabel>
            <InputText name="email" autoComplete="given-name" placeholder={''} />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor={'company'}>Company (optional)</InputLabel>
            <InputText name="company" autoComplete="given-name" placeholder={''} />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor={'message'}>Message</InputLabel>
            <InputText name="message" autoComplete="given-name" placeholder={''} />
          </InputWrapper>
          <Button variant={Variant.primary}>Send</Button>
        </Stack>
      </Stack>
    </>
  );
};
