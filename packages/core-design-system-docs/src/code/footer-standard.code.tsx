import { FooterStandard } from '@newrade/core-gatsby-ui';
import { useTreatTheme } from '@newrade/core-react-ui';
import { FooterAPI, LinkType, NavComponent } from '@newrade/core-website-api';
import React from 'react';

type Props = {};

export const FootersStandard: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

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
