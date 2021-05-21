import { MDXProvider } from '@mdx-js/react';
import {
  CommonComponentProps,
  globalThemeReversed,
  TreatThemeProvider,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { CodeOutline } from '@newrade/core-react-ui/lib/code';
import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { mdxComponents } from '@newrade/core-react-ui/lib/markdown';
import React, { ReactNode } from 'react';
import { TreatProvider } from 'react-treat';

type Props = CommonComponentProps & {
  treatThemeRef: string;
  theme: Theme;
  children: ReactNode;
  reversed?: boolean;
};

/**
 * Inject Treat providers
 */
export const ThemeWrapper = ({
  id,
  style,
  className,
  treatThemeRef,
  theme,
  children,
  reversed,
  ...props
}: Props) => {
  const { cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style: {
      ...style,
      backgroundColor: reversed ? cssTheme.colors.colors.grey[800] : '',
    },
    className,
    classNames: [reversed ? globalThemeReversed : ''],
  });

  return (
    <TreatProvider theme={treatThemeRef}>
      <TreatThemeProvider theme={theme}>
        <GlobalCSSVariables>
          <MDXProvider components={mdxComponents}>
            <CodeOutline {...commonProps}>{children}</CodeOutline>
          </MDXProvider>
        </GlobalCSSVariables>
      </TreatThemeProvider>
    </TreatProvider>
  );
};
