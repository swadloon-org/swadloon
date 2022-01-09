import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

import { ButtonIcon, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { Button, Cluster, Link, Paragraph, Stack, useCommonProps } from '@newrade/core-react-ui';

import { FooterProps } from './footer.props';

import * as styles from './footer-enterprise.css';

type Props = FooterProps & {
  MenuLinks?: React.ReactNode;
  SocialLinks?: React.ReactNode;
  Copyright?: React.ReactNode;
};

export const FooterEnterprise: React.FC<Props> = ({
  id,
  style,
  className,
  MenuLinks,
  SocialLinks,
  Copyright,
  ...props
}) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return (
    <Stack as={'footer'} {...commonProps} gap={[sizeVars.x4]}>
      {/* Links */}
      {MenuLinks ? (
        <div className={styles.links}>{MenuLinks}</div>
      ) : (
        <Cluster className={styles.links} gap={[sizeVars.x3]}>
          <Link>Home</Link>
          <Link>Products</Link>
          <Link>Services</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Cluster>
      )}
      {/* Social */}
      {SocialLinks ? (
        <div className={styles.links}>{SocialLinks}</div>
      ) : (
        <Cluster className={styles.links} gap={[sizeVars.x3]}>
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
      {/* Copyright */}
      <Paragraph className={styles.copyright} variant={PARAGRAPH_SIZE.xSmall}>
        {Copyright}
      </Paragraph>
    </Stack>
  );
};
