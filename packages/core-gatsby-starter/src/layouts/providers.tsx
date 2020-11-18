import { MDXProvider } from '@mdx-js/react';
import { DefaultCSS, mdxComponents, ResetCSS, Theme, defaultTheme, defaultCSSTheme } from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light, theme, cssTheme } from '../design-system/theme.treat';
import { Props } from './layout';
import { TreatThemeProvider } from '../hooks/treat-theme';

export const Providers: React.FC<Props> = (props) => {
  return (
    <TreatProvider theme={light}>
      <TreatThemeProvider theme={{ theme, cssTheme }}>
        <MDXProvider components={mdxComponents}>
          <ResetCSS>
            <DefaultCSS>{props.children}</DefaultCSS>
          </ResetCSS>
        </MDXProvider>
      </TreatThemeProvider>
    </TreatProvider>
  );
};
