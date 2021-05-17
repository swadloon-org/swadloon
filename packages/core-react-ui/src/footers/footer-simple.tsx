import { ButtonIcon, PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { IoLogoFacebook } from '@react-icons/all-files/io5/IoLogoFacebook';
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram';
import { IoLogoLinkedin } from '@react-icons/all-files/io5/IoLogoLinkedin';
import { IoLogoTwitter } from '@react-icons/all-files/io5/IoLogoTwitter';
import React from 'react';
import { useContainerQuery } from 'react-container-query';
import { useStyles } from 'react-treat';
import { Button } from '../button/button';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { CommonComponentProps } from '../props/component-common.props';
import { Link } from '../text/link';
import { Paragraph } from '../text/paragraph';
import * as styleRefs from './footer-simple.treat';

type Props = CommonComponentProps & {
  MenuLinks?: React.ReactNode;
  SocialLinks?: React.ReactNode;
  Copyright?: React.ReactNode;
};

const query = {
  'width-between-400-and-599': {
    minWidth: 400,
    maxWidth: 599,
  },
  'width-larger-than-600': {
    minWidth: 600,
  },
};

export const FooterSimple: React.FC<Props> = ({
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
  // @ts-ignore
  const [params, containerRef] = useContainerQuery(query);

  return (
    <Stack as={'footer'} {...commonProps} gap={[cssTheme.sizing.var.x4]} ref={containerRef}>
      {/* Links */}
      {JSON.stringify(params)}
      {MenuLinks ? (
        <div className={styles.links}>{MenuLinks}</div>
      ) : (
        <Cluster className={styles.links} gap={[cssTheme.sizing.var.x3]}>
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
        <Cluster className={styles.links} gap={[cssTheme.sizing.var.x3]}>
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
