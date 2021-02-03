import { HEADING, LinkIcon, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { Cluster, Heading, keys, Label, Link, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { Placeholder } from '../utils/placeholder';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Heading variant={HEADING.h3}>Sizing</Heading>

      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Paragraph>
          A module scale is available. It is based on the standard{' '}
          <Link
            href={'https://en.wikipedia.org/wiki/Golden_ratio'}
            target={'_blank'}
            style={{ display: 'inline-block' }}
            variantSize={PARAGRAPH_SIZE.medium}
            variantIcon={LinkIcon.right}
          >
            Golden ratio
          </Link>{' '}
          which assure a natural progression for each sizing step. The scale is automatically responsive for mobile,
          tablet and desktop.
        </Paragraph>

        <Stack gap={[cssTheme.sizing.var.x1]}>
          {keys(cssTheme.sizing.var).map((step) => {
            const varValue = cssTheme.sizing.var[step];
            return (
              <Cluster
                key={step}
                gap={[cssTheme.sizing.var.x2]}
                justifyContent={['flex-start']}
                style={{ maxWidth: `100%`, overflow: `hidden` }}
              >
                <Label style={{ width: 30 }}>{step}</Label>
                <Placeholder
                  key={step}
                  id={step}
                  style={{ width: `${varValue}`, height: 30, padding: `inherit 0`, textAlign: 'left' }}
                >
                  {' '}
                </Placeholder>
              </Cluster>
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
