import { LinkVariant, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { Link, Paragraph, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './breadcrumbs-docs.treat';
import { BreadcrumbsProps } from './breadcrumbs.props';

type Props = BreadcrumbsProps;

/**
 * Add SEO compatible breadcrumbs fron a Navigation tree object
 *
 * @see https://developers.google.com/search/docs/advanced/structured-data/breadcrumb
 */
export const BreadcrumbsDocs = React.forwardRef<any, Props>(
  ({ id, style, className, breadcrumbs, ...props }, ref) => {
    const styles = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();
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
                  variant={PARAGRAPH_SIZE.xSmall}
                  variantLevel={Variant.tertiary}
                  style={{ userSelect: 'none' }}
                >
                  {'/'}
                </Paragraph>
              ) : null}

              {/*
               * Link
               */}
              <Link
                key={linkIndex}
                variantSize={PARAGRAPH_SIZE.small}
                variantLevel={Variant.tertiary}
                variant={LinkVariant.noUnderline}
                style={{ userSelect: 'none' }}
              >
                {link?.label}
              </Link>
            </React.Fragment>
          );
        })}
      </nav>
    );
  }
);
