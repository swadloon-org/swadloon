import React from 'react';

import { GoogleMap, GoogleMapProps, LoadScript, LoadScriptProps } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';

import { PrimitiveProps } from '../primitive/primitive.props.js';
import { getMergedClassname } from '../utilities-iso/utilities-iso.js';

import * as styles from './google-maps.css.js';
import { googleMapThemeStyles } from './google-maps-styles.js';

type Props = PrimitiveProps & {
  /**
   * LoadingScripts props
   */
  script: LoadScriptProps;
  /**
   * GoogleMap props
   */
  map: GoogleMapProps;
};

const defaultLibraries: Libraries = ['places'];

/**
 * @see https://react-google-maps-api-docs.netlify.app/
 * @see https://github.com/JustFly1984/react-google-maps-api
 * @see https://developers.google.com/places/web-service/overview
 */
export const GoogleMapsStatic: React.FC<Props> = React.memo(
  ({ id, className, style, as, script, map, children, theme, ...props }) => {
    /**
     * Component props
     */

    const classNames = getMergedClassname([className || '', styles.wrapper]);

    /**
     * Script props
     */
    const DefaultLoadingElement = () => <div className={styles.mapsLoading} />;
    const loadingElement = script.loadingElement ? (
      script.loadingElement
    ) : (
      <DefaultLoadingElement />
    );
    const libraries: Libraries = script.libraries || defaultLibraries;
    const language: string = script.language || 'fr';
    const googleMapsApiKey: string = script.googleMapsApiKey;

    /**
     * Maps props
     */
    const defaultMapProps: GoogleMapProps = {
      zoom: 13,
      mapContainerStyle: {
        height: '100%',
        width: '100%',
      },
      options: {
        styles: googleMapThemeStyles,
        disableDefaultUI: true,
        zoomControl: true,
      },
    };
    const mapProps: GoogleMapProps = {
      ...defaultMapProps,
      ...map,
      mapContainerStyle: {
        ...defaultMapProps.mapContainerStyle,
        ...map.mapContainerStyle,
      },
      options: {
        ...defaultMapProps.options,
        ...map.options,
      },
    };

    /**
     * Data props
     */
    const dataOptions: google.maps.Data.DataOptions = {};

    /**
     * Behavior
     */

    return (
      // @ts-ignore
      <LoadScript
        id={id}
        libraries={libraries}
        language={language}
        googleMapsApiKey={googleMapsApiKey}
        region={'EN'}
        version={'weekly'}
        loadingElement={loadingElement}
      >
        <GoogleMap {...mapProps}>{children}</GoogleMap>
      </LoadScript>
    );
  }
);
