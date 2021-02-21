import { BlockMarkdown, Section, SectionLayout, SectionPadding } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  CommonComponentProps,
  getMergedClassname,
  Stack,
  useIsSSR,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-form-vasectomy.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

const BlockFormVasectomy = React.lazy(() =>
  import('./block-form-vasectomy').then((comp) => ({ default: comp.BlockFormVasectomy }))
);

export const SectionFormVasectomy: React.FC<Props> = ({ id, style, className, section, subSections, ...props }) => {
  const isSSR = useIsSSR();
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className]);
  const { cssTheme } = useTreatTheme();

  return (
    <Section id={id} className={classNames} variantLayout={SectionLayout.center} variantPadding={SectionPadding.none}>
      <Stack>
        <BoxV2
          style={{ width: `min(100%, 900px)` }}
          padding={[`calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x6})`, 0, cssTheme.sizing.var.x8]}
        >
          <Stack gap={[cssTheme.sizing.var.x5]}>
            <BlockMarkdown style={{ maxWidth: 800 }}>{section?.text?.childMdx?.body}</BlockMarkdown>

            <BoxV2 className={styles.asideDesktop} alignItems={['flex-start']}>
              <Stack gap={[cssTheme.sizing.var.x5]}>
                <BlockMarkdown style={{ maxWidth: 800 }}>{subSections?.[0]?.text?.childMdx?.body}</BlockMarkdown>

                {!isSSR ? (
                  <iframe
                    width="100%"
                    height="auto"
                    style={{
                      width: '100%',
                      height: 'max(400px, 30vh)',
                    }}
                    src="https://www.youtube-nocookie.com/embed/TUOOuijeyZA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : null}
              </Stack>
            </BoxV2>

            {!isSSR ? (
              <React.Suspense fallback={<div />}>
                <BlockFormVasectomy section={section} />
              </React.Suspense>
            ) : null}
          </Stack>
        </BoxV2>
      </Stack>
    </Section>
  );
};
