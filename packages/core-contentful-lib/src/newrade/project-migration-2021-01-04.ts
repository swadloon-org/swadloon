import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { createBlogAuthor } from '../common/content-types/blog-author';
import { createBlogPost } from '../common/content-types/blog-post';
import { createCompanyAddress } from '../common/content-types/company-address';
import { createCompanyInfo } from '../common/content-types/company-info';
import { createFieldTranslation } from '../common/content-types/field-translation';
import { createLink } from '../common/content-types/link';
import { createMediaCollection } from '../common/content-types/media-collection';
import { createPage } from '../common/content-types/page';
import { createPageType } from '../common/content-types/page-type';
import { createPortfolioClient } from '../common/content-types/portfolio-client';
import { createPortfolioProject } from '../common/content-types/portfolio-project';
import { createSection } from '../common/content-types/section';
import { createSectionType } from '../common/content-types/section-type';
import { createTag } from '../common/content-types/tag';
import { createTagType } from '../common/content-types/tag-type';
import {
  createCostItem,
  createService,
  createServiceCategory,
  createStep,
  createTechnology,
  createThematic,
} from './project-content-types';
import { PROJECT_CONTENT_TYPE, PROJECT_FIELD, PROJECT_PAGE_TYPE, PROJECT_SECTION_TYPE } from './project-props-types';

const program: Migration.MigrationFunction = function Program(migration) {
  /**
   * Common
   */
  createFieldTranslation(migration);
  createLink(migration);
  createMediaCollection(migration);
  createCompanyAddress(migration);
  createCompanyInfo(migration);
  createTag(migration);
  createTagType(migration);
  createBlogAuthor(migration);
  createBlogPost(migration);
  createPortfolioProject(migration);
  createPortfolioClient(migration);
  const page = createPage(migration);
  createPageType(migration, { pageTypes: PROJECT_PAGE_TYPE });
  const section = createSection(migration);
  createSectionType(migration, { sectionTypes: PROJECT_SECTION_TYPE });

  /**
   * Project specific config for section
   */
  section.createField(PROJECT_FIELD.STEP, {
    name: pascal(PROJECT_FIELD.STEP),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PROJECT_CONTENT_TYPE.STEP],
        },
      ],
    },
  });
  section.createField(PROJECT_FIELD.COST_ITEM, {
    name: pascal(PROJECT_FIELD.COST_ITEM),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PROJECT_CONTENT_TYPE.COST_ITEM],
        },
      ],
    },
  });
  section.createField(PROJECT_FIELD.THEMATIC, {
    name: pascal(PROJECT_FIELD.THEMATIC),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PROJECT_CONTENT_TYPE.THEMATIC],
        },
      ],
    },
  });
  section.createField(PROJECT_FIELD.SERVICE, {
    name: pascal(PROJECT_FIELD.SERVICE),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PROJECT_CONTENT_TYPE.SERVICE],
        },
      ],
    },
  });
  section.createField(PROJECT_FIELD.TECHNOLOGY, {
    name: pascal(PROJECT_FIELD.TECHNOLOGY),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [PROJECT_CONTENT_TYPE.TECHNOLOGY],
        },
      ],
    },
  });

  /**
   * Project specific content types
   */
  createStep(migration);
  createCostItem(migration);
  createThematic(migration);
  createService(migration);
  createServiceCategory(migration);
  createTechnology(migration);
};

// @ts-ignore
export = program;
