import {
  ButtonIcon,
  LABEL_SIZE,
  LOGO,
  PARAGRAPH_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  Label,
  Link,
  Logo,
  Paragraph,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { BlockAPI } from '@newrade/core-website-api';
import { IoLogoFacebook } from '@react-icons/all-files/io5/IoLogoFacebook';
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram';
import { IoLogoLinkedin } from '@react-icons/all-files/io5/IoLogoLinkedin';
import { IoLogoTwitter } from '@react-icons/all-files/io5/IoLogoTwitter';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlockRenderer } from '../blocks/block-renderer';
import { FooterBase } from './footer-base';
import * as styleRefs from './footer-standard.treat';
import { FooterProps } from './footer.props';

type Props = FooterProps;

export const FooterStandard = React.forwardRef<any, Props>(
  ({ id, style, className, footer, ...props }, ref) => {
    const { styles } = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({
      id,
      style,
      className,
      ...props,
    });

    const blocks = footer?.blocks;
    const copyright = footer?.companyInfo?.copyright;

    return (
      <FooterBase {...commonProps} footer={footer} ref={ref} contentClassName={styles.wrapper}>
        <Stack className={styles.info} gap={[cssTheme.sizing.var.x4]}>
          {/* Logo */}
          <Logo name={LOGO.STANDARD} className={styles.logo}></Logo>

          {/* Block */}
          {blocks
            ? blocks.map((block) => (
                <BlockRenderer key={block?.id} block={block as BlockAPI}></BlockRenderer>
              ))
            : null}

          {/* Social links */}
          <Cluster className={styles.links} gap={[cssTheme.sizing.var.x2]}>
            <Button
              Icon={<IoLogoTwitter />}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
            ></Button>

            <Button
              Icon={<IoLogoFacebook />}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
            ></Button>

            <Button
              Icon={<IoLogoInstagram />}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
            ></Button>

            <Button
              Icon={<IoLogoLinkedin />}
              icon={ButtonIcon.icon}
              variant={Variant.tertiary}
            ></Button>
          </Cluster>
        </Stack>

        {/* Navigation Links */}
        <Stack className={styles.links} gap={[cssTheme.sizing.var.x2]}>
          <Label
            variantStyle={TEXT_STYLE.boldUppercase}
            variant={LABEL_SIZE.xSmall}
            variantLevel={Variant.tertiary}
          >
            Solutions
          </Label>
          <Link>Marketing</Link>
          <Link>Analytics</Link>
          <Link>Commerce</Link>
          <Link>Insights</Link>
        </Stack>

        {/* Copyright */}
        <Paragraph className={styles.copyright} variant={PARAGRAPH_SIZE.small}>
          {copyright}
        </Paragraph>
      </FooterBase>
    );
  }
);
