declare module 'treat/theme' {
  type MyTheme = import('@newrade/core-design-system').DesignSystem;
  export interface Theme extends MyTheme {}
}
