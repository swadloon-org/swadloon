declare module 'treat/theme' {
  type MyTheme = import('core-design-system').DesignSystem;
  export interface Theme extends MyTheme {}
}
