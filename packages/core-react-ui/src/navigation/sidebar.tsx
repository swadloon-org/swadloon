import React from 'react';
import { useStyles } from 'react-treat';
import { Link } from '../components/text/link';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './sidebar.treat';
import { Stack } from '../layout/stack';

type Props = CommonComponentProps & {
  variantStyle?: 'transparent' | 'white';
  navItems?: { name?: string | null; path?: string | null }[];
};

/**
 * Generic navigation bar with an icon logo and language switch on mobile
 * and on desktop, a logo, and menu links
 */
export const SideBar: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  return (
    <div className={styles.wrapper}>
      <Stack className={styles.navItemsWrapper}>
        {/* Default links */}
        {props.navItems?.map((item, index) => {
          return (
            <div key={index} className={styles.navItem}>
              <Link href={item.path || ''}>{item.name}</Link>
            </div>
          );
        })}
        {/* User provided links */}
        {props.children}
      </Stack>
    </div>
  );
};
