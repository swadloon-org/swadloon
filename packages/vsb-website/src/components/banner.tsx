import { Center, Stack, Title, useTreatTheme, Background } from '@newrade/core-react-ui';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React, { useRef } from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './banner.treat';

type OwnProps = SectionFragment;

export const Banner: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const hasImage = !!props?.medias?.medias?.length;
  const backgroundPosition = props.backgroundPosition;
  const imageData: any = props?.medias?.medias?.[0]?.desktopFluidImage;

  return (
    <div className={`${styles.wrapper}`}>
      {hasImage ? (
        <Background
          effects={[
            {
              background: `linear-gradient(rgb(0 0 0 / 30%) 0%, rgba(0, 0, 0, 0) 36%), linear-gradient(0deg, rgb(14 13 13 / 25%), rgba(14, 13, 13, 0.25))`,
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
              <Title>{props.title}</Title>
              {props.subtitle ? <Title>{props.subtitle}</Title> : null}
            </Stack>
          </Center>
        </Background>
      ) : null}
    </div>
  );
};
