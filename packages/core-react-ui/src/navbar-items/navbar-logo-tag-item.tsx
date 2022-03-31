import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Tag, TagCompProps } from '@newrade/core-react-ui';

type Props = {
  tagText?: string;
  tagProps?: TagCompProps;
};

export const NavbarLogoTagItem: React.FC<Props> = ({ tagText, tagProps }) => {
  return tagText ? (
    <Tag variant={Variant.primary} {...tagProps}>
      {tagText}
    </Tag>
  ) : null;
};
