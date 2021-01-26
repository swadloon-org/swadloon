import { ButtonSize, ButtonVariant, HEADING } from '@newrade/core-design-system/';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  Button,
  Center,
  CommonComponentProps,
  getMergedClassname,
  GlobalMarkdownCSS,
  Heading,
  Image,
  Stack,
  Switcher,
} from '@newrade/core-react-ui';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import { cssTheme } from '../design-system/theme';
import { gradient } from '../styles/effects.styles';
import * as styleRefs from './info-section.treat';

type OwnProps = CommonComponentProps & {
  section: SectionFragment;
  variant?: 'primary' | 'secondary';
  order?: 'normal' | 'reverse';
};

export const InfoSection: React.FC<OwnProps> = ({
  id,
  style,
  className,
  variant,
  section,
  order = 'normal',
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([styles.wrapper, className, variant ? styles[variant] : '']);
  const hasImage = !!section?.medias?.medias?.length;
  const mobileFluidTallImage: any = section?.medias?.medias?.[0]?.mobileFluidTallImage?.childImageSharp?.fluid;
  const hasMarkdown = !!section?.text?.childMdx?.body;
  const mardownData: any = section?.text?.childMdx?.body;

  const children = [
    <BoxV2 className={styles.imagePreview} justifySelf={['center', 'center', 'flex-end']} key={'1'}>
      <Image
        // effects={[
        //   {
        //     background: gradient,
        //     zIndex: 1,
        //   },
        // ]}
        image={
          hasImage
            ? {
                Tag: 'div',
                fluid: mobileFluidTallImage as FluidObject,
              }
            : undefined
        }
      ></Image>
    </BoxV2>,
    <Stack gap={[`2em`]} style={{ maxWidth: `min(480px, 100%)` }} key={'2'}>
      <Heading variant={HEADING.h1}>{section?.title}</Heading>

      <GlobalMarkdownCSS>
        <MDXRenderer>{hasMarkdown ? mardownData : ''}</MDXRenderer>
      </GlobalMarkdownCSS>

      {section.link?.page?.slug ? (
        <Button
          size={ButtonSize.large}
          variant={ButtonVariant.secondary}
          Icon={<IoArrowForwardOutline />}
          AsElement={<GatsbyLink to={section.link?.page?.slug} />}
        >
          {section.link?.label}
        </Button>
      ) : null}
    </Stack>,
  ];

  return (
    <Center id={id} style={style} className={mergedClassNames}>
      <BoxV2 padding={[cssTheme.sizing.var.x7, 0]} justifyContent={['center']}>
        <Switcher
          gap={[cssTheme.sizing.var.x5, cssTheme.sizing.var.x6]}
          alignItems={['center']}
          style={{ width: `100%` }}
        >
          {order === 'normal' ? children : children.reverse()}
        </Switcher>
      </BoxV2>
    </Center>
  );
};
