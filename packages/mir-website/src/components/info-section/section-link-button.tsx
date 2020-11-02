import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { LinkFragment } from '../../../types/graphql-types';
import { Button } from '../ui/button';

export function SectionLinkButton({
  variant,
  link,
}: {
  variant: 'primaryDefault' | 'primaryReversed';
  link: LinkFragment;
}) {
  return (
    <>
      {link && link.type === 'INTERNAL_PAGE' && link.page?.route ? (
        <GatsbyLink to={link.page?.route}>
          <Button variant={'text'} size={'medium'} variantType={variant}>
            {link.label}
          </Button>
        </GatsbyLink>
      ) : link && link.type === 'EXTERNAL_URL' && link.url ? (
        <a href={link.url}>
          <Button variant={'text'} size={'medium'} variantType={variant}>
            {link.label}
          </Button>
        </a>
      ) : null}
    </>
  );
}
