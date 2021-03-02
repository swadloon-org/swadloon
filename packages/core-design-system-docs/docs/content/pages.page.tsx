import { HEADING } from '@newrade/core-design-system';
import { Heading, Paragraph, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
import * as styleRefs from '../home.treat';
import { liveCodeScope } from '../live-code-scope';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  const scope = {
    ...liveCodeScope,
    cssTheme,
  };

  return (
    <>
      <Heading variant={HEADING.h1}>Pages</Heading>

      <Paragraph>
        Pages are the highest level component available. They are usually configured in CMS or in config files. Each
        page can set its own Layout (e.g. how navigation is layed out) and choose its Template.
        <br />
        <br />
        The Layout controls how the navigation and content is layed out.
        <br />
        <br />
        The Template controls SEO / meta properties and how its content is rendered (e.g. what sections are used).
      </Paragraph>
    </>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props} contentWidth={''}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;
