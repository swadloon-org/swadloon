import { HEADING, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import { Details, Heading, Label, ListItem, ListItems, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';
import { IoMailOutline } from '@react-icons/all-files/io5/IoMailOutline';
import { IoPhonePortraitOutline } from '@react-icons/all-files/io5/IoPhonePortraitOutline';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { lorenipsum } from '../utils/loren-ipsum';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Stack id={'Components'} gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h2}>List Items</Heading>

        <Details id={'Links'} open={true}>
          <Summary>Unordered</Summary>

          <Stack gap={[cssTheme.sizing.var.x5]}>
            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Bullet</Label>

              <ListItems gap={[cssTheme.sizing.var.x2]}>
                <ListItem></ListItem>

                <ListItem></ListItem>

                <ListItem></ListItem>
              </ListItems>
            </Stack>

            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Icon</Label>

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

            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Sizes</Label>

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

            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Multi-lines</Label>

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
        </Details>

        <Details id={'Links'} open={true}>
          <Summary>Ordered</Summary>

          <Stack gap={[cssTheme.sizing.var.x5]}>
            <Stack gap={[cssTheme.sizing.var.x3]}>
              <Label variantLevel={TEXT_LEVEL.tertiary}>Number</Label>

              <ListItems gap={[cssTheme.sizing.var.x3]} as={'ol'}>
                <ListItem variantIcon={'number'}></ListItem>

                <ListItem variantIcon={'number'}></ListItem>

                <ListItem variantIcon={'number'}></ListItem>
              </ListItems>
            </Stack>
          </Stack>
        </Details>
      </Stack>
    </Stack>
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
