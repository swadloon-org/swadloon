import React from 'react';

import { InfoWindow, InfoWindowProps } from '@react-google-maps/api';
import { title } from 'case';

import {
  ICON,
  LABEL_SIZE,
  LinkIcon,
  LinkVariant,
  PARAGRAPH_SIZE,
} from '@newrade/core-design-system';

import { sizeVars } from '../default-theme/src/theme.js';
import { IconComp } from '../icons/icon.js';
import { Stack } from '../layout/stack.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';
import { Label } from '../text/label.js';
import { Link } from '../text/link.js';
import { Paragraph } from '../text/paragraph.js';
import { getMergedClassname } from '../utilities-iso/utilities-iso.js';

import * as styles from './google-maps-info-window.css.js';

type Props = PrimitiveProps & {
  place: google.maps.places.PlaceResult;
} & InfoWindowProps;

/**
 *
 * @see https://react-google-maps-api-docs.netlify.app/#infowindow
 */
export const GoogleMapsInfoWindow: React.FC<Props> = ({
  id,
  className,
  style,
  as,
  children,
  place,
  ...props
}) => {
  /**
   * Component props
   */

  const classNames = getMergedClassname([className || '', styles.wrapper]);

  if (!place) {
    return null;
  }

  const RatingStars = place.rating
    ? Array(Math.floor(place.rating))
        .fill(0)
        .map((i, index) => <IconComp key={index} name={ICON.STAR} className={styles.star} />)
    : null;

  const RatingHalfStars = place.rating ? (
    place.rating - Math.floor(place.rating) > 0 ? (
      <IconComp name={ICON.HALF_STAR} className={styles.halfStar} />
    ) : null
  ) : null;

  return (
    <InfoWindow {...props}>
      <div className={styles.wrapper}>
        <Stack gap={[sizeVars.x2]}>
          <Label variant={LABEL_SIZE.medium}>{title(place.name)}</Label>
          <Link
            href={place.url}
            target={'_blank'}
            size={PARAGRAPH_SIZE.small}
            linkStyle={LinkVariant.underline}
            icon={LinkIcon.right}
          >
            Itinéraire
          </Link>
          <Link
            href={`phone:${place.url}`}
            size={PARAGRAPH_SIZE.small}
            linkStyle={LinkVariant.underline}
          >
            {place.formatted_phone_number}
          </Link>
          {place.rating ? (
            <Paragraph size={PARAGRAPH_SIZE.small}>
              {place.rating} {RatingStars}
              {RatingHalfStars}
            </Paragraph>
          ) : null}
        </Stack>
      </div>
    </InfoWindow>
  );
};
