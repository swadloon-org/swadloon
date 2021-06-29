import * as Migration from 'contentful-migration';
import { ContentType, NavbarLayout } from '@newrade/core-website-api';
import { createImageCarouselBlock } from '../../common-type/block-image-carousel.contentful';
import { createBlock } from '../../common-type/block.contentful';
import { COMMON_FIELD, createTag, createTagType } from '../../common-type';
import { createGoogleMapsBlock } from '../../common-type/block-google-maps.contentful';
import { createNavbar } from '../../common-type/navbar.contentful';

const program: Migration.MigrationFunction = function Program(migration) {
  // added blocks
  createBlock(migration);
  createImageCarouselBlock(migration);
  createGoogleMapsBlock(migration);

  createNavbar(migration);

  const section = migration.editContentType(ContentType.SECTION);

  section.editField(COMMON_FIELD.BLOCKS, {
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            ContentType.BLOCK,
            ContentType.BLOCK_IMAGE,
            ContentType.BLOCK_IMAGE_CAROUSEL,
          ],
        },
      ],
    },
  });
};

// @ts-ignore
export = program;
