import { GoogleMaps, GoogleMapsInfoWindow, useTreatTheme } from '@newrade/core-react-ui';
import { BlockGoogleMapAPI } from '@newrade/core-website-api';
import { Marker } from '@react-google-maps/api';
import React, { useCallback, useEffect, useState } from 'react';
import { BlockProps } from './block.props';

export type BlockGoogleMapsProps = BlockProps & {
  blockGoogleMaps?: BlockGoogleMapAPI;
  inView?: boolean;
  googleMapsApiKey?: string;
};

declare let GOOGLE_MAP_API_KEY: string;

/**
 * High-level component that renders a Google Map iframe.
 */
export const BlockGoogleMap: React.FC<BlockGoogleMapsProps> = ({
  inView,
  blockGoogleMaps,
  googleMapsApiKey = GOOGLE_MAP_API_KEY,
}) => {
  const theme = useTreatTheme();
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);

  // when in view, load once and stay visible
  useEffect(() => {
    if (inView) {
      if (!shouldLoad) {
        setShouldLoad(true);
      }
    }
  }, [inView]);

  /**
   * Google Maps section
   */
  const [place, setPlace] = useState<google.maps.places.PlaceResult>();
  const [marker, setMarker] = useState<google.maps.Marker>();
  const [infoWindowVisible, setInfoWindowVisible] = useState<boolean>(true);
  const onLoad = useCallback(function onLoad(mapInstance: google.maps.Map<Element>) {
    if (!placeId) {
      return;
    }

    const service = new window.google.maps.places.PlacesService(mapInstance);

    service.getDetails({ placeId }, (result, status) => {
      // somehow we can't pass place to <Marker/> so we set the result in the state
      const marker = new window.google.maps.Marker({
        map: mapInstance,
        place: {
          placeId: result.place_id,
          location: result.geometry?.location,
        },
      });

      setPlace(result);
      setMarker(marker);
    });
  }, []);

  if (!blockGoogleMaps) {
    return null;
  }
  const { long, lat, zoom, placeId } = blockGoogleMaps;

  const handleToggleInfoWindow = () => {
    setInfoWindowVisible(!infoWindowVisible);
  };

  return (
    <div style={{ height: `max(100%, 50vh)`, minHeight: `50vh` }}>
      {shouldLoad && googleMapsApiKey ? (
        <GoogleMaps
          styleTheme={theme}
          script={{
            // ...script,
            id: 'contact-map-script',
            googleMapsApiKey,
          }}
          map={{
            // ...map,
            id: 'contact-map',
            center: { lat: Number(lat), lng: Number(long) },
            mapContainerStyle: {
              height: `100%`,
              minHeight: `50vh`,
            },
            options: {
              streetViewControl: true,
            },
            onLoad,
          }}
        >
          {place && place.geometry?.location ? (
            <Marker position={place.geometry?.location} onClick={handleToggleInfoWindow}></Marker>
          ) : null}
          {place && marker && infoWindowVisible ? (
            <GoogleMapsInfoWindow
              place={place}
              anchor={marker}
              onCloseClick={handleToggleInfoWindow}
            />
          ) : null}
        </GoogleMaps>
      ) : null}
    </div>
  );
};
