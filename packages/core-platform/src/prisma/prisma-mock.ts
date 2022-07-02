import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

const mockDeepFn = mockDeep; // set the import to a const that starts with 'mock' for Jest

import prisma from './prisma.js';

//
// Prisma setup for unit testing with Jest
//
// @see https://www.prisma.io/docs/guides/testing/unit-testing
//

jest.mock('./prisma', () => {
  var mockPrismaClient = mockDeepFn<PrismaClient>();
  return {
    __esModule: true,
    default: mockPrismaClient,
  };
});

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
