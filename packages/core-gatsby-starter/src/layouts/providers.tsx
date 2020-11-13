import { MDXProvider } from '@mdx-js/react';
import { DefaultCSS, mdxComponents, ResetCSS } from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';
import { Props } from './layout';

export const Providers: React.FC<Props> = (props) => {
  return (
    <TreatProvider theme={light}>
      <MDXProvider components={mdxComponents}>
        <ResetCSS>
          <DefaultCSS>{props.children}</DefaultCSS>
        </ResetCSS>
      </MDXProvider>
    </TreatProvider>
  );
};
