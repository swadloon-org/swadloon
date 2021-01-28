import { GoogleMaps, GoogleMapsInfoWindow, useTreatTheme } from '@newrade/core-react-ui';
import { Marker } from '@react-google-maps/api';
import React, { useCallback, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SECTION_TYPE } from '../../types/contentful-section-type';
import { ContentfulSection } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { FormVasectomy } from '../components/form-vasectomy';
import { SectionCallout } from '../components/section-callout';
import { SectionCost } from '../components/section-cost';
import { SectionFaq } from '../components/section-faq';
import { SectionInfo } from '../components/section-info';
import { SectionLayout } from '../components/section-layout';
import { SectionMessages } from '../components/section-messages';
import { SectionSteps } from '../components/section-steps';
import { SectionTileLinks } from '../components/section-tile-links';
import { ProjectPageProps } from './page.template';

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  const theme = useTreatTheme();

  /**
   * Google Maps section
   */
  const { ref, inView } = useInView({
    threshold: 0,
  });
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
      {data.contentfulPage?.sections?.map((section, index) => {
        switch (section?.type?.type) {
          /**
           * Common
           */
          case SECTION_TYPE.BANNER: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variantLayout={'banner'}>
                <Banner key={index} section={section} />
              </SectionLayout>
            );
          }

          case SECTION_TYPE.MESSAGE: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionMessages key={index} section={section} />
              </SectionLayout>
            );
          }

          /**
           * Home page
           */
          case SECTION_TYPE.TILE_LINKS: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variantLayout={'banner'}>
                <SectionTileLinks key={index} section={section as ContentfulSection} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.CLINIC_PREVIEW: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section}></SectionInfo>
              </SectionLayout>
            );
          }
          case SECTION_TYPE.CONTACT_PREVIEW: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variant={'secondary'} ref={ref}>
                <SectionInfo variantType={'children'} order={'reverse'} key={index} section={section}>
                  {inView ? (
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
                </SectionInfo>
              </SectionLayout>
            );
          }

          /**
           * Clinic page
           */
          case SECTION_TYPE.CLINIC_MISSION: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variant={'secondary'}>
                <SectionInfo key={index} section={section} />
              </SectionLayout>
            );
          }

          case SECTION_TYPE.CLINIC_DR_PROFILE: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </SectionLayout>
            );
          }

          /**
           * Vasectomy page
           */
          case SECTION_TYPE.VASECTOMY_STEPS: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionSteps key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variant={'secondary'}>
                <SectionInfo key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_BEFORE: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_COST: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variant={'secondary'}>
                <SectionCost key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_AFTER: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_LINK: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variantLayout={'banner'}>
                <SectionCallout key={index} section={section} />
              </SectionLayout>
            );
          }

          /**
           * Vasectomy form page
           */
          case SECTION_TYPE.VASECTOMY_FORM_VIDEO: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_FORM: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </SectionLayout>
            );
          }

          /**
           * Pilot page
           */
          case SECTION_TYPE.PILOT_EXAM_INFO: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_SERVICE: {
            return (
              <SectionLayout id={`section-${index}`} key={index} variant={'secondary'}>
                <SectionCost key={index} section={section} />
              </SectionLayout>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_DR_PROFILE: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </SectionLayout>
            );
          }

          /**
           * Contact page
           */
          case SECTION_TYPE.CONTACT_CONTACT: {
            return (
              <SectionLayout id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </SectionLayout>
            );
          }

          default: {
            return null;
          }
        }
      })}
    </>
  );
};
