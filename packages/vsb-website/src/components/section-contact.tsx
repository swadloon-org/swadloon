import { MarkdownRenderer } from '@newrade/core-gatsby-ui/src';
import { CommonComponentProps, getMergedClassname, Stack, Switcher, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { GoogleMapVSB } from './google-map';
import * as styleRefs from './section-contact.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionContact: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const styles = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className]);
  const { cssTheme } = useTreatTheme();

  return (
    <Switcher
      gap={[cssTheme.sizing.var.x5, cssTheme.sizing.var.x6]}
      alignItems={['center']}
      style={{ width: `100%` }}
      className={classNames}
    >
      <Stack gap={[cssTheme.sizing.var.x5]} style={{ maxWidth: `min(480px, 100%)` }} key={'2'}>
        <MarkdownRenderer>{section?.text?.childMdx?.body}</MarkdownRenderer>

        <GoogleMapVSB inView={true} />

        {/* <Form>
              <FormWrapper>
                <InputLabel required={true}>First Name *</InputLabel>
                <InputText ref={firstNameInput}></InputText>
                <InputError></InputError>
              </FormWrapper>

              <FormWrapper>
                <InputLabel required={true}>First Name *</InputLabel>
                <InputDropdown ref={firstNameInput}></InputDropdown>
                <InputError></InputError>
              </FormWrapper>
            </Form> */}
      </Stack>
    </Switcher>
  );
};
