import { ButtonIcon, ButtonSize, ButtonVariant, HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import {
  Background,
  BoxV2,
  Button,
  CommonComponentProps,
  getMergedClassname,
  Heading,
  Paragraph,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import { gradient } from '../styles/effects.styles';
import * as styleRefs from './block-tile-link.treat';

type Props = CommonComponentProps & {
  section: SectionFragment;
  contentClassName?: string;
};

export const BlockTileLink: React.FC<Props> = ({ id, style, className, contentClassName, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const hasImage = !!section?.medias?.medias?.length;
  const imageData: any = section?.medias?.medias?.[0]?.desktopFluidImage?.childImageSharp?.fluid;
  const { cssTheme } = useTreatTheme();
  const mergedClassNames = getMergedClassname([styles.wrapper, className]);
  const mergedContentClassNames = getMergedClassname([styles.content, contentClassName]);

  return (
    <div className={mergedClassNames}>
      {hasImage ? (
        <Background
          effects={[
            {
              background: gradient,
            },
          ]}
          backgroundImage={{
            className: styles.container,
            Tag: 'div',
            fluid: imageData as IFluidObject,
            fadeIn: false,
          }}
        >
          <BoxV2
            className={mergedContentClassNames}
            padding={[cssTheme.sizing.var.x5, cssTheme.layout.var.contentMargins]}
            justifyContent={['flex-start']}
          >
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Heading variant={HEADING.h1} variantLevel={TEXT_LEVEL.primaryReversed} className={styles.text}>
                {section?.title}
              </Heading>

              <Paragraph>{section?.subtitle}</Paragraph>

              <Button
                size={ButtonSize.large}
                variant={
                  section?.variant === 'PRIMARY_NORMAL'
                    ? ButtonVariant.primaryReversed
                    : ButtonVariant.secondaryReversed
                }
                icon={ButtonIcon.right}
                Icon={<IoArrowForwardOutline />}
                AsElement={<GatsbyLink to={section?.link?.page?.slug || ''} />}
              >
                {section?.link?.label}
              </Button>
            </Stack>
          </BoxV2>
        </Background>
      ) : null}
    </div>
  );
};
