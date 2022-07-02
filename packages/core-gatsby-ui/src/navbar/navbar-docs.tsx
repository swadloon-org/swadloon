import React, { useRef } from 'react';

import { ButtonIcon, ButtonSize, ICON, LOGO, Variant } from '@newrade/core-design-system';
import {
  BoxV2,
  Button,
  Center,
  Cluster,
  IconComp,
  Label,
  Logo,
  PrimitiveProps,
  Switch,
  Tag,
  usePreventPinchZoom,
} from '@newrade/core-react-ui';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

import * as styles from './navbar-docs.css.js';

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
   * Navigation links
   */
  MenuLinks?: React.ReactNode;
  /**
   * Text to put in a tag next to the logo
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
   * Enable or disable the navbar layout mode button
   */
  enableLayoutModeButton?: boolean;
  /**
   * Controls the width of the main content
   */
  layoutMode?: 'centered' | 'full-width';
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
        className={`${styles.wrapper} ${styles.mobileMenu}`}
      >
        <Center maxWidth={props.maxWidth} className={styles.content}>
          <div className={styles.mobileWrapper}>
            <BoxV2 justifyContent={['flex-start']}>
              <Button
                aria-label={'Menu'}
                size={ButtonSize.small}
                variant={Variant.tertiary}
                icon={ButtonIcon.icon}
                Icon={props.menuOpened ? ICON.CLOSE : ICON.MENU}
                onClick={handlePressMenuButton}
              ></Button>
            </BoxV2>

            <BoxV2
              justifyContent={['center']}
              padding={[sizeVars.x2, 0]}
              AsElement={props.HomeLink}
              aria-label={'Home'}
            >
              <Logo name={LOGO.SYMBOL} className={styles.logoMobile}></Logo>
            </BoxV2>

            <BoxV2 justifyContent={['flex-end']} padding={[sizeVars.x2, sizeVars.x3]}>
              <Label>EN</Label>
            </BoxV2>
          </div>
        </Center>
      </header>

      {/* Desktop */}
      <header
        ref={desktopNavbar}
        className={`${styles.wrapper} ${styles.desktopMenu}`}
        style={props.style}
      >
        <Center maxWidth={props.maxWidth} className={styles.content}>
          <Cluster justifyContent={['space-between']} alignItems={['center']} as={'nav'}>
            <Cluster alignItems={['center']} gap={[sizeVars.x3]}>
              <BoxV2
                padding={[sizeVars.x2, 0]}
                className={styles.logoWrapper}
                AsElement={props.HomeLink}
              >
                <Logo name={LOGO.STANDARD} className={styles.logoDesktop}></Logo>
              </BoxV2>

              {props.tagText ? <Tag variant={Variant.primary}>{props.tagText}</Tag> : null}
            </Cluster>

            <Cluster justifyContent={['space-between']} gap={[sizeVars.x4]}>
              {props.enableLayoutModeButton ? (
                <Button
                  icon={ButtonIcon.icon}
                  variant={Variant.tertiary}
                  IconSVG={
                    <IconComp
                      name={props.layoutMode === 'centered' ? ICON.LAYOUT_CENTER : ICON.LAYOUT_WIDE}
                      style={{ height: 24, width: 24 }}
                    ></IconComp>
                  }
                  aria-label={'Search button'}
                  onClick={props.onLayoutModeChange}
                ></Button>
              ) : null}

              <Switch
                value={'on'}
                IconOff={<IconComp name={ICON.MOON} />}
                colorOff={colorVars.colors.grey[100]}
                IconOn={<IconComp name={ICON.SUN} />}
                colorOn={colorVars.colors.grey[100]}
              ></Switch>

              <Button
                icon={ButtonIcon.icon}
                variant={Variant.tertiary}
                Icon={ICON.SEARCH}
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
