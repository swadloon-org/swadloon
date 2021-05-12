import { lazy } from '@loadable/component';
import { Variant } from '@newrade/core-design-system';
import {
  BlockRenderer,
  SectionBase,
  SectionBaseLayout,
  SectionPadding,
  SectionProps,
} from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  CommonComponentProps,
  Stack,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import type { BlockFormVasectomyProps } from '../blocks/block-form-vasectomy';
import { blockComponents } from '../templates/contentful-page.template';
import * as styleRefs from './section-form-vasectomy.treat';

type Props = CommonComponentProps & SectionProps & {};

const BlockFormVasectomy = lazy<BlockFormVasectomyProps>(() => {
  return import('../blocks/block-form-vasectomy').then((component) => component.BlockFormVasectomy);
});

export const CustomSectionFormVasectomy = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.center,
        padding = SectionPadding.none,
        blocks,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.center,
        padding: SectionPadding.large,
      },
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(styleRefs);
    const { cssTheme } = useTreatTheme();
    const isSSR = useIsSSR();
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.wrapper, className],
      ...props,
    });

    return (
      <SectionBase
        {...commonProps}
        section={{
          variant,
          baseLayout,
          padding,
        }}
        ref={ref}
      >
        <Stack>
          <BoxV2
            style={{ width: `min(100%, 900px)` }}
            padding={[
              `calc(${cssTheme.layout.var.navbarHeight} + ${cssTheme.sizing.var.x6})`,
              0,
              cssTheme.sizing.var.x8,
            ]}
          >
            <Stack gap={[cssTheme.sizing.var.x5]}>
              {/**
               *  manually map each block to a specific area
               */}
              {blocks?.map((block, index) => {
                if (index === 0) {
                  return (
                    <BlockRenderer key={index} blockComponents={blockComponents} block={block} />
                  );
                }

                if (index === 1) {
                  return (
                    <BoxV2 key={index} className={styles.asideDesktop} alignItems={['flex-start']}>
                      <Stack gap={[cssTheme.sizing.var.x5]}>
                        <BlockRenderer
                          blockComponents={blockComponents}
                          key={index}
                          block={block}
                        />

                        {!isSSR ? (
                          <iframe
                            height="auto"
                            style={{
                              width: 'min(700px, 100%)',
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
                  );
                }

                if (index === 2 && block?.type !== 'customVasectomyForm') {
                  return (
                    <React.Fragment key={index}>
                      <BlockRenderer blockComponents={blockComponents} block={block} />
                    </React.Fragment>
                  );
                }

                if (index === 3 && block?.type === 'customVasectomyForm') {
                  return (
                    <React.Fragment key={index}>
                      {!isSSR ? (
                        <React.Suspense fallback={<div />}>
                          <BlockFormVasectomy block={block} />
                        </React.Suspense>
                      ) : null}
                    </React.Fragment>
                  );
                }

                return null;
              })}
            </Stack>
          </BoxV2>
        </Stack>
      </SectionBase>
    );
  }
);
