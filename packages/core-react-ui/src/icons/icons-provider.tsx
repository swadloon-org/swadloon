import { LoadableComponent } from '@loadable/component';
import { ICON } from '@newrade/core-design-system';
import { IconContext as ReactIconContext } from '@react-icons/all-files';
import React from 'react';
import { CommonComponentProps } from '../props/component-common.props';

export type DynamicIconImport = (iconName: ICON) => LoadableComponent<any>;

type Context = {
  importFunction?: DynamicIconImport;
  iconStyle?: Partial<CSSStyleDeclaration & Pick<CommonComponentProps, 'className'>>;
};

/**
 * Context to hold the theme's tokens
 */
export const IconContext = React.createContext<Context | null>(null);

/**
 * Custom Icon provider on top on react-icon's
 */
export const IconProvider = ({ children, ...props }: Context & { children: React.ReactNode }) => (
  <IconContext.Provider value={props}>
    <ReactIconContext.Provider value={props.iconStyle || {}}>{children}</ReactIconContext.Provider>
  </IconContext.Provider>
);

export function useIconContext() {
  return React.useContext(IconContext);
}
