import { GatsbySiteLanguages } from '../../../config/site-languages';
import { GatsbySiteMetadata } from '../../../config/site-metadata';

export type GatsbyNodeAllSiteQuery = { site?: { siteMetadata?: GatsbyNodeSiteMetadataFragment } };

export type GatsbyNodeSiteMetadataFragment = Pick<
  GatsbySiteMetadata,
  'title' | 'description' | 'siteEnv' | 'siteUrl'
> & {
  languages?: Pick<GatsbySiteLanguages, 'langs' | 'defaultLangKey'>;
};

export type GatsbyNodeSrcPagesQuery = {
  allSitePage: { nodes: Array<{ id: string; path: string; component: string }> };
};

type File = {
  id: string;
  name: string;
  base: string;
  ext: string;
  dir: string;
  absolutePath: string;
  publicURL: string;
  size: string;
  sourceInstanceName: string;
};

export type GatsbyNodeSrcPageFilesQuery = {
  allFile: {
    nodes: Array<File>;
  };
};

export type MdxFrontmatter = {
  title: string;
  name?: string;
  tags?: Array<string>;
};

export type GatsbyNodeMarkdownFilesQuery = {
  allFile: {
    nodes: Array<
      File & {
        childMdx?: { slug: string; excerpt: string } & {
          frontmatter?: Pick<MdxFrontmatter, 'name' | 'tags' | 'title'>;
        };
      }
    >;
  };
};
