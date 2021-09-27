import { LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { Label, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
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
        {/* {subject ? (
        <Label
          variant={LABEL_SIZE.small}
          variantStyle={TEXT_STYLE.boldUppercase}
          variantLevel={Variant.tertiary}
        >{`${subject.toUpperCase()}`}</Label>
      ) : null} */}
        <Label
          key={id}
          variant={LABEL_SIZE.small}
          variantStyle={TEXT_STYLE.boldUppercase}
          variantLevel={Variant.tertiary}
        >
          {'CORE-DOCS'}
        </Label>

        <Label
          key={id}
          variant={LABEL_SIZE.small}
          variantStyle={TEXT_STYLE.boldUppercase}
          variantLevel={Variant.tertiary}
        >
          {'/'}
        </Label>

        <Label
          key={id}
          variant={LABEL_SIZE.small}
          variantStyle={TEXT_STYLE.boldUppercase}
          variantLevel={Variant.tertiary}
        >
          {'INTRODUCTION'}
        </Label>
        {/* Navigation links */}
        {/* <div className={styles.navLinks}>
          {footerNavigation?.subNavigation?.map((subNav, subNavIndex) => {
            if (!subNav) {
              return null;
            }

            const links = subNav.links;

            return (
              <Stack key={subNavIndex} gap={[cssTheme.sizing.var.x4]}>
                <Label
                  variantStyle={TEXT_STYLE.boldUppercase}
                  variant={LABEL_SIZE.xSmall}
                  variantLevel={Variant.tertiary}
                >
                  {subNav.label || ' '}
                </Label>

                <Stack
                  key={id}
                  gap={[cssTheme.sizing.var.x4, cssTheme.sizing.var.x4, cssTheme.sizing.var.x3]}
                >
                  {links?.map((link, id) => {
                    return (
                      <Link
                        key={id}
                        variantSize={PARAGRAPH_SIZE.small}
                        AsElement={<GatsbyLink to={link?.page?.slug || ''} />}
                      >
                        {link?.label || ' '}
                      </Link>
                    );
                  })}
                </Stack>
              </Stack>
            );
          })}
        </div> */}
      </nav>
    );
  }
);
