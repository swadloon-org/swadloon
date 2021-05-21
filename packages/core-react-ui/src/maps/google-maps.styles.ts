import { Theme } from '../design-system';
import { getCSSHexColor } from '../utilities/colors.utilities';

/**
 * @see https://developers.google.com/maps/documentation/javascript/style-reference
 * @see https://mapstyle.withgoogle.com/
 * @see https://snazzymaps.com/
 *
 * TODO: plug in grey levels and background for light / dark theme
 */
export const mapStyles: (theme: Theme) => google.maps.MapTypeStyle[] = ({
  theme,
  cssTheme,
}: Theme) => [
  /**
   * Global
   */
  { elementType: 'geometry.fill', stylers: [{ saturation: -100 }] },
  /**
   * administrative
   */
  {
    elementType: 'geometry.stroke',
    featureType: 'administrative',
    stylers: [{ color: '#ff5c5c5c' }],
  },
  { elementType: 'labels', featureType: 'administrative', stylers: [{ saturation: -100 }] },
  {
    elementType: 'labels.text.fill',
    featureType: 'administrative.locality',
    stylers: [{ color: '#ff383838' }],
  },
  {
    elementType: 'labels.icon',
    featureType: 'landscape',
    stylers: [{ color: getCSSHexColor(theme.colors.colorIntents.primary) }],
  },
  { elementType: 'labels.text.fill', featureType: 'landscape', stylers: [{ color: '#ff454545' }] },
  {
    elementType: 'geometry',
    featureType: 'landscape.man_made.building' as any,
    stylers: [{ lightness: -4 }, { saturation: -100 }],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'landscape.man_made.building' as any,
    stylers: [{ color: '#ffe3e8e3' }],
  },
  {
    elementType: 'geometry',
    featureType: 'landscape.man_made.business_corridor' as any,
    stylers: [{ color: '#ffe3e3e3' }, { visibility: 'off' }],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'landscape.natural.landcover',
    stylers: [{ color: '#ffffffff' }, { visibility: 'on' }],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'poi',
    stylers: [{ color: getCSSHexColor(theme.colors.colorIntents.primary) }, { lightness: 67 }],
  },
  {
    elementType: 'labels.icon',
    featureType: 'poi',
    stylers: [{ color: getCSSHexColor(theme.colors.colorIntents.primary) }],
  },
  { elementType: 'labels.text.fill', featureType: 'poi', stylers: [{ color: '#ff454545' }] },
  { elementType: 'geometry', featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
  { elementType: 'geometry', featureType: 'poi.medical', stylers: [{ visibility: 'off' }] },
  { elementType: 'geometry', featureType: 'poi.school', stylers: [{ visibility: 'off' }] },
  { elementType: 'geometry', featureType: 'poi.sports_complex', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.icon', featureType: 'road', stylers: [{ saturation: -100 }] },
  {
    elementType: 'geometry.stroke',
    featureType: 'road.highway',
    stylers: [{ color: '#ff828282' }],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.highway',
    stylers: [{ color: '#ff383838' }],
  },
  {
    elementType: 'labels.icon',
    featureType: 'transit',
    stylers: [{ lightness: 25 }, { saturation: -100 }],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'transit',
    stylers: [{ color: '#ffffffff' }, { saturation: -100 }],
  },
  { elementType: 'labels.text.stroke', featureType: 'transit', stylers: [{ color: '#ffffffff' }] },
  { elementType: 'labels.text', featureType: 'transit.station', stylers: [{ color: '#ff8f8f8f' }] },
  {
    elementType: 'labels.text.stroke',
    featureType: 'transit.station',
    stylers: [{ color: '#fff5f5f5' }],
  },
  { elementType: 'geometry', featureType: 'water', stylers: [{ color: '#ff919191' }] },
  { elementType: 'geometry.fill', featureType: 'water', stylers: [{ lightness: 61 }] },
  { elementType: 'labels.text.fill', featureType: 'water', stylers: [{ color: '#ffffffff' }] },
];
