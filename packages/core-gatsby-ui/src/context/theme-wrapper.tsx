import { MDXProvider } from '@mdx-js/react';
import {
  globalThemeReversed,
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
import { CodeBlock, CodeOutline } from '@newrade/core-react-ui/lib/code';
import { GlobalCSSVariables } from '@newrade/core-react-ui/lib/global/global-css-variables';
import { mdxComponents } from '@newrade/core-react-ui/lib/markdown';
import React, { ReactNode, useState } from 'react';
import { TreatProvider } from 'react-treat';
import * as styles from './theme-wrapper.css';

type Props = PrimitiveProps & {
  /**
   * Outer theme ref
   */
  treatThemeRef: string;
  /**
   * Full theme config object
   */
  theme: Theme;
  themeClassname: string;
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
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [isReversed, setIsReversed] = useState(false);
  const { cssTheme } = useTreatTheme();

  const commonProps = useCommonProps({
    id,
    style: {
      ...style,
      backgroundColor: isReversed ? cssTheme.colors.colors.grey[900] : '',
    },
    className,
    classNames: [isReversed ? globalThemeReversed : '', selectedTheme ? '' : themeClassname],
  });

  function handleToggleIsReversed(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setIsReversed(value === 'normal' ? false : true);
  }

  function handleChangeTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
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
        <TabList>
          <Tab id={'example'} selected={activeTabId === 'example'} onClick={handleSelectTab}>
            Example
          </Tab>

          <Tab id={'source'} selected={activeTabId === 'source'} onClick={handleSelectTab}>
            Source
          </Tab>
        </TabList>

        <TabContent aria-labelledby={'example'} hidden={activeTabId !== 'example'}>
          {displayControls ? (
            <div className={styles.header}>
              <InputSelect onChange={handleToggleIsReversed} style={{ minWidth: 170 }}>
                <option value={'normal'}>Normal</option>
                <option value={'reversed'}>Reversed</option>
              </InputSelect>

              <InputSelect onChange={handleChangeTheme} style={{ minWidth: 170 }}>
                <option value={'theme'}>Theme</option>
                <option value={'default'}>Default</option>
              </InputSelect>
            </div>
          ) : null}

          <div>
            <TreatProvider theme={treatThemeRef}>
              <TreatThemeProvider theme={theme}>
                <GlobalCSSVariables>
                  <MDXProvider components={mdxComponents}>
                    <CodeOutline {...commonProps}>{children}</CodeOutline>
                  </MDXProvider>
                </GlobalCSSVariables>
              </TreatThemeProvider>
            </TreatProvider>
          </div>
        </TabContent>

        <TabContent aria-labelledby={'source'} hidden={activeTabId !== 'source'}>
          {code ? <CodeBlock filename={filename}>{code}</CodeBlock> : null}
        </TabContent>
      </Tabs>
    </div>
  );
};
