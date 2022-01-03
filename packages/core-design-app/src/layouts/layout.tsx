import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import {
  Center,
  Cluster,
  InputLabel,
  InputWrapper,
  Main,
  MainWrapper,
  Stack,
} from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { Component, lazyComponentImports } from './component';

type Props = {};

export const Layout: React.FC<Props> = function Layout(props) {
  return (
    <MainWrapper>
      <Main minHeight={true} navbarPadding={true}>
        <Center>
          <Stack gap={[sizeVars.x5]}>
            <InputWrapper>
              <Stack gap={[sizeVars.x3]}>
                <InputLabel htmlFor={'select-components-code'}>Select Component Code</InputLabel>
                {/* <InputSelect
                id={'select-components-code'}
                value={selectedModuleId}
                onChange={handleOnChangeModuleId}
              >
                {lazyComponentImports.map(({ moduleId }) => {
                  return (
                    <option key={moduleId} value={moduleId}>
                      {moduleId}
                    </option>
                  );
                })}
              </InputSelect> */}

                <Cluster gap={[sizeVars.x1]} wrap={true}>
                  {lazyComponentImports.map((lazyImport, lazyImportIndex) => {
                    return (
                      <Link key={lazyImport.slug} to={`components/${lazyImport.slug}`}>
                        /{lazyImport.slug}
                      </Link>
                    );
                  })}
                </Cluster>
              </Stack>
            </InputWrapper>

            <Routes>
              <Route path={'components'}>
                {lazyComponentImports.map((lazyImport, lazyImportIndex) => {
                  return (
                    <Route
                      key={lazyImport.moduleId}
                      path={`:componentSlug`}
                      element={<Component />}
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
};
