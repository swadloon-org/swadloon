import { SidebarStandard, useSidebarState } from '@newrade/core-gatsby-ui/src';
import { Button, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const SidebarsStandard: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();
  const [sidebarOpened, setSidebarOpened] = useSidebarState({
    initial: true,
    autoCloseOnDesktop: false,
  });

  const handleSidebar = () => setSidebarOpened(!sidebarOpened);

  return (
    <div style={{ height: '600px', transform: 'translate3d(0,0,0)' }}>
      <SidebarStandard
        sidebarOpened={sidebarOpened}
        onClickMenuButton={handleSidebar}
        onClickBackdrop={handleSidebar}
      ></SidebarStandard>

      <Button onClick={handleSidebar}>Toggle Sidebar</Button>
    </div>
  );
};
