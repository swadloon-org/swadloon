import React, { ReactNode, Suspense, useRef, useState } from 'react';
import { TreatProvider } from 'react-treat';

import type { Property } from 'csstype';

import { InputSize, VIEWPORT } from '@newrade/core-design-system';
import {
  CSSRuntimeThemeConfig,
  CSSThemeProvider,
  IFrame,
  InputSelect,
  PrimitiveProps,
  Tab,
  TabContent,
  TabList,
  Tabs,
  Theme,
  TreatThemeProvider,
  useCommonProps,
  useCSSTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { CodeBlockLazy, CodeOutline } from '@newrade/core-react-ui/code';
import { CSSThemeProviderConfig } from '@newrade/core-react-ui/design-system';
import { GlobalCSSVariables } from '@newrade/core-react-ui/src/global/global-css-variables';
import { colorVars } from '@newrade/core-react-ui/theme';

import * as styles from './theme-wrapper.css';

enum ThemeWrapperTab {
  DESIGN = 'design',
  CODE = 'code',
}

/**
 * @typedef {Object} ThemeWrapperProps
 * @description Props for ThemeWrapper
 */
type ThemeWrapperProps = Omit<PrimitiveProps<'div'>, 'theme'> & {
  /**
   * Treat theme ref (classname)
   */
  treatThemeRef: string;
  /**
   * Full treat theme config object
   */
  theme: Theme;
  /**
   * Classname to apply vanilla-extra theme css variables
   */
  themeConfig: CSSThemeProviderConfig;
  /**
   * Normal children
   */
  children: ReactNode;
  /**
   * Whether to display tabs to switch between 'design' and 'code'
   * @default true
   */
  displayTabs?: boolean;
  /**
   * Activate knobs and controls for the design tab
   */
  displayControls?: boolean;
  /**
   * Whether to display or not the theme selection dropdown
   */
  displayThemeSelection?: boolean;
  /**
   * Display mode
   * @deprecated
   */
  reversed?: boolean;
  /**
   * Initial selected tab
   */
  initialTab?: ThemeWrapperTab;
  /**
   * Displayed filename
   */
  filename?: string;
  /**
   * Code example that will be displayed in a tab and rendered in a code block
   */
  code?: string;
  /**
   * Enable viewport selection controls
   * @default "false"
   */
  viewportControl?: boolean;
  /**
   * Enable or disable scrolling in the x direction
   * @default
   * {"viewportOverflowX": true}
   */
  viewportOverflowX?: Property.OverflowX;
  /**
   * Enable or disable scrolling in the y direction
   * @default true
   * @since v1
   *
   */
  viewportOverflowY?: Property.OverflowY;
  /**
   * Viewport will take 100% of the container width
   * @default true
   */
  viewportAutoWidth?: boolean;
  /**
   * Forces the viewport to a specific value
   */
  viewport?: VIEWPORT;
};

type ThemeWrapperViewportMode = VIEWPORT | 'auto';

/**
 * Utility component to render React components in an iframe with viewport
 * controls. It can also render source code with syntax highlighting.
 *
 * @name ThemeWrapper
 * @type {React.FC<ThemeWrapperProps>}
 * @param {ThemeWrapperProps} props
 */
const ThemeWrapperFn = React.memo(
  ({
    id,
    style,
    className,
    treatThemeRef,
    themeConfig,
    theme,
    children,
    displayTabs = true,
    displayControls,
    displayThemeSelection = true,
    reversed,
    initialTab = ThemeWrapperTab.DESIGN,
    filename,
    code,
    viewportControl = false,
    viewportOverflowX = 'hidden',
    viewportOverflowY = 'auto',
    viewportAutoWidth = true,
    viewport,
    ...props
  }: ThemeWrapperProps) => {
    /**
     *
     * Viewport selection
     *
     */

    //
    // the `viewport` prop has precedence on other settings
    //
    const { viewport: currentViewport } = useViewportBreakpoint();
    const [selectedViewport, setSelectedViewport] = useState<ThemeWrapperViewportMode>(
      viewport ? viewport : viewportAutoWidth ? 'auto' : currentViewport
    );

    function handleViewportChange(event: React.ChangeEvent<HTMLSelectElement>) {
      const value = event.target.value as VIEWPORT;
      setSelectedViewport(value);
    }

    /**
     *
     * Themes
     *
     */
    const { currentCSSTheme } = useCSSTheme();

    const [selectedTheme, setSelectedTheme] = useState<CSSRuntimeThemeConfig | undefined>(
      currentCSSTheme.selected
        ? currentCSSTheme.selected
        : themeConfig.themes.find((theme) => theme.default)
    );

    const commonProps = useCommonProps({
      id,
      style: {
        ...style,
        backgroundColor: colorVars.colorIntents.background0,
      },
      className,
      classNames: [selectedTheme && selectedTheme.className ? selectedTheme.className : ''],
    });

    function handleChangeTheme(event: React.ChangeEvent<HTMLSelectElement>) {
      const value = event.target.value as string;
      handleChangeThemeName(value);
    }

    function handleChangeThemeName(themeName: string) {
      const foundTheme = themeConfig.themes.find((theme) => theme.name === themeName);
      if (foundTheme) {
        setSelectedTheme(foundTheme);
      }
    }

    /**
     *
     * Tabs selection
     *
     */

    const [activeTabId, setActiveTabId] = useState<ThemeWrapperTab>(initialTab);

    function handleSelectTab(event: React.MouseEvent<HTMLDivElement>) {
      const value = event.currentTarget.id;
      if (activeTabId !== value) {
        setActiveTabId(value as ThemeWrapperTab);
      }
    }

    /**
     *
     * iFrame
     *
     */

    const iframeWrapperRef = useRef<HTMLDivElement>(null);
    function getIframeBodyWidth(selectedViewport: ThemeWrapperViewportMode) {
      switch (selectedViewport) {
        //
        // TODO: use variables instead
        //  layoutVars.var.breakpoints.tabletPortrait
        //  layoutVars.var.breakpoints.desktopSmall
        //
        default:
        case 'auto': {
          return '100%';
        }
        case 'mobile': {
          return `calc(320px + 2 * 32px)`;
        }
        case 'tablet': {
          return `calc(768px + 2 * 32px)`;
        }
        case 'desktop': {
          return `calc(1280px + 2 * 32px)`;
        }
      }
    }
    const iframeBodyWidth = getIframeBodyWidth(selectedViewport);

    return (
      <div className={styles.wrapper}>
        <Tabs>
          {displayTabs && code ? (
            <TabList>
              <Tab
                id={ThemeWrapperTab.DESIGN}
                selected={activeTabId === ThemeWrapperTab.DESIGN}
                onClick={handleSelectTab}
              >
                Design
              </Tab>

              <Tab
                id={ThemeWrapperTab.CODE}
                selected={activeTabId === ThemeWrapperTab.CODE}
                onClick={handleSelectTab}
              >
                Code
              </Tab>
            </TabList>
          ) : null}

          {/**
           *
           * Design tab
           *
           */}
          <TabContent
            aria-labelledby={ThemeWrapperTab.DESIGN}
            hidden={activeTabId !== ThemeWrapperTab.DESIGN}
          >
            {displayControls ? (
              <div className={styles.header}>
                {/**
                 * Theme selector
                 */}
                {displayThemeSelection ? (
                  <InputSelect
                    onChange={handleChangeTheme}
                    value={selectedTheme?.name || ''}
                    variantSize={InputSize.small}
                  >
                    {themeConfig.themes.map((theme) => {
                      return (
                        <option key={theme.name} value={theme.name}>
                          {theme.name}
                        </option>
                      );
                    })}
                  </InputSelect>
                ) : null}

                {/**
                 * Viewport selector
                 */}
                {viewportControl ? (
                  <InputSelect
                    onChange={handleViewportChange}
                    value={selectedViewport}
                    variantSize={InputSize.small}
                  >
                    <option value={'auto'}>Auto</option>
                    <option value={VIEWPORT.desktop}>Desktop</option>
                    <option value={VIEWPORT.tablet}>Tablet</option>
                    <option value={VIEWPORT.mobile}>Mobile</option>
                  </InputSelect>
                ) : null}
              </div>
            ) : null}

            <div className={styles.content}>
              <TreatProvider theme={treatThemeRef}>
                <TreatThemeProvider theme={theme}>
                  <CSSThemeProvider
                    value={{
                      config: themeConfig,
                      onChangeTheme: handleChangeThemeName,
                      selected: selectedTheme,
                    }}
                  >
                    <div
                      ref={iframeWrapperRef}
                      className={styles.iframeWrapper}
                      style={{ overflowX: viewportOverflowX, overflowY: viewportOverflowY }}
                    >
                      <IFrame
                        title={filename}
                        style={{ width: iframeBodyWidth }}
                        bodyWidth={viewportOverflowX === 'hidden' ? iframeBodyWidth : ''}
                        viewport={selectedViewport}
                      >
                        <GlobalCSSVariables>
                          <CodeOutline {...commonProps}>{children}</CodeOutline>
                        </GlobalCSSVariables>
                      </IFrame>
                    </div>
                  </CSSThemeProvider>
                </TreatThemeProvider>
              </TreatProvider>
            </div>
          </TabContent>

          {/**
           *
           * Code tab
           *
           */}
          <TabContent
            aria-labelledby={ThemeWrapperTab.CODE}
            hidden={activeTabId !== ThemeWrapperTab.CODE}
          >
            {code ? (
              <Suspense fallback={''}>
                <CodeBlockLazy filename={filename} preClassName={styles.codeblock}>
                  {code}
                </CodeBlockLazy>
              </Suspense>
            ) : null}
          </TabContent>
        </Tabs>
      </div>
    );
  }
);

ThemeWrapperFn.displayName = 'ThemeWrapper';

export const ThemeWrapper = ThemeWrapperFn;
