import { VIEWPORT } from '@newrade/core-design-system';
import {
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
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { CodeBlockLazy, CodeOutline } from '@newrade/core-react-ui/code';
import { GlobalCSSVariables, globalThemeReversed } from '@newrade/core-react-ui/global';
import { colorVars } from '@newrade/core-react-ui/theme';
import type { Property } from 'csstype';
import React, { ReactNode, Suspense, useRef, useState } from 'react';
import { TreatProvider } from 'react-treat';
import * as styles from './theme-wrapper.css';

type Props = Omit<PrimitiveProps<'div'>, 'theme'> & {
  /**
   * Outer theme ref
   */
  treatThemeRef: string;
  /**
   * Full theme config object
   */
  theme: Theme;
  /**
   * Classname to apply vanilla-extra theme css variables
   */
  themeClassname: string;
  /**
   * Normal children
   */
  children: ReactNode;
  /**
   * Activate knobs and controls
   */
  displayControls?: boolean;

  /**
   * Display mode
   */
  reversed?: boolean;
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
   *
   * @default false
   */
  viewportControl?: boolean;
  /**
   * Enable or disable scrolling in the x direction
   *
   * @default false
   */
  viewportOverflowX?: Property.OverflowX;
  /**
   * Enable or disable scrolling in the y direction
   *
   * @default true
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
 * Inject Treat providers
 */
const ThemeWrapperFn = React.memo(
  ({
    id,
    style,
    className,
    treatThemeRef,
    themeClassname,
    theme,
    children,
    displayControls,
    reversed,
    filename,
    code,
    viewportControl = false,
    viewportOverflowX = 'hidden',
    viewportOverflowY = 'auto',
    viewportAutoWidth = true,
    viewport,
    ...props
  }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState<'default' | 'custom'>('custom');
    const [isReversed, setIsReversed] = useState(reversed !== undefined ? reversed : false);
    //
    // the `viewport` prop has precedence on other settings
    //
    const { viewport: currentViewport } = useViewportBreakpoint();
    const [selectedViewport, setSelectedViewport] = useState<ThemeWrapperViewportMode>(
      viewport ? viewport : viewportAutoWidth ? 'auto' : currentViewport
    );
    const commonProps = useCommonProps({
      id,
      style: {
        ...style,
        backgroundColor: isReversed ? colorVars.colors.grey[1000] : '',
      },
      className,
      classNames: [
        isReversed ? globalThemeReversed : '',
        selectedTheme === 'default' ? '' : themeClassname,
      ],
    });

    function handleToggleIsReversed(event: React.ChangeEvent<HTMLSelectElement>) {
      const value = event.target.value;
      setIsReversed(value === 'normal' ? false : true);
    }

    function handleChangeTheme(event: React.ChangeEvent<HTMLSelectElement>) {
      const value = event.target.value as 'default' | 'custom';
      setSelectedTheme(value);
    }

    function handleViewportChange(event: React.ChangeEvent<HTMLSelectElement>) {
      const value = event.target.value as VIEWPORT;
      setSelectedViewport(value);
    }

    const [activeTabId, setActiveTabId] = useState<string>('design');

    function handleSelectTab(event: React.MouseEvent<HTMLDivElement>) {
      const value = event.currentTarget.id;
      if (activeTabId !== value) {
        setActiveTabId(value);
      }
    }

    /**
     *
     * iFrame
     *
     */
    // const iframeClassNames = getMergedClassname([styles[selectedViewport]]);
    const iframeWrapperRef = useRef<HTMLDivElement>(null);
    function getIframeBodyWidth(selectedViewport: ThemeWrapperViewportMode) {
      switch (selectedViewport) {
        //
        // todo uses variables instead
        // layoutVars.var.breakpoints.tabletPortrait
        // layoutVars.var.breakpoints.desktopSmall
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
    // const iframeBodyWidth = iframeWrapperRef.current?.getBoundingClientRect().width;
    // const iframeBodyWidthPx = iframeBodyWidth ? `${iframeBodyWidth}px` : undefined;

    return (
      <div className={styles.wrapper}>
        <Tabs>
          {code ? (
            <TabList>
              <Tab id={'design'} selected={activeTabId === 'design'} onClick={handleSelectTab}>
                Design
              </Tab>

              <Tab id={'source'} selected={activeTabId === 'source'} onClick={handleSelectTab}>
                Source
              </Tab>
            </TabList>
          ) : null}

          {/**
           *
           * Design tab
           *
           */}
          <TabContent aria-labelledby={'design'} hidden={activeTabId !== 'design'}>
            {displayControls ? (
              <div className={styles.header}>
                <InputSelect
                  onChange={handleToggleIsReversed}
                  style={{ minWidth: 170 }}
                  value={isReversed ? 'reversed' : 'normal'}
                >
                  <option value={'normal'}>Normal</option>
                  <option value={'reversed'}>Reversed</option>
                </InputSelect>

                <InputSelect
                  onChange={handleChangeTheme}
                  value={selectedTheme}
                  style={{ minWidth: 170 }}
                >
                  <option value={'custom'}>Custom</option>
                  <option value={'default'}>Default</option>
                </InputSelect>

                {viewportControl ? (
                  <InputSelect
                    onChange={handleViewportChange}
                    style={{ minWidth: 170 }}
                    value={selectedViewport}
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
                </TreatThemeProvider>
              </TreatProvider>
            </div>
          </TabContent>

          {/**
           *
           * Code tab
           *
           */}
          <TabContent aria-labelledby={'source'} hidden={activeTabId !== 'source'}>
            {code ? (
              <Suspense fallback={''}>
                <CodeBlockLazy filename={filename}>{code}</CodeBlockLazy>
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
