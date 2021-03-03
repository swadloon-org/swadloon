import { MDXProvider } from '@mdx-js/react';
import { ButtonIcon, ButtonSize, Variant } from '@newrade/core-design-system';
import {
  BlockAPI,
  BlockRenderer,
  SectionBase,
  SectionBaseLayout,
  SectionPadding,
  SectionProps,
} from '@newrade/core-gatsby-ui/src';
import { TweenMax } from '@newrade/core-gsap-ui';
import {
  Background,
  Button,
  Center,
  CommonComponentProps,
  mdxComponents,
  MDXProps,
  Stack,
  Title,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { IoChevronDownOutline } from '@react-icons/all-files/io5/IoChevronDownOutline';
import { IFluidObject } from 'gatsby-background-image';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { useStyles } from 'react-treat';
import { BlockFragment } from '../../types/graphql-types';
import { gradient } from '../styles/effects.styles';
import { blockComponents } from '../templates/contentful-page.template';
import * as styleRefs from './section-banner.treat';

type Props = CommonComponentProps & SectionProps;

export const SectionBanner = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.fullWidth,
        padding = SectionPadding.none,
        blocks,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.fullWidth,
        padding: SectionPadding.none,
      },
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(styleRefs);
    const { cssTheme } = useTreatTheme();
    const localRef = useRef<HTMLDivElement>(null);
    const commonProps = useCommonProps({ id, style, className, classNames: [styles.wrapper], ...props });

    // merge local ref with forwarded
    useImperativeHandle(ref, () => ({
      current: localRef?.current,
    }));

    // icon animation
    useEffect(() => {
      if (!localRef.current) {
        return;
      }

      const icon = localRef.current.getElementsByClassName(styles.icon);

      if (!icon) {
        return;
      }

      const tween = TweenMax.to(icon, {
        duration: 1,
        y: -10,
        ease: `elastic.out(1, 0.4)`,
        yoyo: true,
        delay: 0,
        repeat: Infinity,
      });

      return () => {
        tween.kill();
      };
    }, [localRef, styles.icon]);

    function handleScrollToNextSection() {
      const wrapper = localRef.current;
      if (!wrapper) {
        return;
      }

      const target = window.document.getElementById(`section-1`);

      if (!target) {
        return;
      }

      TweenMax.to(window, {
        duration: 1,
        delay: 0.2,
        ease: 'power2',
        scrollTo: {
          y: target,
        },
      });
    }

    if (!blocks?.length) {
      return null;
    }

    const imageBlock = blocks[0] as BlockFragment;
    const textBlock = blocks[1] as BlockFragment;
    const hasImage = !!imageBlock?.medias?.[0]?.medias?.length;

    if (!hasImage) {
      return null;
    }

    const imageData = imageBlock.medias?.[0]?.medias?.[0]?.media?.fluid;
    const backgroundPosition = imageBlock.medias?.[0]?.medias?.[0]?.backgroundPositionY;

    return (
      <SectionBase
        {...commonProps}
        ref={localRef}
        section={{
          variant,
          baseLayout,
          padding,
        }}
      >
        <Background
          effects={[
            {
              background: gradient,
            },
          ]}
          backgroundPosition={backgroundPosition}
          backgroundImage={{
            Tag: 'div',
            fluid: imageData as IFluidObject,
            style: { backgroundPositionY: backgroundPosition || '' },
            fadeIn: false,
          }}
        >
          <Center contentClassName={styles.textContainer}>
            <Stack
              gap={[
                `${cssTheme.typography.titles.mobile.t1.lineGap}px`,
                `${cssTheme.typography.titles.tablet.t1.lineGap}px`,
                `${cssTheme.typography.titles.desktop.t1.lineGap}px`,
              ]}
            >
              <MDXProvider components={{ ...mdxComponents, h1: (props: MDXProps) => <Title {...props} /> }}>
                <BlockRenderer blockComponents={blockComponents} block={textBlock as BlockAPI} />
              </MDXProvider>
            </Stack>
          </Center>
        </Background>

        <div ref={ref} className={styles.icon}>
          <Button
            aria-label={'Next section'}
            size={ButtonSize.large}
            variant={Variant.tertiaryReversed}
            icon={ButtonIcon.icon}
            Icon={<IoChevronDownOutline />}
            onClick={handleScrollToNextSection}
          ></Button>
        </div>
      </SectionBase>
    );
  }
);
