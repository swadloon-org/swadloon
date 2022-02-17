import React from 'react';

import { FooterStandard } from '@newrade/core-gatsby-ui/src';
import { FooterAPI, LinkType, NavComponent } from '@newrade/core-website-api';

type Props = {};

export const FootersStandard: React.FC<Props> = (props) => {
  const navigation = {
    name: 'Services',
    label: 'Services',
    links: [
      {
        name: 'Link to page',
        label: 'Page link',
        type: LinkType.externalUrl,
      },
      {
        name: 'Link to page',
        label: 'Page link',
        type: LinkType.externalUrl,
      },
      {
        name: 'Link to page',
        label: 'Page link',
        type: LinkType.externalUrl,
      },
    ],
  };

  const footer: FooterAPI = {
    name: 'Standard Footer',
    navigation: {
      component: NavComponent.footer,
      subNavigation: [navigation, navigation, navigation, navigation],
    },
    companyInfo: {
      copyright: '@ Company name',
    },
    version: 'v1.0.0',
  };

  return (
    <>
      <FooterStandard footer={footer}></FooterStandard>
    </>
  );
};
