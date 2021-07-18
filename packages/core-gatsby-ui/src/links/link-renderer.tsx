import { ButtonSize, ICON, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import {
  Button,
  IconComp,
  Link,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import { LinkAPI, LinkComponent, LinkType } from '@newrade/core-website-api';
import debug from 'debug';
import React, { PropsWithChildren } from 'react';
import { useStyles } from 'react-treat';
import { GatsbyLink } from './gatsby-link';
import * as styleRefs from './link-renderer.treat';
import { LinkRendererProps, LinkRendererSize } from './link.props';

const log = debug('newrade:core-gatsby-ui:link-renderer');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Renders a link according to its variant (type) and component
 */
export function LinkRenderer<CustomLinkVariants extends string>({
  id,
  style,
  className,
  as,
  AsElement,
  link,
  size,
  linkComponents,
  ...props
}: PropsWithChildren<LinkRendererProps<CustomLinkVariants>>) {
  const isSSR = useIsSSR();
  const { cssTheme, theme } = useTreatTheme();
  const styles = useStyles(styleRefs);
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [],
    ...props,
  });

  if (!link) {
    logWarn(`link was not defined`);
    return null;
  }

  log(
    `rendering: ${link.name} with variant ${link.variant} and type ${link.type} and component ${link.component}`
  );

  /**
   * Custom Links
   */
  if (
    link.variant &&
    linkComponents &&
    linkComponents[link.variant as CustomLinkVariants | LinkType]
  ) {
    const CustomLink = linkComponents[
      link.variant as CustomLinkVariants | LinkType | LinkComponent
    ] as React.ElementType<LinkRendererProps<CustomLinkVariants>>;

    if (!CustomLink) {
      return null;
    }

    return <CustomLink link={link as LinkAPI} {...commonProps} />;
  }

  const linkData = link as LinkAPI;
  const linkSizeLink = size ? size : LinkRendererSize.small;
  const linkSizeButton = size ? size : LinkRendererSize.medium;
  const linkIcon = linkData.icon ? (linkData.icon as ICON) : null;

  const buttonSizes: { [key in LinkRendererSize]: ButtonSize } = {
    [LinkRendererSize.large]: ButtonSize.large,
    [LinkRendererSize.medium]: ButtonSize.medium,
    [LinkRendererSize.small]: ButtonSize.small,
    [LinkRendererSize.xSmall]: ButtonSize.xSmall,
  };

  const linkSizes: { [key in LinkRendererSize]: PARAGRAPH_SIZE } = {
    [LinkRendererSize.large]: PARAGRAPH_SIZE.large,
    [LinkRendererSize.medium]: PARAGRAPH_SIZE.medium,
    [LinkRendererSize.small]: PARAGRAPH_SIZE.small,
    [LinkRendererSize.xSmall]: PARAGRAPH_SIZE.small,
  };

  switch (link.component) {
    /**
     * Link component
     */
    default:
    case LinkComponent.link: {
      return (
        <Link
          variantSize={linkSizes[linkSizeLink]}
          variantLevel={(linkData.variant as Variant) || Variant.primary}
          Icon={linkIcon ? <IconComp name={linkIcon}></IconComp> : null}
          AsElement={
            linkData.type === LinkType.internalPage ? (
              <GatsbyLink to={linkData.page?.slug} />
            ) : (
              <a href={linkData.url || ''} target={'_blank'} rel="noreferrer" />
            )
          }
        >
          {linkData.label}
        </Link>
      );
    }

    /**
     * Button component
     */
    case LinkComponent.button: {
      return (
        <Button
          size={buttonSizes[linkSizeButton]}
          variant={(linkData.variant as Variant) || Variant.secondary}
          Icon={linkIcon ? <IconComp name={linkIcon}></IconComp> : null}
          AsElement={<GatsbyLink to={linkData.page?.slug} />}
        >
          {linkData.label}
        </Button>
      );
    }

    /**
     * ButtonIcon component
     */
    case LinkComponent.buttonIcon: {
      return (
        <Button
          size={buttonSizes[linkSizeButton]}
          variant={(linkData.variant as Variant) || Variant.secondary}
          Icon={linkIcon ? <IconComp name={linkIcon}></IconComp> : null}
          AsElement={<GatsbyLink to={linkData.page?.slug} />}
        >
          {linkData.label}
        </Button>
      );
    }
  }
}
