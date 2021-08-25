import { LoadableComponent } from '@loadable/component';
import { ICON } from '@newrade/core-design-system';
import React from 'react';
import { IconContext as ReactIconContext } from 'react-icons';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export type DynamicIconImport = (iconName: ICON) => LoadableComponent<any> | React.ElementType;

export type IconConfig = {
  /**
   * The icon pack or kit name
   *
   * @example 'ionicons'
   */
  iconFamilyName?: string;
  /**
   * The icon pack or kit style variation
   *
   * @example 'outline'
   */
  iconFamilyStyle?: string;
  /**
   * Link to the icons documentation or original author
   *
   * @example 'https://ionic.io/ionicons'
   */
  iconFamilyWebsite?: string;
};

export type IconComponents<Icons extends string | undefined = undefined> = {
  [key in Icons extends string ? Icons : string]?: (props: IconBaseProps) => JSX.Element;
};

export type IconMetadata<Icons extends string | undefined = undefined> = {
  [key in Icons extends string ? Icons : string]: {
    /**
     * Short description of the icon and how it should be used
     */
    description?: string;
    /**
     * Keywords associated with the icon
     */
    tags?: string[];
    /**
     * Group icons together around a common subject or similarities
     */
    categories?: string[];
  };
};

type Context<Icons extends string | undefined = undefined> = IconConfig & {
  /**
   * Map with components for each icon entry
   */
  iconComponents?: IconComponents<Icons>;
  /**
   * Pass custom style and class to all icons rendered within the IconProvider
   *
   * @see https://github.com/react-icons/react-icons#configuration for what is supported
   */
  iconStyle?: Partial<ReactIconContext>;
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
