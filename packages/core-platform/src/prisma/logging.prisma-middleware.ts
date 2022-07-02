import { Prisma } from '@prisma/client';

export const prismaLoggingMiddleware: Prisma.Middleware = async function prismaLoggingMiddleware(
  params,
  next
) {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);

  return result;
};
