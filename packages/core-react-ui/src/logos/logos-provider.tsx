import React, { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';

export interface LogoBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
}

export type LogoComponents<Logos extends string | undefined = undefined> = {
  [key in Logos extends string ? Logos : string]: ForwardRefExoticComponent<
    PropsWithoutRef<LogoBaseProps> & RefAttributes<any>
  >;
};

type Context<Icons extends string | undefined = undefined> = {
  logoComponents?: LogoComponents<Icons>;
};

/**
 * Context to hold the theme's tokens
 */
export const LogosContext = React.createContext<Context | null>(null);

/**
 * Provider for Logo components
 */
export function LogosProvider<Logos extends string | undefined = undefined>({
  children,
  ...props
}: Context<Logos> & { children: React.ReactNode }) {
  return <LogosContext.Provider value={props}>{children}</LogosContext.Provider>;
}

export function useLogosContext() {
  return React.useContext(LogosContext);
}
