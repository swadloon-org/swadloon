export const regexName = RegExp(/^(((?![I i]mage)\w)[/]?((?![E e]ffects).)*[/]?((\d)*(\w)))$/gm);

type PathExport = {
  [key: string]: string;
};

export const FILES_TYPE_COLORS: PathExport = {
  CSS: '../../figma/figma-color.css',
  SCSS: '../../figma/figma-color.scss',
  JSON: '../../figma/figma-color.json',
  TS: '../../figma/figma-color.ts',
};

export const FILES_TYPE_TEXT: PathExport = {
  CSS: '../../figma/figma-text.css',
  SCSS: '../../figma/figma-text.scss',
  JSON: '../../figma/figma-text.json',
  TS: '../../figma/figma-text.ts',
};
