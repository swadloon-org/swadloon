import { HEADING, Variant } from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  Heading,
  InputLabel,
  InputText,
  InputWrapper,
  Stack,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const FormGroupedButtons: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h4}>Contact</Heading>
        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Switcher gap={[cssTheme.sizing.var.x3]}>
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
          <Cluster wrap={true} gap={[cssTheme.sizing.var.x2]} justifyContent={['flex-start']}>
            <Button variant={Variant.secondary}>Cancel</Button>
            <Button variant={Variant.primary}>Send</Button>
          </Cluster>
        </Stack>
      </Stack>
    </>
  );
};
