import * as React from 'react'; // don't change * import (needed for Figma plugin)
import * as ReactDOM from 'react-dom'; // don't change * import (needed for Figma plugin)

import { ButtonIntention, ButtonSize } from '@newrade/core-design-system';
import { Button, Stack, Tab, TabContent, TabList, Tabs } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { Footer } from './layout/footer';
import { Providers } from './providers/providers';
import { PLUGIN_EVENT_TYPE, PluginEvent } from './messages';

import * as styles from './ui.css';

declare function require(path: string): any;

const App: React.FC<React.PropsWithChildren<{}>> = function App() {
  /**
   *
   * States
   *
   */

  const [isLoading, setIsLoading] = React.useState(false);
  const [activeTabId, setActiveTabId] = React.useState<string>('tab-1');

  /**
   *
   * Code => UI messages
   *
   */

  React.useEffect(() => {
    // @ts-ignore
    window.onmessage = (event: MessageEvent<{ pluginMessage?: PluginEvent }>) => {
      const pluginMessage = event.data.pluginMessage;

      switch (pluginMessage?.type) {
        case PLUGIN_EVENT_TYPE.LOADING: {
          setIsLoading(true);
          return;
        }
        case PLUGIN_EVENT_TYPE.NOT_LOADING: {
          setIsLoading(false);
          return;
        }
        default: {
          return;
        }
      }
    };
  }, []);

  /**
   *
   * Event handlers
   *
   */

  function handleSelectTab(event: React.MouseEvent<HTMLDivElement>) {
    const value = event.currentTarget.id;
    setActiveTabId(value);
  }

  function handleValidateFonts(event: React.MouseEvent<HTMLButtonElement>) {
    const message: PluginEvent = {
      type: PLUGIN_EVENT_TYPE.VALIDATE_USED_FONTS,
    };
    parent.postMessage({ pluginMessage: message }, '*');
    setIsLoading(true);
  }

  function handleCreateTextStyles(event: React.MouseEvent<HTMLButtonElement>) {
    const message: PluginEvent = {
      type: PLUGIN_EVENT_TYPE.UPDATE_TEXT_STYLES,
    };
    parent.postMessage({ pluginMessage: message }, '*');
    setIsLoading(true);
  }

  function handleRemoveTextStyles(event: React.MouseEvent<HTMLButtonElement>) {
    const message: PluginEvent = {
      type: PLUGIN_EVENT_TYPE.DELETE_TEXT_STYLES,
    };
    parent.postMessage({ pluginMessage: message }, '*');
    setIsLoading(true);
  }

  return (
    <Providers>
      <div className={styles.wrapper}>
        <Tabs className={styles.tabs}>
          <TabList>
            <Tab id={'tab-1'} selected={activeTabId === 'tab-1'} onClick={handleSelectTab}>
              Fonts
            </Tab>

            <Tab id={'tab-2'} selected={activeTabId === 'tab-2'} onClick={handleSelectTab}>
              Text
            </Tab>

            <Tab id={'tab-3'} selected={activeTabId === 'tab-3'} onClick={handleSelectTab}>
              Colors
            </Tab>
          </TabList>

          <TabContent aria-labelledby={'tab-1'} hidden={activeTabId !== 'tab-1'}>
            <Stack gap={[sizeVars.x2]} style={{ padding: 16 }}>
              <Button
                size={ButtonSize.small}
                onClick={handleValidateFonts}
                disabled={isLoading}
                style={{ width: `100%` }}
              >
                Test All Fonts
              </Button>
            </Stack>
          </TabContent>

          <TabContent aria-labelledby={'tab-2'} hidden={activeTabId !== 'tab-2'}>
            <Stack gap={[sizeVars.x2]} style={{ padding: 16 }}>
              <Button
                size={ButtonSize.small}
                onClick={handleCreateTextStyles}
                disabled={isLoading}
                style={{ width: `100%` }}
              >
                Sync
              </Button>

              <Button
                size={ButtonSize.small}
                onClick={handleRemoveTextStyles}
                variant={ButtonIntention.danger}
                disabled={isLoading}
                style={{ width: `100%` }}
              >
                Remove All
              </Button>
            </Stack>
          </TabContent>

          <TabContent aria-labelledby={'tab-3'} hidden={activeTabId !== 'tab-3'}>
            <Stack gap={[sizeVars.x2]} style={{ padding: 16 }}>
              Content of tab 3
            </Stack>
          </TabContent>
        </Tabs>

        <Footer></Footer>
      </div>
    </Providers>
  );
};

ReactDOM.render(<App />, document.getElementById('figma-plugin'));
