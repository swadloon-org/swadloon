import { PluginRef } from 'gatsby';

export function getGastbySourceGoogleMapsStatic(options?: { pathImgDir?: string }): PluginRef {
  return {
    resolve: `@ccalamos/gatsby-source-googlemaps-static`,
    options: {
      key: `YOUR_GOOGLE_MAPS_STATIC_API_KEY`,
      center: `LATITUDE,LONGITUDE || CITY,REGION`,
    },
  };
}
