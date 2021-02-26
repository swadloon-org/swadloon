import { GoogleMaps, GoogleMapsInfoWindow, useTreatTheme } from '@newrade/core-react-ui';
import { GoogleMapProps, LoadScriptProps, Marker } from '@react-google-maps/api';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  inView?: boolean;
  placeId?: string;
  googleMapsApiKey?: string;
  script?: LoadScriptProps;
  map?: GoogleMapProps;
};

/**
 * High-level component that renders a Google Map iframe.
 */
export const BlockGoogleMap: React.FC<Props> = React.memo(({ inView, placeId, googleMapsApiKey, script, map }) => {
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
  const onLoad = useCallback(
    function onLoad(mapInstance: google.maps.Map<Element>) {
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
    },
    [window.google]
  );
  const handleToggleInfoWindow = () => {
    setInfoWindowVisible(!infoWindowVisible);
  };

  return (
    <>
      {shouldLoad ? (
        <GoogleMaps
          theme={theme}
          script={{
            ...script,
            id: 'contact-map-script',
            googleMapsApiKey: googleMapsApiKey || '',
          }}
          map={{
            ...map,
            id: 'contact-map',
            center: { lat: 45.54339323463644, lng: -73.45490549293764 },
            mapContainerStyle: {
              height: `min(50vh, 600px)`,
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
            <GoogleMapsInfoWindow place={place} anchor={marker} onCloseClick={handleToggleInfoWindow} />
          ) : null}
        </GoogleMaps>
      ) : null}
    </>
  );
});
