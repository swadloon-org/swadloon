/**
 *
 * Platform models for use in external packages (e.g. UI library)
 *
 * While Prisma generates type definition on the fly, based on the defined schema,
 * we want to have our own version of each model. This allows us to verify that the output
 * of Prisma's generated types matches what we expect.
 *
 * To use the models and associated utilites, for example in UI components, import what you need from
 * the "@swadloon/core-platform/models" package.
 *
 * @example import type { Site } from "@swadloon/core-platform/models"
 *
 */

export * from './models/block.api';
export * from './models/block-google-map.api';
export * from './models/block-image.api';
export * from './models/block-image-carousel.api';
export * from './models/block-video.api';
export * from './models/blog-author.api';
export * from './models/blog-post.api';
export * from './models/breadcrumbs.api';
export * from './models/child-mdx.api';
export * from './models/company-address.api';
export * from './models/company-info.api';
export * from './models/content-types.api';
export * from './models/footer.api';
export * from './models/link.api';
export * from './models/media.api';
export * from './models/media-collection.api';
export * from './models/media-collection-v2.api';
export * from './models/nav-item.api';
export * from './models/navbar.api';
export * from './models/navigation.api';
export * from './models/page.api';
export * from './models/portfolio-client.api';
export * from './models/portfolio-project.api';
export * from './models/section.api';
export * from './models/sidebar.api';
export * from './models/site.model';
export * from './models/tag.api';
export * from './models/tag-type.api';
export * from './models/translation.api';
