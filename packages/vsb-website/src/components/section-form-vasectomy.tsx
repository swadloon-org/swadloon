import { BlockMarkdown, Section } from '@newrade/core-gatsby-ui/src';
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
import { BlockFormVasectomy } from './block-form-vasectomy';
import * as styleRefs from './section-form-vasectomy.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionFormVasectomy: React.FC<Props> = ({ id, style, className, section, subSections, ...props }) => {
  const isSSR = useIsSSR();
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([styles.wrapper, className]);
  const { cssTheme } = useTreatTheme();

  return (
    <Section id={id} className={classNames} variantLayout={'centerNoPadding'}>
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

            <BlockFormVasectomy section={section} />
          </Stack>
        </BoxV2>
      </Stack>
    </Section>
  );
};
