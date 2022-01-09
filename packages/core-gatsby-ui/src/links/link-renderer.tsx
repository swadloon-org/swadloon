import React, { PropsWithChildren } from 'react';

import debug from 'debug';

import {
  ButtonSize,
  ComponentSize,
  ICON,
  PARAGRAPH_SIZE,
  Variant,
} from '@newrade/core-design-system';
import { Button, IconComp, Link, useCommonProps, useIsSSR } from '@newrade/core-react-ui';
import { LinkAPI, LinkComponent, LinkType } from '@newrade/core-website-api';

import { GatsbyLink } from './gatsby-link';
import { LinkRendererProps } from './link.props';

import * as styles from './link-renderer.css';

const log = debug('nr:core-gatsby-ui:link-renderer');
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
  linkComponents,
  ...props
}: PropsWithChildren<LinkRendererProps<CustomLinkVariants>>) {
  const isSSR = useIsSSR();

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
    `rendering: ${link.label} with variant ${link.variant} and type ${link.type} and component ${link.component}`
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
  const linkSizeLink = linkData.size ? linkData.size : ComponentSize.small;
  const linkSizeButton = linkData.size ? linkData.size : ComponentSize.medium;
  const linkIsExternal = linkData.type === LinkType.externalUrl;
  const linkIcon = linkData.icon ? (linkData.icon as ICON) : linkIsExternal ? ICON.OPEN : null;

  const buttonSizes: { [key in ComponentSize]: ButtonSize } = {
    [ComponentSize.large]: ButtonSize.large,
    [ComponentSize.medium]: ButtonSize.medium,
    [ComponentSize.small]: ButtonSize.small,
    [ComponentSize.xSmall]: ButtonSize.xSmall,
  };

  const linkSizes: { [key in ComponentSize]: PARAGRAPH_SIZE } = {
    [ComponentSize.large]: PARAGRAPH_SIZE.large,
    [ComponentSize.medium]: PARAGRAPH_SIZE.medium,
    [ComponentSize.small]: PARAGRAPH_SIZE.small,
    [ComponentSize.xSmall]: PARAGRAPH_SIZE.small,
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
            !linkIsExternal ? (
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
