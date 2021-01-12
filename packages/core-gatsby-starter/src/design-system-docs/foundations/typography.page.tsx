import { HEADING, LABEL_SIZE, PARAGRAPH_SIZE, TEXT_LEVEL, TEXT_STYLE, TITLE } from '@newrade/core-design-system';
import {
  BoxV2,
  Details,
  Heading,
  keys,
  Label,
  Paragraph,
  Stack,
  Summary,
  Title,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { title } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { FontShowcase } from '../utils/font-showcase';
import { lorenipsum } from '../utils/loren-ipsum';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'design-system'} gap={[cssTheme.sizing.var.x5]}>
      <Stack id={'typography'} gap={[cssTheme.sizing.var.x5]}>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Typography</Heading>

          <Paragraph>Fonts, titles, headings...</Paragraph>
        </Stack>

        <Details id={'fonts'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Fonts</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <FontShowcase></FontShowcase>
            </Stack>
          </BoxV2>
        </Details>

        <Details id={'titles'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Titles</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <Stack gap={[cssTheme.sizing.var.x3]}>
              {keys(TITLE).map((variant, index) => (
                <Title key={index} variant={TITLE[variant]}></Title>
              ))}
            </Stack>
          </BoxV2>
        </Details>

        <Details id={'headings'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Headings</Heading>
          </Summary>

          <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
            <Stack gap={[cssTheme.sizing.var.x3]}>
              {keys(HEADING).map((variant, index) => (
                <Heading key={index} variant={HEADING[variant]}></Heading>
              ))}
            </Stack>
          </BoxV2>
        </Details>

        <Details id={'labels'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Labels</Heading>
          </Summary>

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
        </Details>

        <Details id={'paragraphs'} open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Paragraphs</Heading>
          </Summary>

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
        </Details>
      </Stack>
    </Stack>
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
