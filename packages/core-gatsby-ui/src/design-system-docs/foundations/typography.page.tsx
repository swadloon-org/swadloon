/* eslint-disable react/jsx-no-undef */
import { HEADING, LABEL_SIZE, PARAGRAPH_SIZE, TEXT_STYLE, TITLE } from '@newrade/core-design-system';
import { BoxV2, Heading, keys, Label, Paragraph, Stack, Title, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { FontShowcase } from '../utils/font-showcase';
import { lorenipsum } from '../utils/loren-ipsum';
import { PageHeader } from '../utils/page-header';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Typography'}>Fonts, titles, headings...</PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Fonts</Heading>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <Stack gap={[cssTheme.sizing.var.x4]}>
            <FontShowcase></FontShowcase>
          </Stack>
        </BoxV2>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Titles</Heading>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            {keys(TITLE).map((variant, index) => (
              <Title key={index} variant={TITLE[variant]}></Title>
            ))}
          </Stack>
        </BoxV2>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Headings</Heading>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            {keys(HEADING).map((variant, index) => (
              <Heading key={index} variant={HEADING[variant]}></Heading>
            ))}
          </Stack>
        </BoxV2>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Labels</Heading>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            {keys(LABEL_SIZE).map((variant, index) => (
              <Label key={index} variant={LABEL_SIZE[variant]}></Label>
            ))}

            {keys(TEXT_STYLE)
              .filter((style) => cssTheme.typography.labels.styles[style])
              .map((variant, index) => (
                <Label key={index} variantStyle={TEXT_STYLE[variant]}></Label>
              ))}
          </Stack>
        </BoxV2>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Paragraphs</Heading>

        <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            {keys(PARAGRAPH_SIZE).map((variant, index) => (
              <Paragraph key={index} variant={PARAGRAPH_SIZE[variant]}>
                {lorenipsum}
              </Paragraph>
            ))}

            {keys(TEXT_STYLE)
              .filter((style) => cssTheme.typography.paragraphs.styles[style])
              .map((variant, index) => (
                <Paragraph key={index} variantStyle={TEXT_STYLE[variant]}>
                  {lorenipsum}
                </Paragraph>
              ))}
          </Stack>
        </BoxV2>
      </Stack>
    </>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;
