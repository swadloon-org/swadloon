import { GoogleMaps, useTreatTheme, GoogleMapsInfoWindow } from '@newrade/core-react-ui';
import React, { useCallback, useState, useEffect } from 'react';
import { SECTION_TYPE } from '../../types/contentful-section-type';
import { ContentfulSection } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { FormVasectomy } from '../components/form-vasectomy';
import { SectionCallout } from '../components/section-callout';
import { SectionContact } from '../components/section-contact';
import { SectionCost } from '../components/section-cost';
import { SectionFaq } from '../components/section-faq';
import { SectionInfo } from '../components/section-info';
import { SectionMessages } from '../components/section-messages';
import { SectionSteps } from '../components/steps-section';
import { TileLink } from '../components/tile-link';
import { SectionTileLinks } from '../components/section-tile-links';
import { ProjectPageProps } from './page.template';
import { Marker } from '@react-google-maps/api';

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  const theme = useTreatTheme();

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
              <section id={`section-${index}`} key={index}>
                <Banner key={index} section={section} />
              </section>
            );
          }

          case SECTION_TYPE.MESSAGE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionMessages key={index} section={section} />
              </section>
            );
          }

          /**
           * Home page
           */
          case SECTION_TYPE.TILE_LINKS: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionTileLinks key={index} section={section as ContentfulSection} />
              </section>
            );
          }
          case SECTION_TYPE.TILE_LINK: {
            return (
              <section id={`section-${index}`} key={index}>
                <TileLink key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.CLINIC_PREVIEW: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section}></SectionInfo>
              </section>
            );
          }
          case SECTION_TYPE.CONTACT_PREVIEW: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo
                  variant={'secondary'}
                  variantType={'children'}
                  order={'reverse'}
                  key={index}
                  section={section}
                >
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
                    {/* <TrafficLayer /> */}
                  </GoogleMaps>
                </SectionInfo>
              </section>
            );
          }

          /**
           * Clinic page
           */
          case SECTION_TYPE.CLINIC_MISSION: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo variant={'secondary'} key={index} section={section} />
              </section>
            );
          }

          case SECTION_TYPE.CLINIC_DR_PROFILE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }

          /**
           * Vasectomy page
           */
          case SECTION_TYPE.VASECTOMY_STEPS: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionSteps key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_BEFORE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_COST: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionCost key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_AFTER: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_LINK: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionCallout key={index} section={section} />
              </section>
            );
          }

          /**
           * Vasectomy form page
           */
          case SECTION_TYPE.VASECTOMY_FORM_VIDEO: {
            return (
              <section id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_FORM: {
            return (
              <section id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </section>
            );
          }

          /**
           * Pilot page
           */
          case SECTION_TYPE.PILOT_EXAM_INFO: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_DR_PROFILE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_SERVICE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionCost key={index} section={section} />
              </section>
            );
          }

          /**
           * Contact page
           */
          case SECTION_TYPE.CONTACT_CONTACT: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionContact key={index} section={section} />
              </section>
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
