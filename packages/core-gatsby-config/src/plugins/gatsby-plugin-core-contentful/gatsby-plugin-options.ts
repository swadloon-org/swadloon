export type GatsbyCoreContentfulPluginOptions = {
  packageName: string;
  locales?: ('fr-CA' | 'en-CA')[];
  features: {
    blog: boolean;
    portfolio: boolean;
  };
};
