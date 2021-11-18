import {
  ButtonIcon,
  ButtonSize,
  ICON,
  LABEL_SIZE,
  LinkIcon,
  LOGO,
  PARAGRAPH_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  IconComp,
  Label,
  Link,
  Logo,
  NavbarSeparatorItem,
  Paragraph,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { BlockAPI, LinkAPI, LinkType, NavComponent } from '@newrade/core-website-api';
import React from 'react';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { BlockRenderer } from '../blocks/block-renderer';
import { GatsbyLink } from '../links/gatsby-link';
import { FooterBase } from './footer-base';
import * as styleRefs from './footer-docs.treat';
import { FooterProps } from './footer.props';

type Props = FooterProps;

export const FooterDocs = React.forwardRef<any, Props>(
  ({ id, style, className, footer, ...props }, ref) => {
    const styles = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({
      id,
      style,
      className,
      ...props,
    });

    const blocks = footer?.blocks;
    const facebookURL = footer?.companyInfo?.facebookPageURL;
    const twitterURL = footer?.companyInfo?.twitterPageURL;
    const instagramURL = footer?.companyInfo?.instagramPageURL;
    const linkedinURL = footer?.companyInfo?.linkedinPageURL;
    const githubURL = footer?.companyInfo?.githubPageURL;
    const navigation = footer?.navigation;
    const footerNavigation = navigation?.component === NavComponent.footer ? navigation : null;

    /**
     * Navigation
     */

    function renderLinks(links?: LinkAPI[] | null) {
      return (
        <>
          {links?.map((link, id) => {
            if (link?.type === LinkType.externalUrl) {
              return (
                <Link
                  key={id}
                  variantSize={PARAGRAPH_SIZE.small}
                  href={link?.url || ' '}
                  variantIcon={LinkIcon.right}
                  Icon={<IconComp name={ICON.OPEN}></IconComp>}
                >
                  {link?.label || link?.url || ' '}
                </Link>
              );
            }

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
        </>
      );
    }

    /**
     * Social links
     */

    type SocialLink =
      | {
          Icon: JSX.Element;
          icon: ButtonIcon;
          variant: Variant;
          as: string;
          href: string;
          ariaLabel: string;
        }
      | '|';

    const socialLinks = [
      twitterURL
        ? {
            Icon: <IoLogoTwitter />,
            icon: ButtonIcon.icon,
            variant: Variant.tertiary,
            as: 'a',
            href: twitterURL,
            ariaLabel: 'Twitter Profile',
          }
        : null,
      facebookURL
        ? {
            Icon: <IoLogoFacebook />,
            icon: ButtonIcon.icon,
            variant: Variant.tertiary,
            as: 'a',
            href: facebookURL,
            ariaLabel: 'Facebook Profile',
          }
        : null,
      instagramURL
        ? {
            Icon: <IoLogoInstagram />,
            icon: ButtonIcon.icon,
            variant: Variant.tertiary,
            as: 'a',
            href: instagramURL,
            ariaLabel: 'Instagram Profile',
          }
        : null,
      linkedinURL
        ? {
            Icon: <IoLogoLinkedin />,
            icon: ButtonIcon.icon,
            variant: Variant.tertiary,
            as: 'a',
            href: linkedinURL,
            ariaLabel: 'Linkedin Profile',
          }
        : null,
      githubURL
        ? {
            Icon: <IoLogoGithub />,
            icon: ButtonIcon.icon,
            variant: Variant.tertiary,
            as: 'a',
            href: githubURL,
            ariaLabel: 'Github Profile',
          }
        : null,
    ].reduce((previous, current) => {
      if (!current) {
        return previous;
      }
      if (previous.length) {
        return [...previous, '|', current] as SocialLink[];
      }
      return [...previous, current] as SocialLink[];
    }, [] as SocialLink[]);

    function renderSocialLinks(socialLinks: SocialLink[]) {
      return (
        <>
          {socialLinks.map((socialLink, index) =>
            socialLink === '|' ? (
              <NavbarSeparatorItem key={index}></NavbarSeparatorItem>
            ) : (
              <Button
                key={index}
                Icon={socialLink.Icon}
                icon={socialLink.icon}
                size={ButtonSize.xSmall}
                variant={socialLink.variant}
                as={'a'}
                href={socialLink.href}
                target={'_blank'}
                aria-label={socialLink.ariaLabel}
              ></Button>
            )
          )}
        </>
      );
    }

    /**
     * Copyright and version
     */

    const version = footer?.version;
    const copyright = footer?.companyInfo?.copyright;
    const formattedVersion = version ? (/^v/gi.test(version) ? version : `v${version}`) : '';
    const copyrightAndVersion = [copyright, formattedVersion].filter((str) => !!str).join(' – ');

    return (
      <FooterBase footer={footer} ref={ref} contentClassName={styles.base} {...commonProps}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Logo name={LOGO.STANDARD} className={styles.logo}></Logo>
        </div>

        {/* Text content */}
        {blocks
          ? blocks.map((block) => (
              <BlockRenderer
                key={block?.id}
                className={styles.block}
                block={block as BlockAPI}
              ></BlockRenderer>
            ))
          : null}

        {/* Social links */}
        <Cluster className={styles.profileLinks}>{renderSocialLinks(socialLinks)}</Cluster>

        {/* Navigation links */}
        <div className={styles.navLinks}>
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
                  {renderLinks(links as LinkAPI[])}
                </Stack>
              </Stack>
            );
          })}
        </div>

        {/* Mobile Footer */}
        {/* Copyright */}
        <Paragraph
          className={styles.copyright}
          variant={PARAGRAPH_SIZE.small}
          variantLevel={Variant.secondary}
        >
          {copyrightAndVersion}
        </Paragraph>

        {/* Desktop Footer */}
        <Cluster className={styles.profileLinksDesktop} gap={[cssTheme.sizing.var.x5]}>
          {/* Copyright */}
          <Paragraph
            className={styles.copyrightDesktop}
            variant={PARAGRAPH_SIZE.small}
            variantLevel={Variant.secondary}
          >
            {copyrightAndVersion}
          </Paragraph>

          {/* Social links */}
          <Cluster>{renderSocialLinks(socialLinks)}</Cluster>
        </Cluster>
      </FooterBase>
    );
  }
);
