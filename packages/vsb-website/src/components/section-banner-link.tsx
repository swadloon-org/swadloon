import { ButtonIcon, ButtonSize, HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import {
  Background,
  Button,
  Center,
  CommonComponentProps,
  Heading,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import { IFluidObject } from 'gatsby-background-image';
import React, { useRef } from 'react';
import { useStyles } from 'react-treat';
import { gradient } from '../styles/effects.styles';
import { CustomSectionProps } from './custom-section.props';
import * as styleRefs from './section-banner-link.treat';

type Props = CommonComponentProps & CustomSectionProps;

export const SectionBannerLink: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const ref = useRef<HTMLDivElement>(null);
  const backgroundPosition = section?.backgroundPosition;
  const imageData = section?.medias?.medias?.[0]?.desktopFluidImage?.childImageSharp?.fluid;
  const hasImage = !!section?.medias?.medias?.length;

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
          backgroundImage={{
            Tag: 'div',
            fluid: imageData as IFluidObject,
            style: { backgroundPositionY: backgroundPosition || '' },
            fadeIn: false,
          }}
        >
          <Center contentClassName={styles.textContainer}>
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Stack
                gap={[
                  `${cssTheme.typography.headings.mobile.h1.lineGap}px`,
                  `${cssTheme.typography.headings.tablet.h1.lineGap}px`,
                  `${cssTheme.typography.headings.desktop.h1.lineGap}px`,
                ]}
              >
                <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.primaryReversed}>
                  {section?.title?.trim()}
                </Heading>
                {section?.subtitle ? (
                  <Heading variant={HEADING.h3} variantLevel={TEXT_LEVEL.primaryReversed}>
                    {section?.subtitle.trim()}
                  </Heading>
                ) : null}
              </Stack>

              <Button
                size={ButtonSize.large}
                icon={ButtonIcon.right}
                Icon={<IoArrowForwardOutline />}
                AsElement={<GatsbyLink to={section?.link?.page?.slug || ''} />}
              >
                {section?.link?.label}
              </Button>
            </Stack>
          </Center>
        </Background>
      ) : null}
    </div>
  );
};
