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

export * from './models/block.api.js';
export * from './models/block-google-map.api.js';
export * from './models/block-image.api.js';
export * from './models/block-image-carousel.api.js';
export * from './models/block-video.api.js';
export * from './models/blog-author.api.js';
export * from './models/blog-post.api.js';
export * from './models/breadcrumbs.api.js';
export * from './models/child-mdx.api.js';
export * from './models/company-address.api.js';
export * from './models/company-info.api.js';
export * from './models/content-types.api.js';
export * from './models/footer.api.js';
export * from './models/link.api.js';
export * from './models/media.api.js';
export * from './models/media-collection.api.js';
export * from './models/media-collection-v2.api.js';
export * from './models/nav-item.api.js';
export * from './models/navbar.api.js';
export * from './models/navigation.api.js';
export * from './models/page.api.js';
export * from './models/portfolio-client.api.js';
export * from './models/portfolio-project.api.js';
export * from './models/section.api.js';
export * from './models/sidebar.api.js';
export * from './models/site.model.js';
export * from './models/tag.api.js';
export * from './models/tag-type.api.js';
export * from './models/translation.api.js';
