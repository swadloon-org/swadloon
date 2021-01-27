import { GoogleMap, GoogleMapProps, LoadScript, LoadScriptProps, Marker } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';
import React from 'react';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import { mapStyles } from './google-maps.styles';
import * as styleRefs from './google-maps.treat';

type Props = CommonComponentProps & {
  /**
   * LoadingScripts props
   */
  script: LoadScriptProps;
  /**
   * GoogleMap props
   */
  map: GoogleMapProps;
};

/**
 * Google Maps
 */

/**
 * @see https://react-google-maps-api-docs.netlify.app/
 * @see https://github.com/JustFly1984/react-google-maps-api
 */
export const GoogleMaps: React.FC<Props> = ({ id, className, style, as, script, map, ...props }) => {
  /**
   * Component props
   */
  const { styles } = useStyles(styleRefs);
  const classNames = getMergedClassname([className || '', styles.wrapper]);
  const { theme, cssTheme } = useTreatTheme();

  /**
   * Script props
   */
  const DefaultLoadingElement = () => <div className={styles.mapsLoading} />;
  const loadingElement = script.loadingElement ? script.loadingElement : DefaultLoadingElement;
  const libraries: Libraries = script.libraries || ['places'];
  const language: string = script.language || 'fr';
  const googleMapsApiKey: string = script.googleMapsApiKey || 'AIzaSyB41IPC7t1sYwRfrII04lrL94eiCYm8pZw';

  /**
   * Maps props
   */
  const mapsOptions: google.maps.MapOptions = {
    styles: mapStyles({ theme, cssTheme }),
    disableDefaultUI: true,
    zoomControl: true,
  };
  const mapContainerStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    ...map.mapContainerStyle,
  };

  /**
   * Data props
   */
  const dataOptions: google.maps.Data.DataOptions = {};

  return (
    <LoadScript
      id={id}
      libraries={libraries}
      language={language}
      googleMapsApiKey={googleMapsApiKey}
      loadingElement={loadingElement}
      region="EN"
      version="weekly"
      preventGoogleFontsLoading
    >
      <GoogleMap
        zoom={13}
        center={{ lat: 45.54339323463644, lng: -73.45490549293764 }}
        mapContainerStyle={mapContainerStyle}
        options={mapsOptions}
      >
        <Marker position={{ lat: 45.54339323463644, lng: -73.45490549293764 }}></Marker>
        {/* <Data onLoad={onDataLoad} options={dataOptions} /> */}
      </GoogleMap>
    </LoadScript>
  );
};
