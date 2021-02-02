import {
  BoxV2,
  Center,
  CommonComponentProps,
  getMergedClassname,
  GlobalMarkdownCSS,
  Heading,
  Stack,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { useStyles } from 'react-treat';
import { HEADING } from '../../../core-design-system/src';
import * as styleRefs from './section-contact.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionContact: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const styles = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className]);
  const { cssTheme } = useTreatTheme();

  /**
   * Markdown
   */
  const hasMarkdown = !!section?.text?.childMdx?.body;
  const markdownData: any = section?.text?.childMdx?.body;

  return (
    <Center id={id} style={style} className={classNames}>
      <BoxV2 padding={[cssTheme.sizing.var.x7, 0]} justifyContent={['center']}>
        <Switcher
          gap={[cssTheme.sizing.var.x5, cssTheme.sizing.var.x6]}
          alignItems={['center']}
          style={{ width: `100%` }}
        >
          <Stack gap={[cssTheme.sizing.var.x5]} style={{ maxWidth: `min(480px, 100%)` }} key={'2'}>
            <Heading variant={HEADING.h1}>{section?.title}</Heading>

            {hasMarkdown ? (
              <GlobalMarkdownCSS>
                <MDXRenderer>{markdownData}</MDXRenderer>
              </GlobalMarkdownCSS>
            ) : null}

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
      </BoxV2>
    </Center>
  );
};
