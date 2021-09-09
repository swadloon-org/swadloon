import { Variant } from '@newrade/core-design-system';
import { FooterStandard } from '@newrade/core-gatsby-ui/src';
import { FooterAPI, FooterLayout } from '@newrade/core-website-api';
import React from 'react';
import { clientEnv } from '../../types/dot-env-client';
import { companyInfoData } from '../data/company-info';
import { footerNavigation } from '../navigation/navigation';

type Props = {};

const footerData: FooterAPI = {
  name: 'Footer',
  variant: Variant.primaryReversed,
  layout: FooterLayout.standard,
  navigation: footerNavigation,
  companyInfo: companyInfoData,
  version: `v${clientEnv.APP_VERSION}`,
};

export const Footer: React.FC<Props> = (props) => {
  return <FooterStandard footer={footerData}></FooterStandard>;
};
