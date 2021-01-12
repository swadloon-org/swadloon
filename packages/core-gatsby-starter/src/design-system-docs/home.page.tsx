import { HEADING, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import { Heading, Link, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { title } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../templates/design-system-page.template';
import * as styleRefs from './home.treat';
import { GatsbyLink } from '@newrade/core-gatsby-ui';
import { useDesignSystemNavItems } from '../hooks/use-design-system-nav-items.hook';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();
  const navItems = useDesignSystemNavItems();

  const lorenipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      {/* <TreatProvider theme={light}> */}
      <Heading variant={HEADING.h1}>
        Design System -{' '}
        <Heading variant={HEADING.h1} variantLevel={TEXT_LEVEL.secondary} displayMode={'inline-block'}>
          {title(cssTheme.variation)} Theme
        </Heading>
      </Heading>
      {/* </TreatProvider> */}

      <Stack id={'Foundations'} gap={[cssTheme.sizing.var.x5]}>
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Paragraph>The design system describes every aspect of the visual design of a brand</Paragraph>

          {navItems.map((item, index) => {
            return (
              <Link key={index} variantSize={PARAGRAPH_SIZE.medium} AsElement={<GatsbyLink to={item.path} />}>
                {item.name}
              </Link>
            );
          })}
        </Stack>
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
