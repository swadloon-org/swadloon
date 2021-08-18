import { Variant } from '@newrade/core-design-system';
import { FooterStandard } from '@newrade/core-gatsby-ui';
import { FooterAPI, FooterLayout } from '@newrade/core-website-api';
import React from 'react';
import { footerNavigation } from '../navigation/navigation';

type Props = {};

const footerData: FooterAPI = {
  name: 'Footer',
  variant: Variant.primaryReversed,
  layout: FooterLayout.standard,
  navigation: footerNavigation,
};

export const Footer: React.FC<Props> = (props) => {
  return <FooterStandard footer={footerData}></FooterStandard>;
};
