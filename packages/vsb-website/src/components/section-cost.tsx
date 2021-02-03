import { MarkdownRenderer } from '@newrade/core-gatsby-ui/src';
import { CommonComponentProps, getMergedClassname, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-contact.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionCost: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const styles = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className]);
  const { cssTheme } = useTreatTheme();

  return (
    <Stack className={classNames} gap={[cssTheme.sizing.var.x5]}>
      <MarkdownRenderer>{section?.text?.childMdx?.body}</MarkdownRenderer>

      {section?.costItems?.map((item, index) => {
        return <div key={index}>{item?.title}</div>;
      })}
    </Stack>
  );
};
