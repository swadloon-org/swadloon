import { MarkdownRenderer } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  Center,
  CommonComponentProps,
  getMergedClassname,
  Stack,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui';
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
    <Center id={id} style={style} className={classNames}>
      <BoxV2 padding={[cssTheme.sizing.var.x7, 0]} justifyContent={['center']}>
        <Switcher
          gap={[cssTheme.sizing.var.x5, cssTheme.sizing.var.x6]}
          alignItems={['center']}
          style={{ width: `100%` }}
        >
          <Stack gap={[cssTheme.sizing.var.x5]} style={{ maxWidth: `min(480px, 100%)` }} key={'2'}>
            <MarkdownRenderer>{section?.text?.childMdx?.body}</MarkdownRenderer>

            {section?.costItems?.map((item, index) => {
              return <div key={index}>{item?.title}</div>;
            })}
          </Stack>
        </Switcher>
      </BoxV2>
    </Center>
  );
};
