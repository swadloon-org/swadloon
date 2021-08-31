import React from 'react';

export const LANGUAGE_KEY = 'gatsby-i18next-language';

export type I18NextContext = {
  language: string;
  routed: boolean;
  languages: string[];
  defaultLanguage: string;
  originalPath: string;
  path: string;
  siteUrl?: string;
};

export const I18nextContext = React.createContext<I18NextContext>({
  language: 'en',
  languages: ['en'],
  routed: false,
  defaultLanguage: 'en',
  originalPath: '/',
  path: '/',
});
