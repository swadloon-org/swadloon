import {
  ButtonIcon,
  LABEL_SIZE,
  PARAGRAPH_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';
import { IoLogoFacebook } from '@react-icons/all-files/io5/IoLogoFacebook';
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram';
import { IoLogoLinkedin } from '@react-icons/all-files/io5/IoLogoLinkedin';
import { IoLogoTwitter } from '@react-icons/all-files/io5/IoLogoTwitter';
import React from 'react';
import { useStyles } from 'react-treat';
import { Button } from '../button/button';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { Switcher } from '../layout/switcher';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import { Link } from '../text/link';
import { Paragraph } from '../text/paragraph';
import * as styleRefs from './footer-standard.treat';

type Props = CommonComponentProps & {
  MenuLinks?: React.ReactNode;
  SocialLinks?: React.ReactNode;
  Copyright?: React.ReactNode;
};

export const FooterStandard: React.FC<Props> = ({
  id,
  style,
  className,
  MenuLinks,
  SocialLinks,
  Copyright,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return (
    <Stack as={'footer'} {...commonProps} gap={[cssTheme.sizing.var.x4]}>
      <Switcher className={styles.links} gap={[cssTheme.sizing.var.x3]}>
        <Stack className={styles.info} gap={[cssTheme.sizing.var.x2]}>
          {/* Copyright */}
          <Paragraph variant={PARAGRAPH_SIZE.xSmall}>
            Making the world a better place through constructing elegant hierarchies.
          </Paragraph>
          {/* Social */}
          {SocialLinks ? (
            <div className={styles.links}>{SocialLinks}</div>
          ) : (
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
          )}
        </Stack>
        {/* Links */}
        {MenuLinks ? (
          <div className={styles.links}>{MenuLinks}</div>
        ) : (
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
        )}
        {/* Links */}
        {MenuLinks ? (
          <div className={styles.links}>{MenuLinks}</div>
        ) : (
          <Stack className={styles.links} gap={[cssTheme.sizing.var.x2]}>
            <Label
              variantStyle={TEXT_STYLE.boldUppercase}
              variant={LABEL_SIZE.xSmall}
              variantLevel={Variant.tertiary}
            >
              Support
            </Label>
            <Link>Pricing</Link>
            <Link>Doc</Link>
            <Link>Guides</Link>
            <Link>API Status</Link>
          </Stack>
        )}
      </Switcher>
      {/* Copyright */}
      <Paragraph className={styles.copyright} variant={PARAGRAPH_SIZE.xSmall}>
        {Copyright}
      </Paragraph>
    </Stack>
  );
};
