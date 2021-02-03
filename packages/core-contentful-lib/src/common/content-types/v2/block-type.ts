import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../../../types/contentful-widget-ids';
import { keys } from '../../../utilities';
import { COMMON_CONTENT_TYPE } from '../../common-content-types';
import { COMMON_FIELD } from '../../common-fields';

export const createBlockType = function (migration: Migration.default, options: { blockTypes: object }) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.BLOCK_TYPE, {
    name: COMMON_CONTENT_TYPE.BLOCK_TYPE,
    displayField: COMMON_FIELD.NAME,
    description: 'Each section has a type to select the look and feel.',
  });

  /**
   * Block-type name
   */
  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol' });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: keys(options.blockTypes),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select section type',
  });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });

  content.createField('preview', {
    name: pascal('preview'),
    type: 'Link',
    linkType: 'Asset',
  });
  content.changeFieldControl('preview', 'builtin', CONTENTFUL_WIDGET.ASSET_LINK_EDITOR, {
    helpText: `Preview of this section's type looks like`,
  });
};
