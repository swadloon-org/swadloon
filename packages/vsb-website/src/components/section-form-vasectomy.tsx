import { BlockMarkdown, Section } from '@newrade/core-gatsby-ui/src';
import { BoxV2, CommonComponentProps, getMergedClassname, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlockFormVasectomy } from './block-form-vasectomy';
import * as styleRefs from './section-form-vasectomy.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionFormVasectomy: React.FC<Props> = ({ id, style, className, section, subSections, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className]);
  const { cssTheme } = useTreatTheme();

  return (
    <Section className={classNames} variantLayout={'centerNoPadding'} style={{}}>
      <BoxV2
        style={{ width: `min(100%, 900px)` }}
        padding={[`calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x6})`, 0, cssTheme.sizing.var.x8]}
      >
        <Stack gap={[cssTheme.sizing.var.x5]}>
          <BlockMarkdown style={{ maxWidth: 800 }}>{section?.text?.childMdx?.body}</BlockMarkdown>
          <BlockFormVasectomy section={section} />
        </Stack>
      </BoxV2>
      <BoxV2
        className={styles.floating}
        alignItems={['flex-start']}
        padding={[`calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x6})`, cssTheme.sizing.var.x6, 0]}
      >
        <BlockMarkdown style={{ maxWidth: 800 }}>{subSections?.[0]?.text?.childMdx?.body}</BlockMarkdown>
      </BoxV2>
    </Section>
  );
};
