import * as React from 'react'; // don't change * import (needed for Figma plugin)
import * as ReactDOM from 'react-dom'; // don't change * import (needed for Figma plugin)

import { ButtonIntention, ButtonSize } from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  Hr,
  InputSelect,
  InputText,
  Stack,
  Tab,
  TabContent,
  TabList,
  Tabs,
} from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities-iso';

import { PLUGIN_EVENT_TYPE, PluginEvent } from './common/messages.js';
import { Footer } from './ui/components/footer.js';
import { logErrorUI, logUI } from './ui/log.ui.utilities.js';
import { Providers } from './ui/ui.providers.js';
import { postMessageToCode } from './ui/ui.utilities.js';
import * as styles from './ui.css.js';

declare function require(path: string): any;

const App: React.FC<React.PropsWithChildren<{}>> = function App() {
  /**
   *
   * States
   *
   */

  const [isLoading, setIsLoading] = React.useState(false);
  const [activeTabId, setActiveTabId] = React.useState<string>('tab-1');
  const [textStyleFamilies, setTextStyleFamilies] = React.useState<string[]>([]);
  const [selectedTextStyleFamilyName, setSelectedTextStyleFamilyName] = React.useState<string>('');
  const [newTextStyleFamilyName, setNewTextStyleFamilyName] = React.useState<string>('');

  /**
   *
   * Handle communication **from** the plugin code **to** the UI
   *
   */

  React.useEffect(() => {
    window.onmessage = (rawEvent: any) => {
      if (!rawEvent.data?.pluginMessage) {
        return;
      }

      const event: MessageEvent<{
        pluginMessage?: PluginEvent<typeof rawEvent.data.pluginMessage.type>;
      }> = rawEvent;

      const pluginMessage = event.data.pluginMessage;

      if (!pluginMessage) {
        return;
      }

      switch (pluginMessage.type) {
        case PLUGIN_EVENT_TYPE.LOADING: {
          setIsLoading(true);
          return;
        }
        case PLUGIN_EVENT_TYPE.NOT_LOADING: {
          setIsLoading(false);
          return;
        }
        case PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST_RETURN: {
          const { payload } =
            pluginMessage as PluginEvent<PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST_RETURN>;

          if (payload?.textStyleFamilyList) {
            const updatedTextStyleFamilies = keys(payload.textStyleFamilyList) as string[];
            setTextStyleFamilies(updatedTextStyleFamilies);
            if (updatedTextStyleFamilies[0]) {
              setSelectedTextStyleFamilyName(updatedTextStyleFamilies[0]);
              setNewTextStyleFamilyName(`${updatedTextStyleFamilies[0]}Copy`);
            }

            logUI(`got: ${updatedTextStyleFamilies}`);
          }

          setIsLoading(false);
          return;
        }
        case PLUGIN_EVENT_TYPE.LOG: {
          const { payload } = pluginMessage as PluginEvent<PLUGIN_EVENT_TYPE.LOG>;
          logUI(payload.message);
          return;
        }
        case PLUGIN_EVENT_TYPE.SUCCESS: {
          const { payload } = pluginMessage as PluginEvent<PLUGIN_EVENT_TYPE.SUCCESS>;
          logUI(payload.message);
          setIsLoading(false);
          return;
        }
        case PLUGIN_EVENT_TYPE.ERROR: {
          const { payload } = pluginMessage as PluginEvent<PLUGIN_EVENT_TYPE.ERROR>;
          logErrorUI(payload.message);
          logErrorUI(payload.errors);
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
    postMessageToCode({
      type: PLUGIN_EVENT_TYPE.VALIDATE_USED_FONTS,
    });
    setIsLoading(true);
  }

  function handleOrganizePages(event: React.MouseEvent<HTMLButtonElement>) {
    postMessageToCode({
      type: PLUGIN_EVENT_TYPE.SYNC_PAGES,
    });
    setIsLoading(true);
  }

  function handleGetListTextStyleFamilyList(event: React.MouseEvent<HTMLButtonElement>) {
    postMessageToCode({
      type: PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST,
    });
    setIsLoading(true);
  }

  function handleDuplicateTextStyleFamily(event: React.MouseEvent<HTMLButtonElement>) {
    postMessageToCode({
      type: PLUGIN_EVENT_TYPE.DUPLICATE_TEXT_STYLE_FAMILY,
      payload: {
        textStyleFamilyToDuplicate: selectedTextStyleFamilyName,
        newTextStyleFamilyName: newTextStyleFamilyName,
      },
    });
    setIsLoading(true);
  }

  function handleCreateTextStyles(event: React.MouseEvent<HTMLButtonElement>) {
    postMessageToCode({
      type: PLUGIN_EVENT_TYPE.UPDATE_TEXT_STYLES,
    });
    setIsLoading(true);
  }

  function handleRemoveTextStyles(event: React.MouseEvent<HTMLButtonElement>) {
    postMessageToCode({
      type: PLUGIN_EVENT_TYPE.DELETE_TEXT_STYLES,
    });
    setIsLoading(true);
  }

  /**
   *
   * Rendering plugin UI
   *
   */

  return (
    <Providers>
      <div className={styles.wrapper}>
        <Tabs className={styles.tabs}>
          <TabList>
            <Tab id={'tab-1'} selected={activeTabId === 'tab-1'} onClick={handleSelectTab}>
              Pages
            </Tab>

            <Tab id={'tab-2'} selected={activeTabId === 'tab-2'} onClick={handleSelectTab}>
              Text
            </Tab>

            <Tab id={'tab-3'} selected={activeTabId === 'tab-3'} onClick={handleSelectTab}>
              Colors
            </Tab>

            <Tab id={'tab-4'} selected={activeTabId === 'tab-4'} onClick={handleSelectTab}>
              Utilities
            </Tab>
          </TabList>

          {/**
           *
           * Pages
           *
           */}
          <TabContent aria-labelledby={'tab-1'} hidden={activeTabId !== 'tab-1'}>
            <Stack gap={[sizeVars.x2]} style={{ padding: 16 }}>
              <Button
                size={ButtonSize.small}
                onClick={handleOrganizePages}
                disabled={isLoading}
                style={{ width: `100%` }}
              >
                Sync pages
              </Button>
            </Stack>
          </TabContent>

          {/**
           *
           * Text
           *
           */}
          <TabContent aria-labelledby={'tab-2'} hidden={activeTabId !== 'tab-2'}>
            <Stack gap={[sizeVars.x2]} style={{ padding: 16 }}>
              <Button
                size={ButtonSize.small}
                onClick={handleValidateFonts}
                disabled={isLoading}
                style={{ width: `100%` }}
              >
                Check Fonts
              </Button>

              <Button
                size={ButtonSize.small}
                onClick={handleCreateTextStyles}
                disabled={isLoading}
                style={{ width: `100%` }}
              >
                Sync Text Styles
              </Button>

              <Hr></Hr>

              <Cluster
                justifyContent={['flex-start']}
                style={{ gridTemplateColumns: '1fr 1fr' }}
                gap={[sizeVars.x1]}
              >
                <Button
                  size={ButtonSize.small}
                  onClick={handleGetListTextStyleFamilyList}
                  disabled={isLoading}
                  style={{ width: `100%` }}
                >
                  List Text Styles
                </Button>

                <InputSelect
                  placeholder={'Select Family'}
                  style={{ width: `120px` }}
                  value={selectedTextStyleFamilyName}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    if (event.target.value) {
                      setSelectedTextStyleFamilyName(event.target.value);
                    }
                  }}
                >
                  {textStyleFamilies.map((family, familyIndex) => {
                    return (
                      <option key={familyIndex} value={family}>
                        {family}
                      </option>
                    );
                  })}
                </InputSelect>
              </Cluster>

              <Cluster
                justifyContent={['flex-start']}
                style={{ gridTemplateColumns: '1fr 1fr' }}
                gap={[sizeVars.x1]}
              >
                <Button
                  size={ButtonSize.small}
                  onClick={handleDuplicateTextStyleFamily}
                  disabled={isLoading}
                  style={{ width: `100%` }}
                >
                  Duplicate
                </Button>

                <InputText
                  name={'new text style family name'}
                  placeholder={'NewFamily'}
                  value={newTextStyleFamilyName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.value) {
                      setNewTextStyleFamilyName(event.target.value);
                    }
                  }}
                  style={{ width: `120px` }}
                ></InputText>
              </Cluster>

              <Hr></Hr>

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

          {/**
           *
           * Colors
           *
           */}
          <TabContent aria-labelledby={'tab-3'} hidden={activeTabId !== 'tab-3'}>
            <Stack gap={[sizeVars.x2]} style={{ padding: 16 }}>
              Todo
            </Stack>
          </TabContent>
        </Tabs>

        <Footer></Footer>
      </div>
    </Providers>
  );
};

ReactDOM.render(<App />, document.getElementById('figma-plugin'));
