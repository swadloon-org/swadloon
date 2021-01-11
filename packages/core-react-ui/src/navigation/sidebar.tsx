import useWebAnimations from '@wellyshen/use-web-animations';
import React, { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import * as styleRefs from './navbar.treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Center } from '../layout/center';
import { Cluster } from '../layout/cluster';
import { Button } from '../components/button/button';
import { BoxV2 } from '../layout/box-v2';
import { Label } from '../components/text/label';
import { CommonComponentProps } from '../props/component-common.props';
import { isIOS } from 'react-device-detect';

type Props = CommonComponentProps & {
  variantStyle?: 'transparent' | 'white';
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
  MenuLinks?: React.ReactNode;
};

/**
 * Generic navigation bar with an icon logo and language switch on mobile
 * and on desktop, a logo, and menu links
 */
export const SideBar: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  return <div className={styles.wrapper}>sidebar</div>;
};
