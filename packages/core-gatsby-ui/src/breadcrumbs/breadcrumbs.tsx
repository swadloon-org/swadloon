import React from 'react';

import { LinkVariant, PARAGRAPH_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { Link, Paragraph, useCommonProps } from '@newrade/core-react-ui';

import { GatsbyLink } from '../links/gatsby-link.js';

import * as styles from './breadcrumbs.css.js';
import { BreadcrumbsProps } from './breadcrumbs.props.js';

type Props = BreadcrumbsProps;

/**
 * Add SEO compatible breadcrumbs fron a Navigation tree object
 *
 * @see https://developers.google.com/search/docs/advanced/structured-data/breadcrumb
 */
export const Breadcrumbs = React.forwardRef<any, Props>(
  ({ id, style, className, breadcrumbs, ...props }, ref) => {
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [styles.wrapper],
      ...props,
    });

    const links = breadcrumbs?.links;

    return (
      <nav ref={ref} {...commonProps}>
        {links?.map((link, linkIndex) => {
          return (
            <React.Fragment key={linkIndex}>
              {/*
               * Separator
               */}
              {linkIndex > 0 ? (
                <Paragraph
                  key={`${linkIndex}-separator`}
                  size={PARAGRAPH_SIZE.small}
                  textStyle={TEXT_STYLE.boldUppercase}
                  kind={Variant.tertiary}
                  style={{ userSelect: 'none', fontWeight: 400 }}
                >
                  {'/'}
                </Paragraph>
              ) : null}

              {/*
               * Link
               */}
              {link?.page?.slug ? (
                <Link
                  key={linkIndex}
                  size={PARAGRAPH_SIZE.xSmall}
                  textStyle={TEXT_STYLE.boldUppercase}
                  kind={Variant.tertiary}
                  linkStyle={LinkVariant.noUnderline}
                  style={{
                    userSelect: 'none',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                  }}
                  AsElement={<GatsbyLink to={link?.page?.slug || ''} />}
                >
                  {link?.label}
                </Link>
              ) : (
                <Link
                  key={linkIndex}
                  size={PARAGRAPH_SIZE.xSmall}
                  textStyle={TEXT_STYLE.boldUppercase}
                  kind={Variant.tertiary}
                  linkStyle={LinkVariant.noUnderline}
                  style={{
                    userSelect: 'none',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    textDecoration: !link?.page?.slug ? 'none' : '',
                  }}
                >
                  {link?.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    );
  }
);
