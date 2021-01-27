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
import { IoArrowForwardOutline } from '@react-icons/all-files/io5/IoArrowForwardOutline';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { useStyles } from 'react-treat';
import { cssTheme } from '../design-system/theme';
import * as styleRefs from './section-info.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps &
  SectionProps & {
    variant?: 'primary' | 'secondary';
    variantType?: 'image' | 'children';
    order?: 'normal' | 'reverse';
  };

export const SectionInfo: React.FC<Props> = ({
  id,
  style,
  className,
  variant,
  variantType = 'image',
  section,
  order = 'normal',
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([styles.wrapper, className, variant ? styles[variant] : '']);

  /**
   * Image
   */
  const hasImage = !!section?.medias?.medias?.length;
  const mobileFluidTallImage: any = section?.medias?.medias?.[0]?.mobileFluidTallImage?.childImageSharp?.fluid;
  const childImage =
    variantType === 'image' && hasImage ? (
      <Image key={1} image={{ Tag: 'div', fluid: mobileFluidTallImage as FluidObject }}></Image>
    ) : null;

  /**
   * Markdown
   */
  const hasMarkdown = !!section?.text?.childMdx?.body;
  const markdownData: any = section?.text?.childMdx?.body;
  const Markdown = hasMarkdown ? (
    <GlobalMarkdownCSS>
      <MDXRenderer>{hasMarkdown ? markdownData : ''}</MDXRenderer>
    </GlobalMarkdownCSS>
  ) : null;

  /**
   * Passed children
   */
  const child = variantType === 'children' ? props.children : null;

  /**
   * Only keep the non null nodes
   */
  const renderedChildren = [childImage, child].filter((child) => !!child);

  const children = [
    /**
     * Either an image or a ReactNode passed as children
     */
    <BoxV2 className={getMergedClassname([styles.content])} justifySelf={['center', 'center', 'flex-end']} key={'1'}>
      {renderedChildren}
    </BoxV2>,
    /**
     * Second section with rendered markdown
     */
    <Stack gap={[`2em`]} style={{ maxWidth: `min(480px, 100%)` }} key={'2'}>
      <Heading variant={HEADING.h1}>{section?.title}</Heading>

      {Markdown}

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

  /**
   * Layout
   */
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
