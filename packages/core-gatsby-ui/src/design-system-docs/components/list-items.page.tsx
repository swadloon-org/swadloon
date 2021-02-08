import { HEADING, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { Heading, ListItem, ListItems, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { IoMailOutline } from '@react-icons/all-files/io5/IoMailOutline';
import { IoPhonePortraitOutline } from '@react-icons/all-files/io5/IoPhonePortraitOutline';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { lorenipsum } from '../utils/loren-ipsum';
import { PageHeader } from '../utils/page-header';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'List Items Components'}>
        How the list items component should be used with all variations.
      </PageHeader>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Unordered Items</Heading>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h4}>Bullet</Heading>

          <Stack gap={[cssTheme.sizing.var.x3]}>
            <ListItems gap={[cssTheme.sizing.var.x2]}>
              <ListItem></ListItem>

              <ListItem></ListItem>

              <ListItem></ListItem>
            </ListItems>
          </Stack>
        </Stack>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h4}>Icon</Heading>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            <Stack as={'ul'} gap={[cssTheme.sizing.var.x2]}>
              <ListItem variantIcon={'icon'} Icon={<IoMailOutline />}>
                info@website.ca
              </ListItem>

              <ListItem variantIcon={'icon'} Icon={<IoMailOutline />}>
                info@website.ca
              </ListItem>

              <ListItem variantIcon={'icon'} Icon={<IoPhonePortraitOutline />}>
                444-555-2222
              </ListItem>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h4}>Icon</Heading>
          <Stack gap={[cssTheme.sizing.var.x4]}>
            <ListItems gap={[cssTheme.sizing.var.x3]}>
              <ListItem variantSize={PARAGRAPH_SIZE.large} variantIcon={'bullet'}></ListItem>

              <ListItem variantSize={PARAGRAPH_SIZE.medium} variantIcon={'bullet'}></ListItem>

              <ListItem variantSize={PARAGRAPH_SIZE.small} variantIcon={'bullet'}></ListItem>

              <ListItem variantSize={PARAGRAPH_SIZE.xSmall} variantIcon={'bullet'}></ListItem>
            </ListItems>

            <ListItems gap={[cssTheme.sizing.var.x3]}>
              <ListItem variantSize={PARAGRAPH_SIZE.large} variantIcon={'icon'} Icon={<IoMailOutline />}></ListItem>

              <ListItem variantSize={PARAGRAPH_SIZE.medium} variantIcon={'icon'} Icon={<IoMailOutline />}></ListItem>

              <ListItem variantSize={PARAGRAPH_SIZE.small} variantIcon={'icon'} Icon={<IoMailOutline />}></ListItem>

              <ListItem variantSize={PARAGRAPH_SIZE.xSmall} variantIcon={'icon'} Icon={<IoMailOutline />}></ListItem>
            </ListItems>
          </Stack>
        </Stack>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h4}>Multi-lines</Heading>
          <Stack gap={[cssTheme.sizing.var.x3]}>
            <Stack as={'ul'} gap={[cssTheme.sizing.var.x2]}>
              <ListItem variantIcon={'icon'} Icon={<IoMailOutline />} variantSize={PARAGRAPH_SIZE.large}>
                {lorenipsum}
              </ListItem>

              <ListItem variantIcon={'icon'} Icon={<IoMailOutline />} variantSize={PARAGRAPH_SIZE.medium}>
                {lorenipsum}
              </ListItem>

              <ListItem variantIcon={'icon'} Icon={<IoMailOutline />}>
                {lorenipsum}
              </ListItem>

              <ListItem variantIcon={'icon'} Icon={<IoPhonePortraitOutline />} variantSize={PARAGRAPH_SIZE.xSmall}>
                {lorenipsum}
              </ListItem>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>Ordered</Heading>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h4}>Number</Heading>

          <Stack gap={[cssTheme.sizing.var.x3]}>
            <ListItems gap={[cssTheme.sizing.var.x3]} as={'ol'}>
              <ListItem variantIcon={'number'}></ListItem>

              <ListItem variantIcon={'number'}></ListItem>

              <ListItem variantIcon={'number'}></ListItem>
            </ListItems>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;
