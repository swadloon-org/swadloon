import { PrismaClient } from '@prisma/client';
import { prismaLoggingMiddleware } from './logging.prisma-middleware.js';

declare global {
  var prisma: PrismaClient | undefined;
}

/**
 *
 * Init
 *
 */

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

/**
 *
 * Prisma middlewares
 *
 */

prisma.$use(prismaLoggingMiddleware);

/**
 * Export the Prisma instance
 */
export default prisma;
