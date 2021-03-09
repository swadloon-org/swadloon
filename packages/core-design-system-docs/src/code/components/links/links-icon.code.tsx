import { LinkIcon, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { CodeOutline, Link, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const LinksIcon: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.large} variantIcon={LinkIcon.right}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.medium} variantIcon={LinkIcon.right}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.small} variantIcon={LinkIcon.right}></Link>
      <Link href={'#'} variantSize={PARAGRAPH_SIZE.xSmall} variantIcon={LinkIcon.right}></Link>
    </CodeOutline>
  );
};
