import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import { title } from 'case';

import {
  Center,
  Cluster,
  InputLabel,
  InputWrapper,
  Link,
  Main,
  MainWrapper,
  NavbarModular,
  NavbarSelectItem,
  Stack,
  useCSSTheme,
} from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { LazyComponentLoader } from './component';
import { lazyComponentImports } from './context-require';

import * as styles from './layout.css';

type Props = {};

export const Layout: React.FC<Props> = React.memo(function Layout(props) {
  type ThemeValue = 'Light' | 'Dark';

  const { currentCSSTheme } = useCSSTheme();

  function handleChangeTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    if (!value) {
      return;
    }
    if (currentCSSTheme.onChangeTheme) {
      currentCSSTheme.onChangeTheme(value);
    }
  }

  const NavbarRightItems = (
    <NavbarSelectItem
      select={{
        placeholder: 'Choose Theme',
        value: currentCSSTheme.selected?.name,
        onChange: handleChangeTheme,
      }}
    >
      {currentCSSTheme.config.themes.map((theme, themeIndex) => {
        return (
          <option key={themeIndex} value={theme.name}>
            {theme.name}
          </option>
        );
      })}
    </NavbarSelectItem>
  );

  return (
    <MainWrapper className={styles.layout}>
      <NavbarModular rightDesktop={NavbarRightItems} right={NavbarRightItems}></NavbarModular>

      <Main minHeight={true} navbarPadding={true}>
        <Center>
          <Stack gap={[sizeVars.x5]} style={{ paddingBottom: sizeVars.x6 }}>
            {/*
             * List all components as a link
             */}
            <InputWrapper>
              <Stack gap={[sizeVars.x3]}>
                <InputLabel htmlFor={'select-components-code'}>Select Component</InputLabel>
                <Cluster gap={[sizeVars.x1]} wrap={true}>
                  {lazyComponentImports.map((lazyImport, lazyImportIndex) => {
                    return (
                      <Link
                        key={lazyImportIndex}
                        AsElement={
                          <RouterLink
                            key={lazyImport.slug}
                            to={`components/${lazyImport.slug}`}
                          ></RouterLink>
                        }
                      >
                        {title(lazyImport.slug)}
                      </Link>
                    );
                  })}
                </Cluster>
              </Stack>
            </InputWrapper>

            {/*
             * Load lazy loaded components
             */}
            <Routes>
              <Route path={'components'}>
                {lazyComponentImports.map((lazyImport, lazyImportIndex) => {
                  return (
                    <Route
                      key={lazyImport.moduleId}
                      path={`:componentSlug`}
                      element={<LazyComponentLoader lazyComponentImports={lazyComponentImports} />}
                    ></Route>
                  );
                })}
              </Route>
            </Routes>

            <Outlet />
          </Stack>
        </Center>
      </Main>
    </MainWrapper>
  );
});
