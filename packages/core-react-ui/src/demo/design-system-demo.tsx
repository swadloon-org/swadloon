import React from 'react';
import {
  Color,
  ColorShades5,
  TITLE,
  HEADING,
  PARAGRAPH_SIZE,
  TEXT_STYLE,
  LABEL_SIZE,
  TEXT_LEVEL,
} from '@newrade/core-design-system';
import { IoIosArrowDropright } from 'react-icons/io';
import { useStyles } from 'react-treat';
import * as styleRefs from './design-system-demo.treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack/stack';
import { Title } from '../components/text/title';
import { keys } from '../utilities/utilities';
import { ColorSwatch } from '../components/color/color-swatch';
import { Paragraph } from '../components/text/paragraph';
import { Heading } from '../components/text/heading';
import { Label } from '../components/text/label';
import { pascal } from 'case';
import { Summary } from '../components/text/summary';
import { Details } from '../components/text/details';
import { Box } from '../layout/box/box';
import { Cluster } from '../layout/cluster/cluster';

type Props = {};

export const DesignSystemComponent: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  const lorenipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Stack id={'Design System'} gap="55px">
        <Heading variant={HEADING.h1}>Design System - {pascal(cssTheme.name)}</Heading>

        <Stack id={'Foundations'} gap="34px">
          <Stack gap="34px">
            <Heading variant={HEADING.h2}>Foundations</Heading>

            <Paragraph>The design system describes</Paragraph>
          </Stack>

          <Details id={'Typography'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Typography</Heading>
            </Summary>
            <Box padding={['1em', '0', '1em', '0']}>
              <Stack gap="55px">
                <Stack gap="21px">
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Titles
                  </Heading>

                  {keys(TITLE).map((variant, index) => (
                    <Title key={index} variant={TITLE[variant]}></Title>
                  ))}
                </Stack>

                <Stack gap="21px">
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Headings
                  </Heading>

                  {keys(HEADING).map((variant, index) => (
                    <Heading key={index} variant={HEADING[variant]}></Heading>
                  ))}
                </Stack>

                <Stack gap="21px">
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Labels
                  </Heading>

                  {keys(LABEL_SIZE).map((variant, index) => (
                    <Label key={index} variant={LABEL_SIZE[variant]}></Label>
                  ))}

                  {keys(TEXT_STYLE)
                    .filter((style) => cssTheme.typography.labels.styles[style])
                    .map((variant, index) => (
                      <Label key={index} variantStyle={TEXT_STYLE[variant]}></Label>
                    ))}
                </Stack>

                <Stack gap="21px">
                  <Heading variant={HEADING.h4} variantLevel={TEXT_LEVEL.secondary}>
                    Paragraphs
                  </Heading>

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
            </Box>
          </Details>

          <Details id={'Colors'}>
            <Summary>
              <Heading variant={HEADING.h3}>Colors</Heading>
            </Summary>
            <Stack id={'Colors'} gap="1em">
              <h4>All Colors</h4>
              {keys(theme.colors.colors).map((colorName, index) => {
                const colorOrPalette = theme.colors.colors[colorName];

                if (typeof colorOrPalette === 'string') {
                  return (
                    <Stack key={index} gap={'10px'}>
                      <h4>{colorName}</h4>
                      <div style={{ width: '20%' }}>
                        <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>
                      </div>
                    </Stack>
                  );
                }
                if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
                  return (
                    <Stack key={index} gap={'10px'}>
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
                    <Stack key={index} gap={'10px'}>
                      <h4>{colorName}</h4>
                      <Cluster
                        key={index}
                        justifyContent={['flex-start', 'flex-start', 'flex-start']}
                        alignItems={'flex-start'}
                        style={{ flexWrap: 'wrap' }}
                        gap={'10px  0'}
                      >
                        {shades.map((shadeName, index) => {
                          const color = palette[shadeName];

                          return (
                            <div style={{ width: '20%' }}>
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
                    <Stack key={index} gap={'10px'}>
                      <h4>{colorName}</h4>
                      <div style={{ width: '20%' }}>
                        <ColorSwatch key={index} name={colorName} color={colorOrPalette}></ColorSwatch>
                      </div>
                    </Stack>
                  );
                }
                if (typeof colorOrPalette === 'object' && (colorOrPalette as Color)['h'] !== undefined) {
                  return (
                    <Stack key={index} gap={'10px'}>
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

          <Details id={'Sizing'}>
            <Summary>
              <Heading variant={HEADING.h3}>Sizing</Heading>
            </Summary>
            <Stack id={'Sizing'} gap="1em">
              <h3>Sizing</h3>

              <h4>Sizes</h4>
              {cssTheme.sizing?.sizes &&
                keys(cssTheme.sizing.sizes).map((size) => {
                  return cssTheme?.sizing?.sizes[size] ? (
                    <div key={size}>
                      <label>{size}</label>
                      <Stack gap="1em">
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

          <Details id={'Effects'}>
            <Summary>
              <Heading variant={HEADING.h3}>Effects</Heading>
            </Summary>
            <Stack id={'Effects'} gap="1em">
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

        <Stack id={'Components'} gap="34px">
          <Heading variant={HEADING.h2}>Components</Heading>

          <Details id={'Buttons'}>
            <Summary>
              <Heading variant={HEADING.h3}>Buttons</Heading>
            </Summary>
          </Details>
        </Stack>
      </Stack>
    </div>
  );
};
