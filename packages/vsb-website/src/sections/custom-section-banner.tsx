import { MDXProvider } from '@mdx-js/react';
import { ButtonIcon, ButtonSize, Variant } from '@newrade/core-design-system';
import {
  BackgroundImage,
  BlockRenderer,
  SectionBanner,
  SectionProps,
} from '@newrade/core-gatsby-ui/src';
import { TweenMax } from '@newrade/core-gsap-ui';
import {
  Button,
  CommonComponentProps,
  Title,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { mdxComponents, MDXProps } from '@newrade/core-react-ui/lib/markdown';
import { BlockAPI, SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import { IoChevronDownOutline } from '@react-icons/all-files/io5/IoChevronDownOutline';
import { IFluidObject } from 'gatsby-background-image';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { useStyles } from 'react-treat';
import { BlockFragment } from '../../types/graphql-types';
import { gradient } from '../styles/effects.styles';
import { blockComponents } from '../templates/contentful-page.template';
import * as styleRefs from './custom-section-banner.treat';

type Props = CommonComponentProps &
  SectionProps & {
    callout?: boolean;
    nextSectionButton?: boolean;
  };

export const CustomSectionBanner = React.forwardRef<any, Props>(
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
      callout,
      nextSectionButton = true,
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();
    const localRef = useRef<HTMLDivElement>(null);
    const commonProps = useCommonProps({ id, style, className, ...props });
    const customButtonRef = useRef<HTMLDivElement>(null);

    // merge local ref with forwarded
    useImperativeHandle(ref, () => ({
      current: localRef?.current,
    }));

    /**
     * Custom Button animation
     */
    useEffect(() => {
      if (!customButtonRef.current) {
        return;
      }

      const icon = customButtonRef.current;

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
    }, [customButtonRef, styles.icon]);

    function handleScrollToNextSection() {
      const wrapper = customButtonRef.current;
      if (!wrapper) {
        return;
      }

      const target = window.document.getElementById(`section-1`);

      if (!target) {
        return;
      }

      const tween = TweenMax.to(window, {
        duration: 1,
        delay: 0.2,
        ease: 'power2',
        scrollTo: {
          y: target,
          offsetY: theme.layout.navbarHeight.desktop,
        },
      });

      return () => {
        tween.kill();
      };
    }

    const CustomButton = (
      <div ref={customButtonRef} className={styles.icon}>
        <Button
          aria-label={'Next section'}
          size={ButtonSize.large}
          variant={Variant.tertiaryReversed}
          icon={ButtonIcon.icon}
          Icon={<IoChevronDownOutline />}
          onClick={handleScrollToNextSection}
        ></Button>
      </div>
    );

    if (!blocks?.length) {
      return null;
    }

    const imageBlock = blocks[0] as BlockFragment;
    const hasImage = !!imageBlock?.medias?.[0]?.medias?.length;
    const textBlock = blocks[1] as BlockFragment;

    if (!hasImage) {
      return null;
    }

    const imageData = imageBlock.medias?.[0]?.medias?.[0]?.media?.fluid;
    const backgroundPosition = imageBlock.medias?.[0]?.medias?.[0]?.backgroundPositionY;

    const BackgroundBlock = (
      <BackgroundImage
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
      ></BackgroundImage>
    );

    const ContentBlock = (
      <MDXProvider components={{ ...mdxComponents, h1: (props: MDXProps) => <Title {...props} /> }}>
        <BlockRenderer blockComponents={blockComponents} block={textBlock as BlockAPI} />
      </MDXProvider>
    );

    return (
      <SectionBanner
        ref={ref}
        BackgroundBlock={BackgroundBlock}
        ContentBlock={ContentBlock}
        section={{
          variant,
          baseLayout,
          padding,
        }}
        callout={callout}
        {...commonProps}
      >
        {nextSectionButton ? CustomButton : null}
      </SectionBanner>
    );
  }
);
