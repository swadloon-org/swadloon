import { MDXProvider } from '@mdx-js/react';
// import { DefaultCSS, mdxComponents, ResetCSS, ViewportProvider, viewportContext } from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { mdxComponents } from '../components/markdown/components-markdown';
import { light } from '../design-system/theme.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import { ViewportProvider } from './viewport.context';

export const Providers: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        {/* <TreatThemeProvider theme={{ theme, cssTheme }}> */}
        <MDXProvider components={mdxComponents}>
          {/* <CSSVariables>{props.children}</CSSVariables> */}
          {/* <ResetCSS> */}
          {/* <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}> */}
          {props.children}
          {/* </IconContext.Provider> */}
          {/* </ResetCSS> */}
        </MDXProvider>
        {/* </TreatThemeProvider> */}
      </ViewportProvider>
    </TreatProvider>
  );
};
