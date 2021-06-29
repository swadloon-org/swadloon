import { LoadableComponent } from '@loadable/component';
import { ICON } from '@newrade/core-design-system';
import { IconContext as ReactIconContext } from '@react-icons/all-files';
import React from 'react';
import { CommonComponentProps } from '../props/component-common.props';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export type DynamicIconImport = (iconName: ICON) => LoadableComponent<any> | React.ElementType;

export type IconComponents<Icons extends string | undefined = undefined> = {
  [key in Icons extends string ? Icons : string]?: (props: IconBaseProps) => JSX.Element;
};

export type IconMetadata<Icons extends string | undefined = undefined> = {
  [key in Icons extends string ? Icons : string]: {
    description?: string;
    tags?: string[];
  };
};

type Context<Icons extends string | undefined = undefined> = {
  iconComponents?: IconComponents<Icons>;
  iconStyle?: Partial<CSSStyleDeclaration & Pick<CommonComponentProps, 'className'>>;
};

/**
 * Context to hold the theme's tokens
 */
export const IconContext = React.createContext<Context | null>(null);

/**
 * Custom Icon provider on top on react-icon's
 */
export function IconProvider<Icons extends string | undefined = undefined>({
  children,
  ...props
}: Context<Icons> & { children: React.ReactNode }) {
  return (
    <IconContext.Provider value={props}>
      <ReactIconContext.Provider value={props.iconStyle || {}}>
        {children}
      </ReactIconContext.Provider>
    </IconContext.Provider>
  );
}

export function useIconContext() {
  return React.useContext(IconContext);
}
