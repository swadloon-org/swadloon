import { MDXProvider } from '@mdx-js/react';
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
} from '@newrade/core-react-ui';
import { CodeBlockLazy, CodeOutline } from '@newrade/core-react-ui/code';
import { GlobalCSSVariables, globalThemeReversed } from '@newrade/core-react-ui/global';
import React, { ReactNode, Suspense, useState } from 'react';
import { TreatProvider } from 'react-treat';
import { mdxComponents } from '../mdx/mdx-components';
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
};

/**
 * Inject Treat providers
 */
export const ThemeWrapper = ({
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
  ...props
}: Props) => {
  const [selectedTheme, setSelectedTheme] = useState<'default' | 'custom'>('custom');
  const [isReversed, setIsReversed] = useState(reversed !== undefined ? reversed : false);
  const { cssTheme } = useTreatTheme();

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

  const [activeTabId, setActiveTabId] = useState<string>('example');

  function handleSelectTab(event: React.MouseEvent<HTMLDivElement>) {
    const value = event.currentTarget.id;
    setActiveTabId(value);
  }

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
              <InputSelect onChange={handleToggleIsReversed} style={{ minWidth: 170 }}>
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
            </div>
          ) : null}

          <div className={styles.content}>
            <IFrame title="functional-iframe">
              <TreatProvider theme={treatThemeRef}>
                <TreatThemeProvider theme={theme}>
                  <GlobalCSSVariables>
                    <MDXProvider components={mdxComponents}>
                      <CodeOutline {...commonProps}>{children}</CodeOutline>
                    </MDXProvider>
                  </GlobalCSSVariables>
                </TreatThemeProvider>
              </TreatProvider>
            </IFrame>
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
};
