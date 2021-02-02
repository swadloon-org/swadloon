import { ButtonIcon, ButtonSize, ButtonVariant } from '@newrade/core-design-system';
import { TweenMax } from '@newrade/core-gsap-ui';
import { Background, Button, Center, CommonComponentProps, Stack, Title, useTreatTheme } from '@newrade/core-react-ui';
import { IoChevronDownOutline } from '@react-icons/all-files/io5/IoChevronDownOutline';
import { IFluidObject } from 'gatsby-background-image';
import React, { useEffect, useRef } from 'react';
import { useStyles } from 'react-treat';
import { gradient } from '../styles/effects.styles';
import * as styleRefs from './section-banner.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

export const SectionBanner: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const ref = useRef<HTMLDivElement>(null);
  const backgroundPosition = section?.backgroundPosition;
  const imageData = section?.medias?.medias?.[0]?.desktopFluidImage?.childImageSharp?.fluid;
  // const imageDataFixed = props?.medias?.medias?.[0]?.fixed?.childImageSharp?.fixed;
  const hasImage = !!section?.medias?.medias?.length;

  /**
   * Icon animation
   */
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const icon = ref.current.getElementsByClassName(styles.icon);

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

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => {
      tween.kill();
    };
  }, [ref.current]);

  function handleScrollToNextSection() {
    const wrapper = ref.current;
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

  return (
    <div id={id} style={style} className={`${styles.wrapper}`} ref={ref}>
      {hasImage ? (
        <Background
          effects={[
            {
              background: gradient,
            },
          ]}
          backgroundPosition={backgroundPosition}
          // src={imageDataFixed?.base64}
          backgroundImage={{
            Tag: 'div',
            fluid: imageData as IFluidObject,
            // fixed: imageDataFixed as IFixedObject,
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
              <Title>{section?.title?.trim()}</Title>
              {section?.subtitle ? <Title>{section?.subtitle.trim()}</Title> : null}

              <div ref={ref} className={styles.icon}>
                <Button
                  aria-label={'Next section'}
                  size={ButtonSize.large}
                  variant={ButtonVariant.tertiaryReversed}
                  icon={ButtonIcon.icon}
                  Icon={<IoChevronDownOutline />}
                  onPress={handleScrollToNextSection}
                ></Button>
              </div>
            </Stack>
          </Center>
        </Background>
      ) : null}
    </div>
  );
};
