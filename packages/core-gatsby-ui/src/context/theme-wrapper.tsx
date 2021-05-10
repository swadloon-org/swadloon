import { MDXProvider } from '@mdx-js/react';
import { globalThemeReversed, TreatThemeProvider, useTreatTheme } from '@newrade/core-react-ui';
import { CodeOutline } from '@newrade/core-react-ui/lib/code';
import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { mdxComponents } from '@newrade/core-react-ui/lib/markdown';
import React, { ReactNode } from 'react';
import { TreatProvider } from 'react-treat';

/**
 * Inject Treat providers
 */
export const ThemeWrapper = ({
  treatThemeRef,
  theme,
  children,
  reversed,
}: {
  treatThemeRef: string;
  theme: Theme;
  children: ReactNode;
  reversed?: boolean;
}) => {
  const { cssTheme } = useTreatTheme();

  return (
    <TreatProvider theme={treatThemeRef}>
      <TreatThemeProvider theme={theme}>
        <GlobalCSSVariables>
          <MDXProvider components={mdxComponents}>
            <CodeOutline
              style={{
                backgroundColor: reversed ? cssTheme.colors.colors.grey[800] : '',
              }}
              className={reversed ? globalThemeReversed : ''}
            >
              {children}
            </CodeOutline>
          </MDXProvider>
        </GlobalCSSVariables>
      </TreatThemeProvider>
    </TreatProvider>
  );
};
