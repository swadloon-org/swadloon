import React from 'react';
import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import { PLUGIN_CONSTANTS } from './constants';

let LayoutComponent: any;
let ProvidersComponent: any;

/**
 * Load the specified layout component and return the wrapPageElement with it
 */
try {
  if (!PLUGIN_CONSTANTS.CORE_LAYOUT_COMPONENT_PATH) {
    throw new Error(
      `Couldn't find layout component at "${PLUGIN_CONSTANTS.CORE_LAYOUT_COMPONENT_PATH}\n\n` +
        `Please create layout component in that location or specify path to layout component in gatsby-config.js`
    );
  }
  LayoutComponent = require(PLUGIN_CONSTANTS.CORE_LAYOUT_COMPONENT_PATH);
} catch (e) {
  if (e.toString().indexOf(`Error: Cannot find module`) !== -1) {
    throw new Error(
      `Couldn't find layout component at "${PLUGIN_CONSTANTS.CORE_LAYOUT_COMPONENT_PATH}\n\n`
    );
  } else {
    // Logging the error for debugging older browsers as there is no way
    // to wrap the thrown error in a try/catch.
    console.error(e);
    throw e;
  }
}

try {
  if (!PLUGIN_CONSTANTS.CORE_PROVIDERS_COMPONENT_PATH) {
    throw new Error(
      `Couldn't find providers component at "${PLUGIN_CONSTANTS.CORE_PROVIDERS_COMPONENT_PATH}.\n\n`
    );
  }
  ProvidersComponent = require(PLUGIN_CONSTANTS.CORE_PROVIDERS_COMPONENT_PATH);
} catch (e) {
  if (e.toString().indexOf(`Error: Cannot find module`) !== -1) {
    throw new Error(
      `Couldn't find providers component at "${PLUGIN_CONSTANTS.CORE_PROVIDERS_COMPONENT_PATH}.\n\n`
    );
  } else {
    // Logging the error for debugging older browsers as there is no way
    // to wrap the thrown error in a try/catch.
    console.error(e);
    throw e;
  }
}

export const wrapPageElementFunction: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <LayoutComponent {...props}>{element}</LayoutComponent>
);

export const wrapRootElementFunction: GatsbyBrowser['wrapRootElement'] = ({ element, props }) => (
  <ProvidersComponent {...props}>{element}</ProvidersComponent>
);

// @ts-ignore
export const wrapPageElementSSRFunction: GatsbySSR['wrapPageElement'] = ({ element, props }) =>
  (<LayoutComponent {...props}>{element}</LayoutComponent>) as any;

// @ts-ignore
export const wrapRootElementSSRFunction: GatsbySSR['wrapRootElement'] = ({ element, props }) =>
  (<ProvidersComponent {...props}>{element}</ProvidersComponent>) as any;
