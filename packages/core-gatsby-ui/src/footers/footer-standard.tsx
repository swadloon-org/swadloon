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
  useTreatTheme,
} from '@newrade/core-react-ui/src';
import { BlockAPI, LinkType, NavComponent } from '@newrade/core-website-api';
import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { BlockRenderer } from '../blocks/block-renderer';
import { lorenipsumMedium, lorenipsumShort } from '../docs-components/loren-ipsum';
import { GatsbyLink } from '../links/gatsby-link';
import { FooterBase } from './footer-base';
import * as styleRefs from './footer-standard.treat';
import { FooterProps } from './footer.props';

type Props = FooterProps;

export const FooterStandard = React.forwardRef<any, Props>(
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

        <Cluster className={styles.socialLinks} gap={[cssTheme.sizing.var.x3]}>
          {twitterURL ? (
            <Button
              Icon={<IoLogoTwitter />}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
              as={'a'}
              href={twitterURL}
              aria-label={'Twitter Profile'}
            ></Button>
          ) : null}

          {facebookURL ? (
            <Button
              Icon={<IoLogoFacebook />}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
              as={'a'}
              href={facebookURL}
              aria-label={'Facebook Profile'}
            ></Button>
          ) : null}

          {instagramURL ? (
            <Button
              Icon={<IoLogoInstagram />}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
              as={'a'}
              href={instagramURL}
              aria-label={'Instagram Profile'}
            ></Button>
          ) : null}

          {linkedinURL ? (
            <Button
              Icon={<IoLogoLinkedin />}
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
                </Stack>
              </Stack>
            );
          })}
        </div>

        <Paragraph
          className={styles.copyright}
          variant={PARAGRAPH_SIZE.small}
          variantLevel={Variant.secondary}
        >
          {copyright || `© ${lorenipsumShort}`}
          {version ? ` — ${version}` : ''}
        </Paragraph>
      </FooterBase>
    );
  }
);
