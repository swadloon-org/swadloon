import { HEADING, LinkIcon, PARAGRAPH_SIZE, SizingSteps } from '@newrade/core-design-system';
import { Cluster, Code, Heading, keys, Label, Link, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { PageHeader } from '../utils/page-header';
import { Placeholder } from '../utils/placeholder';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <>
      <PageHeader title={'Sizing'}>
        Sizes of components and distances between elements in layouts are handled by setting a modular scale. The values
        in the scale can be set manually or optained by using an exponential function. For example, on desktop, where
        the screen real estate is large, one could the{' '}
        <Link
          href={'https://en.wikipedia.org/wiki/Golden_ratio'}
          target={'_blank'}
          style={{ display: 'inline-block' }}
          variantSize={PARAGRAPH_SIZE.large}
          variantIcon={LinkIcon.right}
        >
          Golden ratio
        </Link>{' '}
        as the exponential factor.
      </PageHeader>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h2}>Scale</Heading>

        <Paragraph>
          A scale from <Code>x0</Code> to <Code>x10</Code> is defined for each viewport (mobile, tablet and desktop).
          The values are also available as css variables <Code>var(--sizing-x1)</Code>), and they can be used by the
          theming system (e.g.<Code>cssTheme.sizing.var.x1</Code>).
        </Paragraph>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h4}>Desktop</Heading>

        <ScaleSteps steps={theme.sizing.sizes.desktop} />
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h4}>Tablet</Heading>

        <ScaleSteps steps={theme.sizing.sizes.tablet} />
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h4}>Mobile</Heading>

        <ScaleSteps steps={theme.sizing.sizes.mobile} />
      </Stack>
    </>
  );
};

const ScaleSteps: React.FC<{ steps: SizingSteps['mobile'] }> = ({ steps }) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x1]}>
      {keys(steps).map((step) => {
        const varValue = steps[step];
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
              style={{ width: `${varValue}px`, height: 30, padding: `inherit 0`, textAlign: 'left' }}
            >
              {' '}
            </Placeholder>
          </Cluster>
        );
      })}
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
