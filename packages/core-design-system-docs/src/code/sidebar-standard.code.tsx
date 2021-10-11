import { SidebarStandardLazy, useSidebarState } from '@newrade/core-gatsby-ui/src';
import { Button, useTreatTheme } from '@newrade/core-react-ui';
import React, { Suspense } from 'react';

type Props = {};

export const SidebarsStandard: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();
  const [sidebarOpened, setSidebarOpened] = useSidebarState({
    initial: false,
    autoCloseOnDesktop: false,
  });

  const handleSidebar = () => setSidebarOpened(!sidebarOpened);

  return (
    <div style={{ height: '600px', transform: 'translate3d(0,0,0)', overflow: 'hidden' }}>
      <Suspense fallback={''}>
        <SidebarStandardLazy
          sidebarOpened={sidebarOpened}
          disableBodyScroll={false}
          onClickMenuButton={handleSidebar}
          onClickBackdrop={handleSidebar}
          style={{
            minHeight: '600px',
            maxHeight: '600px',
          }}
        ></SidebarStandardLazy>
      </Suspense>

      <Button onClick={handleSidebar}>Toggle Sidebar</Button>
    </div>
  );
};
