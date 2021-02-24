export const regexName = RegExp(/^(((?![I i]mage)\w)[/]?((?![E e]ffects).)*[/]?((\d)*(\w)))$/gm);

type PathExport = {
  [key: string]: string;
};

export const FILES_TYPE_TEXT: PathExport = {
  CSS: 'figma-text.css',
  SCSS: 'figma-text.scss',
  JSON: 'figma-text.json',
  TS: 'figma-text.ts',
};
