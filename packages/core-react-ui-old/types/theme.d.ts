declare module 'treat/theme' {
  type MyTheme = import('@newrade/core-design-system-old').DesignSystem;
  export interface Theme extends MyTheme {}
}
