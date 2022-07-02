import React from 'react';

import {
  ButtonIcon,
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
  Paragraph,
  Stack,
  useCommonProps,
} from '@newrade/core-react-ui';
import { lorenipsumMedium, lorenipsumShort } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { BlockAPI, LinkType, NavComponent } from '@newrade/core-website-api';

import { BlockRenderer } from '../blocks/block-renderer.js';
import { GatsbyLink } from '../links/gatsby-link.js';

import { FooterProps } from './footer.props.js';
import { FooterBase } from './footer-base.js';
import * as styles from './footer-standard.css.js';

type Props = FooterProps;

export const FooterStandard = React.forwardRef<any, Props>(
  ({ id, style, className, footer, ...props }, ref) => {
    const commonProps = useCommonProps({
      id,
      style,
      className,
      ...props,
    });

    const blocks = footer?.blocks;
    const copyright = footer?.companyInfo?.copyright;
    const facebookURL = footer?.companyInfo?.facebookPageURL;
    const twitterURL = footer?.companyInfo?.twitterPageURL;
    const instagramURL = footer?.companyInfo?.instagramPageURL;
    const linkedinURL = footer?.companyInfo?.linkedinPageURL;
    const navigation = footer?.navigation;
    const version = footer?.version;
    const footerNavigation = navigation?.component === NavComponent.footer ? navigation : null;

    return (
      <FooterBase footer={footer} ref={ref} contentClassName={styles.base} {...commonProps}>
        <Logo name={LOGO.STANDARD} className={styles.logo}></Logo>

        {blocks ? (
          blocks.map((block) => (
            <BlockRenderer
              key={block?.id}
              className={styles.block}
              block={block as BlockAPI}
            ></BlockRenderer>
          ))
        ) : (
          <Paragraph className={styles.block}>{lorenipsumMedium}</Paragraph>
        )}

        <Cluster className={styles.socialLinks} gap={[sizeVars.x3]}>
          {twitterURL ? (
            <Button
              Icon={ICON.LOGO_TWITTER}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
              as={'a'}
              href={twitterURL}
              aria-label={'Twitter Profile'}
            ></Button>
          ) : null}

          {facebookURL ? (
            <Button
              Icon={ICON.LOGO_FACEBOOK}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
              as={'a'}
              href={facebookURL}
              aria-label={'Facebook Profile'}
            ></Button>
          ) : null}

          {instagramURL ? (
            <Button
              Icon={ICON.LOGO_INSTAGRAM}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
              as={'a'}
              href={instagramURL}
              aria-label={'Instagram Profile'}
            ></Button>
          ) : null}

          {linkedinURL ? (
            <Button
              Icon={ICON.LOGO_LINKEDIN}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
              as={'a'}
              href={linkedinURL}
              aria-label={'Linkedin Profile'}
            ></Button>
          ) : null}
        </Cluster>

        <div className={styles.navLinks}>
          {footerNavigation?.subNavigation?.map((subNav, subNavIndex) => {
            if (!subNav) {
              return null;
            }

            const links = subNav.links;

            return (
              <Stack key={subNavIndex} gap={[sizeVars.x4]}>
                <Label
                  textStyle={TEXT_STYLE.boldUppercase}
                  variant={LABEL_SIZE.xSmall}
                  variantLevel={Variant.tertiary}
                >
                  {subNav.label || ' '}
                </Label>

                <Stack key={id} gap={[sizeVars.x4, sizeVars.x4, sizeVars.x3]}>
                  {links?.map((link, id) => {
                    if (link?.type === LinkType.externalUrl) {
                      return (
                        <Link
                          key={id}
                          size={PARAGRAPH_SIZE.small}
                          href={link?.url || ' '}
                          icon={LinkIcon.right}
                          IconSVG={<IconComp name={ICON.OPEN}></IconComp>}
                        >
                          {link?.label || link?.url || ' '}
                        </Link>
                      );
                    }

                    return (
                      <Link
                        key={id}
                        size={PARAGRAPH_SIZE.small}
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
        </div>

        <Paragraph
          className={styles.copyright}
          size={PARAGRAPH_SIZE.small}
          kind={Variant.secondary}
        >
          {copyright || `© ${lorenipsumShort}`}
          {version ? ` — ${version}` : ''}
        </Paragraph>
      </FooterBase>
    );
  }
);
