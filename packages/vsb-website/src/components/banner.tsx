import { Background, Center, Stack, Title, useTreatTheme, Button } from '@newrade/core-react-ui';
import { IFluidObject } from 'gatsby-background-image';
import { gsap, TweenMax } from '@newrade/core-gsap-ui';
import React, { useRef, useEffect } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './banner.treat';
import { ButtonIcon, ButtonVariant, ButtonSize } from '@newrade/core-design-system';

import ScrollToPlugin from '@newrade/core-gsap-ui/lib/plugins/ScrollToPlugin';
import { gradient } from '../styles/effects.styles';

gsap.registerPlugin(ScrollToPlugin);

type OwnProps = SectionFragment;

export const Banner: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const ref = useRef<HTMLDivElement>(null);
  const hasImage = !!props?.medias?.medias?.length;
  const backgroundPosition = props.backgroundPosition;
  const imageData: any = props?.medias?.medias?.[0]?.desktopFluidImage;

  /**
   * Icon animation
   */
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const tween = TweenMax.to(ref.current.getElementsByClassName(styles.icon), {
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
    <div className={`${styles.wrapper}`} ref={ref}>
      {hasImage ? (
        <Background
          effects={[
            {
              background: gradient,
            },
          ]}
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
              <Title>{props.title?.trim()}</Title>
              {props.subtitle ? <Title>{props.subtitle?.trim()}</Title> : null}

              <div ref={ref} className={styles.icon}>
                <Button
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
