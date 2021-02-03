import React from 'react';
import { PageProps } from 'gatsby';
import { GatsbySrcPageContext } from '@newrade/core-gatsby-config';

type PageTemplateProps = PageProps<{}, GatsbySrcPageContext> & {
  LayoutComponent: React.ReactNode;
};

// TODO this is not working LayoutComponent can't be passed from wrapPageElement

// export const LayoutSwitcher: React.FC<{ element: any; props: PageTemplateProps }> = ({ element, props }) => {
// const Layout = React.cloneElement(props.LayoutComponent as React.ReactElement, {
//   ...props,
//   children: element,
// });
// switch (props.pageContext.layout) {
//   case 'DOCS': {
//     return <Layout {...props}>{element}</Layout>;
//   }
//   case 'DESIGN_SYSTEM': {
//     return <Layout {...props}>{element}</Layout>;
//   }
//   case 'SITE':
//   default: {
//     return <Layout {...props}>{element}</Layout>;
//   }
// }
// };
