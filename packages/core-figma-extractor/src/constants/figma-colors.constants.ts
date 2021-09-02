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
  [FileType.CSS]: 'figma-color.css',
  [FileType.SCSS]: 'figma-color.scss',
  [FileType.JSON]: 'figma-color.json',
  [FileType.TS]: 'figma-color.ts',
};
