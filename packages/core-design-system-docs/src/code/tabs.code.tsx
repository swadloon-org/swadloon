import React, { useState } from 'react';

import { Tab, TabContent, TabList, Tabs } from '@newrade/core-react-ui';

type Props = {};

export const TabsExample: React.FC<Props> = (props) => {
  const [activeTabId, setActiveTabId] = useState<string>('tab-1');

  function handleSelectTab(event: React.MouseEvent<HTMLDivElement>) {
    const value = event.currentTarget.id;
    setActiveTabId(value);
  }

  return (
    <Tabs>
      <TabList>
        <Tab id={'tab-1'} selected={activeTabId === 'tab-1'} onClick={handleSelectTab}>
          Tab 1
        </Tab>

        <Tab id={'tab-2'} selected={activeTabId === 'tab-2'} onClick={handleSelectTab}>
          Tab 2
        </Tab>

        <Tab id={'tab-3'} selected={activeTabId === 'tab-3'} onClick={handleSelectTab}>
          Tab 3
        </Tab>
      </TabList>

      <TabContent aria-labelledby={'tab-1'} hidden={activeTabId !== 'tab-1'}>
        <div style={{ padding: 16 }}>Content of tab 1</div>
      </TabContent>

      <TabContent aria-labelledby={'tab-2'} hidden={activeTabId !== 'tab-2'}>
        <div style={{ padding: 16 }}>Content of tab 2</div>
      </TabContent>

      <TabContent aria-labelledby={'tab-3'} hidden={activeTabId !== 'tab-3'}>
        <div style={{ padding: 16 }}>Content of tab 3</div>
      </TabContent>
    </Tabs>
  );
};
