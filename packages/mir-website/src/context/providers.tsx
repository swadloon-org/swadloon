import { MDXProvider } from '@mdx-js/react';
// import { DefaultCSS, mdxComponents, ResetCSS, ViewportProvider, viewportContext } from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';
import { IconContext } from 'react-icons/lib';
import { ViewportProvider } from './viewport.context';
import { viewportContext } from '../hooks/use-viewport.hook';
import { mdxComponents } from '../components/markdown/components-markdown';

export const Providers: React.FC = (props) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        {/* <TreatThemeProvider theme={{ theme, cssTheme }}> */}
        <MDXProvider components={mdxComponents}>
          {/* <CSSVariables>{props.children}</CSSVariables> */}
          {/* <ResetCSS> */}
          {/* <DefaultCSS> */}
          {/* <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}> */}
          {props.children}
          {/* </IconContext.Provider> */}
          {/* </DefaultCSS> */}
          {/* </ResetCSS> */}
        </MDXProvider>
        {/* </TreatThemeProvider> */}
      </ViewportProvider>
    </TreatProvider>
  );
};
