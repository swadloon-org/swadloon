import { BlockMarkdown } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  CommonComponentProps,
  getMergedClassname,
  Stack,
  Switcher,
  useIsSSR,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-contact.treat';
import { SectionProps } from './section.props';

const BlockGoogleMapVSB = React.lazy(() =>
  import('./block-google-map').then((comp) => ({ default: comp.BlockGoogleMapVSB }))
);

type Props = CommonComponentProps & SectionProps & {};

export const SectionContact: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const isSSR = useIsSSR();
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
      <Stack gap={[cssTheme.sizing.var.x5]} style={{ maxWidth: `min(600px, 100%)` }}>
        <BlockMarkdown>{section?.text?.childMdx?.body}</BlockMarkdown>
      </Stack>

      <BoxV2 style={{ width: `100%` }}>
        {!isSSR ? (
          <React.Suspense fallback={<div />}>
            <BlockGoogleMapVSB inView={true} />
          </React.Suspense>
        ) : null}
      </BoxV2>
    </Switcher>
  );
};
