import { PrismaTypes } from '@/types/prisma-types';
import { Site } from './site.model.js';

export function siteMapper(site: PrismaTypes.Site): Site {}
