import React from 'react';

import { Variant } from '@newrade/core-design-system';

import { Tag } from '../tag/tag';
import { TagCompProps } from '../tag/tag.props';

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
