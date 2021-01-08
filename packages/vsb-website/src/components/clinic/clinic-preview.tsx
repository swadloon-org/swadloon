import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import * as styleRefs from './treat/clinic-preview.treat';
import { Center, Cluster, Box, Stack, Heading, Grid, GlobalMarkdownCSS } from '@newrade/core-react-ui';
import { cssTheme } from '../../design-system/theme';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { HEADING } from '@newrade/core-design-system/';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';

type OwnProps = SectionFragment;

export const ClinicPreview: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const hasImage = !!props?.medias?.medias?.length;

  const imageData: any = props?.medias?.medias?.[0]?.desktopFluidImage;

  const hasMarkdown = !!props?.text?.childMdx?.body;
  const mardownData: any = props?.text?.childMdx?.body;

  return (
    <Center className={`${styles.wrapper}`}>
      <div className={styles.grid}>
        <Box className={styles.imagePreview}>
          {hasImage ? (
            <BackgroundImage
              Tag="div"
              fluid={imageData as IFluidObject}
              style={{ width: '100%', height: '100%' }}
              fadeIn={false}
            ></BackgroundImage>
          ) : null}
        </Box>
        <Box className={styles.containerInfo}>
          <Stack gap={[cssTheme.sizing.var.x5]}>
            <Heading variant={HEADING.h1}>{props?.title}</Heading>
            <div className={styles.contentMarkdown}>
              <GlobalMarkdownCSS>
                <MDXRenderer>{hasMarkdown ? mardownData : ''}</MDXRenderer>
              </GlobalMarkdownCSS>
            </div>
          </Stack>
        </Box>
      </div>
    </Center>
  );
};
