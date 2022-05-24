import { FigmaPluginConfig } from '../types/figma-plugin-config';

const predefinedUXPageNames = [
  '✍️  UX / Whiteboard',
  '🧠  UX / Inspiration',
  '💡  UX / Moodboards',
  '🚧  UX / Work in Progress',
];

const predefinedExportPageNames = [
  '⬇️   Export / Logos',
  '⬇️   Export / Favicons',
  '⬇️   Export / App Icons',
];

const predefinedBrandPageNames = [
  '📸  Brand / Gallery',
  '💎  Brand / Logos',
  '🖋  Brand / Illustrations',
];

const predefinedFoundationsPageNames = [
  '🎨  Foundations / Colors',
  '🎨  Foundations / Colors / Elevation',
  '🅰   Foundations / Typography',
  '📏  Foundations / Sizing',
  '✳️  Foundations / Iconography',
  '🖼  Foundations / Photography',
  '✨  Foundations / Effects',
  '📐  Foundations / Layout',
  '▶️   Foundations / Animations',
];

const predefinedPrototypesPageNames = [
  '📱  Prototypes / Website / Mobile',
  '🖥  Prototypes / Website / Desktop',
  '📱  Prototypes / App / Mobile',
  '🖥  Prototypes / App / Desktop',
];

const predefinedTemplatesPageNames = [
  '🔰  Templates / Website',
  '🔰  Templates / Blog',
  '🔰  Templates / Email',
  '🔰  Templates / Email Signatures',
  '🔰  Templates / Social Media Covers',
  '🔰  Templates / Social Media Profile',
  '🔰  Templates / Social Media Posts',
  '🔰  Templates / Social Media Stories',
];

const predefinedPrintTemplatesPageNames = [
  '📄   Print Templates / Flyers',
  '📄   Print Templates / Business Card',
  '📄   Print Templates / Invoices',
  '📄   Print Templates / Slides (PowerPoint)',
  '📄   Print Templates / Reports (Letter)',
];

const predefinedPatternsPageNames = [
  '⚛️  Patterns / Navigation',
  '⚛️  Patterns / Notifications',
  '⚛️  Patterns / Sign Up',
  '⚛️  Patterns / Forms',
  '⚛️  Patterns / Tables',
];

const predefinedComponentsOrganismsPageNames = [
  '🔶  Components / Forms',
  '🔶  Components / Tables',
  '🔶  Components / Nav / Navbars',
  '🔶  Components / Nav / Sidebars',
  '🔶  Components / Nav / Footers',
  '🔶  Components / Search',
];

const predefinedComponentsMoleculesPageNames = [
  '🔹  Components / Buttons',
  '🔹  Components / Breadcrumbs',
  '🔹  Components / Indicators',
  '🔹  Components / Inputs',
  '🔹  Components / Progress Bars',
  '🔹  Components / Tabs',
  '🔹  Components / Tags',
  '🔹  Components / Tooltips',
  '🔹  Components / Switches',
];

const predefinedComponentsAtomsPageNames = ['◼  Components / Separators', '◼  Components / Icon'];

const predefinedUtilitiesPageNames = ['⚙️  Utilities'];

const predefinedArchivePageNames = ['💾  Archive'];

export const defaultFigmaPluginConfig: FigmaPluginConfig = {
  pages: {
    separator: '---',
    reOrderAutomatically: true,
  },
};
