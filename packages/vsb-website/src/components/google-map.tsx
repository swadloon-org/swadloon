import { GoogleMaps, GoogleMapsInfoWindow, useTreatTheme } from '@newrade/core-react-ui';
import { Marker } from '@react-google-maps/api';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  inView: boolean;
};

export const GoogleMapVSB: React.FC<Props> = React.memo(({ inView }) => {
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
    const service = new window.google.maps.places.PlacesService(mapInstance);

    service.getDetails({ placeId: `ChIJ3aN08VsDyUwRSryItyrt4g0` }, (result, status) => {
      // somehow we can't pass place to <Marker/> so we set the result in the state
      const marker = new google.maps.Marker({
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
  const handleToggleInfoWindow = () => {
    setInfoWindowVisible(!infoWindowVisible);
  };

  return (
    <>
      {shouldLoad ? (
        <GoogleMaps
          theme={theme}
          script={{
            id: 'contact-map-script',
            googleMapsApiKey: 'AIzaSyDCcSCivD2CPrWHNIIGBiPexN5QCujfSkE',
          }}
          map={{
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
