declare module 'treat/theme' {
  type MyTheme = import('core-design-system-old').DesignSystem;
  export interface Theme extends MyTheme {}
}
