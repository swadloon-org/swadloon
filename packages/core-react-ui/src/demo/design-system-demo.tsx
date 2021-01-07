import {
  Color,
  ColorShades5,
  HEADING,
  LABEL_SIZE,
  PARAGRAPH_SIZE,
  TEXT_LEVEL,
  TEXT_STYLE,
  TITLE,
} from '@newrade/core-design-system';
import { pascal, kebab, title } from 'case';
import React from 'react';
import { useStyles } from 'react-treat';
import { ColorSwatch } from '../components/color/color-swatch';
import { Details } from '../components/text/details';
import { Heading } from '../components/text/heading';
import { Label } from '../components/text/label';
import { Paragraph } from '../components/text/paragraph';
import { Summary } from '../components/text/summary';
import { Title } from '../components/text/title';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Box } from '../layout/box';
import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { keys } from '../utilities/utilities';
import * as styleRefs from './design-system-demo.treat';
import { NavBar } from '../navigation/navbar';
import { Center } from '../layout/center';
import { LogoPlaceholder } from './logo-placeholder';
import { BoxV2 } from '../layout/box-v2';
import { FontShowcase } from './font-showcase';

type Props = {};

export const DesignSystemComponent: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  const lorenipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Center contentClassName={styles.wrapper}>
      <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
        <Heading variant={HEADING.h1}>
          {title(cssTheme.name)} Design System -{' '}
          <Heading variant={HEADING.h1} variantLevel={TEXT_LEVEL.secondary} displayMode={'inline-block'}>
            {title(cssTheme.variation)} Theme
          </Heading>
        </Heading>

        <Stack id={'Foundations'} gap={[cssTheme.sizing.var.x5]}>
          <Stack gap={[cssTheme.sizing.var.x4]}>
            <Heading variant={HEADING.h2}>Foundations</Heading>

            <Paragraph>The design system describes</Paragraph>
          </Stack>

          <Details id={'Typography'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Typography</Heading>
            </Summary>

            <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
              <Stack gap={[cssTheme.sizing.var.x5]}>
                <Stack gap={[cssTheme.sizing.var.x4]}>
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Fonts
                  </Heading>

                  <Stack gap={[cssTheme.sizing.var.x4]}>
                    <FontShowcase></FontShowcase>
                  </Stack>
                </Stack>

                <Stack gap={[cssTheme.sizing.var.x4]}>
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Titles
                  </Heading>

                  <Stack gap={[cssTheme.sizing.var.x3]}>
                    {keys(TITLE).map((variant, index) => (
                      <Title key={index} variant={TITLE[variant]}></Title>
                    ))}
                  </Stack>
                </Stack>

                <Stack gap={[cssTheme.sizing.var.x4]}>
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Headings
                  </Heading>

                  <Stack gap={[cssTheme.sizing.var.x3]}>
                    {keys(HEADING).map((variant, index) => (
                      <Heading key={index} variant={HEADING[variant]}></Heading>
                    ))}
                  </Stack>
                </Stack>

                <Stack gap={[cssTheme.sizing.var.x4]}>
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Labels
                  </Heading>

                  <Stack gap={[cssTheme.sizing.var.x3]}>
                    {keys(LABEL_SIZE).map((variant, index) => (
                      <Label key={index} variant={LABEL_SIZE[variant]}></Label>
                    ))}

                    {keys(TEXT_STYLE)
                      .filter((style) => cssTheme.typography.labels.styles[style])
                      .map((variant, index) => (
                        <Label key={index} variantStyle={TEXT_STYLE[variant]}></Label>
                      ))}
                  </Stack>
                </Stack>

                <Stack gap={[cssTheme.sizing.var.x4]}>
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Paragraphs
                  </Heading>

                  <Stack gap={[cssTheme.sizing.var.x3]}>
                    {keys(PARAGRAPH_SIZE).map((variant, index) => (
                      <Paragraph key={index} variant={PARAGRAPH_SIZE[variant]}>
                        {lorenipsum}
                      </Paragraph>
                    ))}

                    {keys(TEXT_STYLE)
                      .filter((style) => cssTheme.typography.paragraphs.styles[style])
                      .map((variant, index) => (
                        <Paragraph key={index} variantStyle={TEXT_STYLE[variant]}>
                          {lorenipsum}
                        </Paragraph>
                      ))}
                  </Stack>
                </Stack>
              </Stack>
            </BoxV2>
          </Details>

          <Details id={'Colors'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Colors</Heading>
            </Summary>
            <Stack id={'Colors'} gap={['1em']}>
              <h4>All Colors</h4>
              {keys(theme.colors.colors).map((colorName, index) => {
                const colorOrPalette = theme.colors.colors[colorName];

                if (typeof colorOrPalette === 'string') {
                  return (
                    <Stack key={index} gap={['10px']}>
                      <h4>{colorName}</h4>
                      <div style={{ width: '20%' }}>
                        <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>
                      </div>
                    </Stack>
                  );
                }
                if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
                  return (
                    <Stack key={index} gap={['10px']}>
                      <h4>{colorName}</h4>
                      <div style={{ width: '20%' }}>
                        <ColorSwatch key={index} name={colorName} color={colorOrPalette as Color}></ColorSwatch>{' '}
                      </div>
                    </Stack>
                  );
                }

                if (typeof colorOrPalette === 'object') {
                  const palette = colorOrPalette as Record<ColorShades5, Color>;
                  const shades = keys(palette);

                  return (
                    <Stack key={index} gap={['10px']}>
                      <h4>{colorName}</h4>
                      <Cluster
                        key={index}
                        justifyContent={['flex-start', 'flex-start', 'flex-start']}
                        alignItems={'flex-start'}
                        gap={'10px 0px'}
                      >
                        {shades.map((shadeName, index) => {
                          const color = palette[shadeName];

                          return (
                            <div style={{ width: '20%' }} key={index}>
                              <ColorSwatch
                                key={index}
                                shadeNumber={shadeName}
                                name={colorName}
                                color={color}
                              ></ColorSwatch>
                            </div>
                          );
                        })}
                      </Cluster>
                    </Stack>
                  );
                }

                return null;
              })}

              <h4>Color Intents</h4>

              {keys(theme.colors.colorIntents).map((colorName, index) => {
                const colorOrPalette = theme.colors.colorIntents[colorName];
                if (typeof colorOrPalette === 'string') {
                  return (
                    <Stack key={index} gap={['10px']}>
                      <h4>{colorName}</h4>
                      <div style={{ width: '20%' }}>
                        <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>
                      </div>
                    </Stack>
                  );
                }
                if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
                  return (
                    <Stack key={index} gap={['10px']}>
                      <h4>{colorName}</h4>
                      <div style={{ width: '20%' }}>
                        <ColorSwatch key={index} name={colorName} color={colorOrPalette as Color}></ColorSwatch>
                      </div>
                    </Stack>
                  );
                }
                return null;
              })}
            </Stack>
          </Details>

          <Details id={'Sizing'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Sizing</Heading>
            </Summary>
            <Stack id={'Sizing'} gap={['1em']}>
              <h3>Sizing</h3>

              <h4>Sizes</h4>
              {cssTheme.sizing?.sizes &&
                keys(cssTheme.sizing.sizes).map((size) => {
                  return cssTheme?.sizing?.sizes[size] ? (
                    <div key={size}>
                      <label>{size}</label>
                      <Stack gap={['1em']}>
                        {keys(cssTheme?.sizing?.sizes[size]).map((step) => {
                          return (
                            <div
                              key={step}
                              id={step}
                              style={{ height: cssTheme?.sizing?.sizes[size][step], backgroundColor: 'grey' }}
                            >
                              {step}
                            </div>
                          );
                        })}
                      </Stack>
                    </div>
                  ) : null;
                })}
            </Stack>
          </Details>

          <Details id={'Effects'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Effects</Heading>
            </Summary>
            <Stack id={'Effects'} gap={['1em']}>
              <h3>Effects</h3>

              <h4>Shadows</h4>
              {cssTheme.effects?.shadows &&
                keys(cssTheme.effects.shadows).map((shadow) => {
                  return (
                    <div key={shadow} style={{ boxShadow: cssTheme?.effects?.shadows?.[shadow] }}>
                      {shadow}
                    </div>
                  );
                })}
            </Stack>
          </Details>
        </Stack>

        <Stack id={'Components'} gap={[cssTheme.sizing.var.x5]}>
          <Heading variant={HEADING.h2}>Components</Heading>

          <Details id={'Navigation'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Navigation</Heading>
            </Summary>

            <BoxV2 padding={[cssTheme.sizing.var.x4, '0']}>
              <Stack gap={['43px']}>
                <NavBar
                  style={{ position: 'relative' }}
                  MobileSvgLogo={<LogoPlaceholder />}
                  DesktopSvgLogo={<LogoPlaceholder />}
                />
              </Stack>
            </BoxV2>
          </Details>

          <Details id={'Buttons'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Buttons</Heading>
            </Summary>

            <Stack gap={['43px']}>
              <NavBar
                style={{ position: 'relative' }}
                MobileSvgLogo={<LogoPlaceholder />}
                DesktopSvgLogo={<LogoPlaceholder />}
              />
            </Stack>
          </Details>
        </Stack>
      </Stack>
    </Center>
  );
};
