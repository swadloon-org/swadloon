export type FigmaTextLabel = {
  id: string | number;
  textType: string;
  mediaQuery: string;
  textSize: string;
  textVariant?: string;
  fontFamily: string;
  fontPostScriptName: string;
  fontWeight: number;
  paragraphSpacing: number;
  fontSize: number;
  letterSpacing: number;
  lineHeightPx: number;
  lineHeightPercent: number;
};
export type FigmaTextParagraphe = {
  id: string | number;
  textType: string;
  mediaQuery: string;
  textSize: string;
  textVariant?: string;
  fontFamily: string;
  fontPostScriptName: string;
  fontWeight: number;
  paragraphSpacing: number;
  fontSize: number;
  letterSpacing: number;
  lineHeightPx: number;
  lineHeightPercent: number;
};
export type FigmaTextHeading = {
  id: string | number;
  textType: string;
  mediaQuery: string;
  textSize: string;
  textVariant?: string;
  fontFamily: string;
  fontPostScriptName: string;
  fontWeight: number;
  paragraphSpacing: number;
  fontSize: number;
  letterSpacing: number;
  lineHeightPx: number;
  lineHeightPercent: number;
};

export type TextTokens = {
  [key: string]: FigmaTextLabel | FigmaTextParagraphe | FigmaTextHeading;
};
