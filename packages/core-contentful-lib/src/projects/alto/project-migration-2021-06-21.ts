import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../../types/contentful-widget-ids';
import { Variant } from '@newrade/core-design-system';
import { keys } from '../../utilities';
import { COMMON_FIELD } from '../../common-type';
import { ContentType } from '@newrade/core-website-api';

const program: Migration.MigrationFunction = function Program(migration) {
  //
  // add variant to footer and navbar
  //

  const footer = migration.editContentType(ContentType.FOOTER);

  footer.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),
    type: 'Symbol',
    validations: [
      {
        in: keys(Variant),
      },
    ],
  });
  footer.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select section variant',
  });

  const navbar = migration.editContentType(ContentType.NAVBAR);
  navbar.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),
    type: 'Symbol',
    validations: [
      {
        in: keys(Variant),
      },
    ],
  });
  navbar.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.RADIO, {
    helpText: 'Select section variant',
  });
};

// @ts-ignore
export = program;
