import Gatsby from 'gatsby';
import { GatsbySiteMetadata } from './site-metadata';

export interface GastbySiteConfig extends Gatsby.GatsbyConfig {
  siteMetadata: GatsbySiteMetadata;
}
