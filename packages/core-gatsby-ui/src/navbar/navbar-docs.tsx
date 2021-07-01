import { ButtonIcon, ButtonSize, LOGO, Variant } from '@newrade/core-design-system';
import {
  BoxV2,
  Button,
  Center,
  Cluster,
  globalThemeReversed,
  Label,
  Logo,
  PrimitiveProps,
  Switch,
  Tag,
  usePreventPinchZoom,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { IoMenu } from '@react-icons/all-files/io5/IoMenu';
import React, { useRef } from 'react';
import { IoMoon, IoSearchOutline, IoSquare, IoSunny } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import * as styleRefs from './navbar-docs.treat';

export type NavBarDocsRefs = {
  readonly mobileNavbar: HTMLDivElement | undefined;
  readonly desktopNavbar: HTMLDivElement | undefined;
};

type Props = PrimitiveProps & {
  /**
   * Allow to override the max-width of the content
   */
  maxWidth?: string;
  /**
   * Inject a link around the logo
   * @example
   *  <NavBar ... HomeLink={<GatsbyLink to={'/'} />} />
   */
  HomeLink?: React.ReactNode;
  /**
   * Pass a React SVG to the mobile logo
   * @deprecated use the logo component instead <Logo name={LOGO.STANDARD}></Logo>
   */
  MobileSvgLogo?: React.ReactNode;
  /**
   * Pass a React SVG to the desktop logo
   * @deprecated use the logo component instead <Logo name={LOGO.STANDARD}></Logo>
   */
  DesktopSvgLogo?: React.ReactNode;
  /**
   * Navigation links
   */
  MenuLinks?: React.ReactNode;
  /**
   * Text to put in the tag next to the logo
   */
  tagText?: string;
  /**
   * Used to set the close or menu icon
   */
  menuOpened?: boolean;
  /**
   * callback when the mobile menu is clicked
   */
  onClickMenuButton?: (event: React.MouseEvent) => void;
  /**
   * callback when the layout mode is clicked
   */
  onLayoutModeChange?: (event: React.MouseEvent) => void;
};

/**
 * Navigation bar with an icon logo and language switch on mobile
 * and on desktop, a logo, and menu links
 */
export const NavbarDocs: React.FC<Props> = function NavbarDocs(props) {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  /**
   * Refs
   */
  const mobileNavbar = useRef<HTMLElement>(null);
  const desktopNavbar = useRef<HTMLElement>(null);

  /**
   * Events handling
   */
  function handlePressMenuButton(event: React.MouseEvent) {
    if (props.onClickMenuButton) {
      props.onClickMenuButton(event);
    }
  }

  usePreventPinchZoom(mobileNavbar.current);

  return (
    <>
      {/* Mobile */}
      <header
        ref={mobileNavbar}
        style={props.style}
        className={`${styles.wrapper} ${styles.mobileMenu} ${globalThemeReversed}`}
      >
        <Center maxWidth={props.maxWidth} className={styles.content}>
          <div className={styles.mobileWrapper}>
            <BoxV2 justifyContent={['flex-start']}>
              <Button
                aria-label={'Menu'}
                size={ButtonSize.small}
                variant={Variant.tertiary}
                icon={ButtonIcon.icon}
                Icon={props.menuOpened ? <IoClose /> : <IoMenu />}
                onClick={handlePressMenuButton}
              ></Button>
            </BoxV2>

            <BoxV2
              justifyContent={['center']}
              padding={[cssTheme.sizing.var.x2, 0]}
              AsElement={props.HomeLink}
              aria-label={'Home'}
            >
              <Logo name={LOGO.SYMBOL} className={styles.logoMobile}></Logo>
            </BoxV2>

            <BoxV2
              justifyContent={['flex-end']}
              padding={[cssTheme.sizing.var.x2, cssTheme.sizing.var.x3]}
            >
              <Label>EN</Label>
            </BoxV2>
          </div>
        </Center>
      </header>

      {/* Desktop */}
      <header
        ref={desktopNavbar}
        className={`${styles.wrapper} ${styles.desktopMenu} ${globalThemeReversed}`}
        style={props.style}
      >
        <Center maxWidth={props.maxWidth} className={styles.content}>
          <Cluster justifyContent={['space-between']} alignItems={['center']} as={'nav'}>
            <Cluster alignItems={['center']} gap={[cssTheme.sizing.var.x3]}>
              <BoxV2
                padding={[cssTheme.sizing.var.x2, 0]}
                className={styles.logoWrapper}
                AsElement={props.HomeLink}
              >
                <Logo name={LOGO.STANDARD} className={styles.logoDesktop}></Logo>
              </BoxV2>

              {props.tagText ? <Tag variant={Variant.primaryReversed}>{props.tagText}</Tag> : null}
            </Cluster>

            <Cluster justifyContent={['space-between']} gap={[cssTheme.sizing.var.x4]}>
              <Button
                icon={ButtonIcon.icon}
                variant={Variant.tertiary}
                Icon={<IoSquare size={24} style={{ color: 'white' }} />}
                aria-label={'Search button'}
                onClick={props.onLayoutModeChange}
              ></Button>

              <Switch
                value={'on'}
                IconOff={<IoMoon />}
                colorOff={cssTheme.colors.colors.grey[100]}
                IconOn={<IoSunny />}
                colorOn={cssTheme.colors.colors.grey[100]}
              ></Switch>

              <Button
                icon={ButtonIcon.icon}
                variant={Variant.tertiary}
                Icon={<IoSearchOutline size={24} style={{ color: 'white' }} />}
                aria-label={'Search button'}
              ></Button>

              {props.MenuLinks}
            </Cluster>
          </Cluster>
        </Center>
      </header>
    </>
  );
};
