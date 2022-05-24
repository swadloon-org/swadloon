import { prismaMock } from '@/prisma/prisma-mock';
import { PrismaTypes } from '@/prisma/prisma-types';

import { defaultOrganization } from './organization.data';
import { createOrganization } from './organization.utilities';

describe('for the Organization model', () => {
  describe('the Prisma types', () => {
    it('should match local type definitions', () => {
      const org: PrismaTypes.Organization = defaultOrganization;
      expect(org).toBeDefined();
    });
  });

  describe(`${createOrganization.name}`, () => {
    it(`${createOrganization.name} should create a new org`, async () => {
      prismaMock.organization.create.mockResolvedValue(defaultOrganization);

      await expect(createOrganization(defaultOrganization)).resolves.toEqual(defaultOrganization);
    });
  });
});
