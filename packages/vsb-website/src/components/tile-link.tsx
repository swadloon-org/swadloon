import { ButtonSize, HEADING, TEXT_LEVEL, ButtonVariant, ButtonIcon } from '@newrade/core-design-system';
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
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './tile-link.treat';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';

type Props = CommonComponentProps & {
  section: SectionFragment;
  contentClassName?: string;
};

export const TileLink: React.FC<Props> = ({ id, style, className, contentClassName, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const hasImage = !!section?.medias?.medias?.length;
  const imageData: any = section?.medias?.medias?.[0]?.desktopFluidImage;
  const { cssTheme } = useTreatTheme();
  const mergedClassNames = getMergedClassname([styles.wrapper, className]);
  const mergedContentClassNames = getMergedClassname([styles.content, contentClassName]);

  return (
    <div className={mergedClassNames}>
      {hasImage ? (
        <Background
          effects={[
            {
              background: `linear-gradient(rgb(0 0 0 / 30%) 0%, rgba(0, 0, 0, 0) 36%), linear-gradient(0deg, rgb(14 13 13 / 20%), rgba(14, 13, 13, 0.20))`,
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
                  section.variant === 'PRIMARY_NORMAL' ? ButtonVariant.primaryReversed : ButtonVariant.secondaryReversed
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
