import { Prisma } from '@prisma/client';

/**
 * @see https://www.prisma.io/docs/reference/api-reference/error-reference#error-codes
 */
export function handlePrismaErrors(error: any) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (error.code === 'P2002') {
      console.log(
        'There is a unique constraint violation, a new user cannot be created with this email'
      );
    }
  }
  throw error;
}
