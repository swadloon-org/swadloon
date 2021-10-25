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
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { CodeBlockLazy, CodeOutline } from '@newrade/core-react-ui/code';
import { GlobalCSSVariables, globalThemeReversed } from '@newrade/core-react-ui/global';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';
import React, { ReactNode, Suspense, useState } from 'react';
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
   * Sets the viewport automatically, false means it will use the available width.
   * @default true
   */
  autoViewport?: boolean;
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
   * Forces the viewport
   */
  viewport?: VIEWPORT;
};

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
    autoViewport = true,
    viewport,
    ...props
  }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState<'default' | 'custom'>('custom');
    const [isReversed, setIsReversed] = useState(reversed !== undefined ? reversed : false);
    const { viewport: currentViewport } = useViewportBreakpoint();
    const [selectedViewport, setSelectedViewport] = useState<VIEWPORT | undefined>(
      autoViewport ? (viewport ? viewport : currentViewport) : undefined
    );
    const { cssTheme } = useTreatTheme();

    console.log('render', filename);

    const commonProps = useCommonProps({
      id,
      style: {
        ...style,
        backgroundColor: isReversed ? cssTheme.colors.colors.grey[900] : '',
        // backgroundImage: isReversed ? '' : 'linear-gradient(45deg, #fbc2eb 0%, #a6c1ee 100%)',
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

    const [activeTabId, setActiveTabId] = useState<string>('example');

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
    const iframeClassNames = getMergedClassname([
      selectedViewport ? styles[selectedViewport] : styles.iframeDefaultViewport,
    ]);

    return (
      <div className={styles.wrapper}>
        <Tabs>
          {code ? (
            <TabList>
              <Tab id={'example'} selected={activeTabId === 'example'} onClick={handleSelectTab}>
                Example
              </Tab>

              <Tab id={'source'} selected={activeTabId === 'source'} onClick={handleSelectTab}>
                Source
              </Tab>
            </TabList>
          ) : null}

          <TabContent aria-labelledby={'example'} hidden={activeTabId !== 'example'}>
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

                {autoViewport ? (
                  <InputSelect
                    onChange={handleViewportChange}
                    style={{ minWidth: 170 }}
                    value={selectedViewport}
                  >
                    <option value={VIEWPORT.mobile}>Mobile</option>
                    <option value={VIEWPORT.tablet}>Tablet</option>
                    <option value={VIEWPORT.desktop}>Desktop</option>
                  </InputSelect>
                ) : null}
              </div>
            ) : null}

            <div className={styles.content}>
              <TreatProvider theme={treatThemeRef}>
                <TreatThemeProvider theme={theme}>
                  <div className={styles.iframeWrapper}>
                    <IFrame
                      title={filename}
                      viewport={selectedViewport}
                      className={iframeClassNames}
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
