export const regexName = RegExp(/^(((?![I i]mage)\w)[/]?((?![E e]ffects).)*[/]?((\d)*(\w)))$/gm);

export type PathExport = {
  [key in FileType]: string;
};

export enum FileType {
  CSS = 'CSS',
  SCSS = 'SCSS',
  JSON = 'JSON',
  TS = 'TS',
}

export const outputColorFiles: PathExport = {
  [FileType.CSS]: 'figma-color.css',
  [FileType.SCSS]: 'figma-color.scss',
  [FileType.JSON]: 'figma-color.json',
  [FileType.TS]: 'figma-color.ts',
};

export const outputTextFiles: PathExport = {
  [FileType.CSS]: 'figma-text.css',
  [FileType.SCSS]: 'figma-text.scss',
  [FileType.JSON]: 'figma-text.json',
  [FileType.TS]: 'figma-text.ts',
};
