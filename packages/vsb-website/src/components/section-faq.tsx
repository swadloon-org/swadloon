import { MarkdownRenderer } from '@newrade/core-gatsby-ui/src';
import { BoxV2, CommonComponentProps, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-faq.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionFaq: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();

  if (!section) {
    return null;
  }

  return (
    <BoxV2 className={`${styles.wrapper}`}>
      <Stack gap={[cssTheme.sizing.var.x7]}>
        <MarkdownRenderer className={styles.content}>{section.text?.childMdx?.body}</MarkdownRenderer>
      </Stack>
    </BoxV2>
  );
};
