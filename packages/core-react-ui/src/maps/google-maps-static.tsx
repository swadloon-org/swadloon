import { GoogleMap, GoogleMapProps, LoadScript, LoadScriptProps } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';
import React from 'react';
import { useStyles } from 'react-treat';
import { Theme } from '../design-system';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import { mapStyles } from './google-maps.styles';
import * as styleRefs from './google-maps.treat';

type Props = CommonComponentProps & {
  theme?: Theme;
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
    const { styles } = useStyles(styleRefs);
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
    const googleMapsApiKey: string =
      script.googleMapsApiKey || 'AIzaSyDCcSCivD2CPrWHNIIGBiPexN5QCujfSkE';

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
        styles: theme ? mapStyles(theme) : [],
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
