import * as Migration from 'contentful-migration';
import { SectionTest } from './section';
import { exec } from 'child_process';

const execute: Migration.MigrationFunction = function IndexModel(migration) {
  /***
  Page
  ***/

  const Page = migration.createContentType('Page', {
    name: 'Page',
  });
  // Fields basic
  const namePage = Page.createField('name');
  namePage.name('Name').type('Symbol');

  const titlePage = Page.createField('title');
  titlePage.name('Title').type('Symbol').localized(true);

  const descriptionPage = Page.createField('description');
  descriptionPage.name('Description').type('Text').localized(true);

  const routePage = Page.createField('Route');
  routePage.name('Route').type('Symbol').localized(true);

  const bannerTitle = Page.createField('BannerTitle');
  bannerTitle.name('BannerTitle').type('Symbol').localized(true);

  const bannerSubTitle = Page.createField('BannerSubTitle');
  bannerSubTitle.name('BannerSubTitle').type('Symbol').localized(true);

  const bannerImages = Page.createField('BannerImages');
  bannerImages.name('BannerImages').type('Array').items({ type: 'Link', linkType: 'Asset' });

  // Reference to the section
  const sections = Page.createField('sections');
  sections
    .name('Sections')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['Section'] }] });

  /***
  Section
  ***/
  const Section = migration.createContentType('Section', {
    name: 'Section',
  });

  const type = Section.createField('type');
  type
    .name('Type')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: [
          'type1group',
          'type1',
          'type2',
          'type3',
          'type4',
          'type5',
          'type6',
          'type7',
          'video',
          'jobEmployer',
          'jobCandidates',
        ],
      },
    ]);

  const variant = Section.createField('variant');
  variant
    .name('Variant')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['Primary', 'PrimaryReversed', 'Secondary', 'SecondaryReversed', 'Tertiary', 'TertiaryReversed'],
      },
    ]);

  const titleSection = Section.createField('title');
  titleSection.name('Title').type('Symbol').required(true).localized(true);

  const titleHighlightSection = Section.createField('titleHighlight');
  titleHighlightSection.name('TitleHighlight').type('Symbol').localized(true);

  const descriptionSection = Section.createField('description');
  descriptionSection.name('Description').type('Text').localized(true);

  /*
  Blog
  */
  const Blog = migration.createContentType('Blog', {
    name: 'Blog',
  });

  const titleBlogSection = Blog.createField('title');
  titleBlogSection.name('Title').type('Symbol').required(true).localized(true);

  const titleHighlightBlogSection = Blog.createField('titleHighlight');
  titleHighlightBlogSection.name('TitleHighlight').type('Symbol').localized(true);

  const text = Blog.createField('Text');
  text.name('Text').type('Text').localized(true);

  // Refenrence to the array of blogPosts
  const blogPosts = Blog.createField('blogPosts');
  blogPosts
    .name('blogPosts')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogPost'] }] });

  const LinkBlog = Blog.createField('Links');
  LinkBlog.name('Link')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogPost'] }] });

  /*
  BlogPost
  */
  const BlogPost = migration.createContentType('BlogPost', {
    name: 'BlogPost',
  });

  const BlogPostAuthor = Blog.createField('BlogPostAuthor');
  BlogPostAuthor.name('BlogPostAuthor')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogAuthor'] }] });

  /*
  BlogAuthor
  */
  const BlogAuthor = migration.createContentType('BlogAuthor', {
    name: 'BlogAuthor',
  });

  /*
  Link
  */
  const link = migration.createContentType('Link', {
    name: 'Link',
  });

  const typeLink = link.createField('type');
  typeLink
    .name('Type')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['EXTERNAL_URL', 'INTERNAL_PAGE'],
      },
    ]);

  const nameLink = link.createField('Name');
  nameLink.name('Name').type('Symbol');

  const labelLink = link.createField('Label');
  labelLink.name('Label').type('Symbol');

  const urlLink = link.createField('URL');
  urlLink.name('URL').type('Symbol');

  /*
  'ImageCollection'
  */
  const imageCollection = migration.createContentType('ImageCollection', {
    name: 'ImageCollection',
  });

  /*
  'ImageCollection'
  */
  const companyAddress = migration.createContentType('CompanyAddress', {
    name: 'CompanyAddress',
  });

  /*
  'CompanyInfo'
  */
  const companyInfo = migration.createContentType('CompanyInfo', {
    name: 'CompanyInfo',
  });
  /*
  'ContactUsForm'
  */
  const contactUsForm = migration.createContentType('ContactUsForm', {
    name: 'ContactUsForm',
  });

  const titleContact = link.createField('Title');
  titleContact.name('Title').type('Symbol');

  const actionContact = link.createField('ActionText');
  actionContact.name('ActionText').type('Symbol');

  /*
  'FormField'
  */
  const formField = migration.createContentType('FormField', {
    name: 'FormField',
  });
  /*
  'JobGroup'
  */
  const jobGroup = migration.createContentType('JobGroup', {
    name: 'JobGroup',
  });
  /*
  'Job'
  */
  const job = migration.createContentType('Job', {
    name: 'Job',
  });

  const titleJob = job.createField('title');
  titleJob.name('Title').type('Symbol').localized(true);

  const descriptionJob = job.createField('Description');
  descriptionJob.name('Description').type('Text').localized(true);

  /*
  'InfoCheck'
  */
  const infoCheck = migration.createContentType('InfoCheck', {
    name: 'InfoCheck',
  });
  const textCheck = infoCheck.createField('Text');
  textCheck.name('Text').type('Symbol').localized(true);

  /*
  'InfoTile'
  */
  const infoTile = migration.createContentType('InfoTile', {
    name: 'InfoTile',
  });
  const illustrationTile = infoTile.createField('Illustration');
  illustrationTile.name('Illustration').type('Symbol');

  const titleTile = infoTile.createField('title');
  titleTile.name('Title').type('Symbol').localized(true);

  const textTile = infoTile.createField('Text');
  textTile.name('Text').type('Text').localized(true);

  /*
  'ProcessStep
  */
  const processStep = migration.createContentType('ProcessStep', {
    name: 'ProcessStep',
  });

  const titleStep = processStep.createField('title');
  titleStep.name('Title').type('Symbol').localized(true);

  const descriptionStep = processStep.createField('description');
  descriptionStep.name('Description').type('Text').localized(true);
};

// @ts-ignore
export = execute;
