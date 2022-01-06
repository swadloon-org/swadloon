export type PathExport = {
  [key in FileType]: string;
};

export enum FileType {
  CSS = 'CSS',
  SCSS = 'SCSS',
  JSON = 'JSON',
  TS = 'TS',
}

export const defaultOutputColorFiles: PathExport = {
  [FileType.CSS]: 'figma-colors.css',
  [FileType.SCSS]: 'figma-colors.scss',
  [FileType.JSON]: 'figma-colors.json',
  [FileType.TS]: 'figma-colors.ts',
};
