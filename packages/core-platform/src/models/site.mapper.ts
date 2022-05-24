import { PrismaTypes } from '@/types/prisma-types';
import { Site } from './site.model';

export function siteMapper(site: PrismaTypes.Site): Site {}
