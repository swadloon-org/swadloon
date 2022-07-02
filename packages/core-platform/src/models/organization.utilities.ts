import { Organization } from './organization.model.js';
import prisma from '@/prisma/prisma';
import { handlePrismaErrors } from '../prisma/prisma-errors.utilities.js';

export async function createOrganization(data: Organization) {
  try {
    if (data.name) {
      return await prisma.organization.create({
        data: data,
      });
    } else {
      return new Error('Organization must have a valid name');
    }
  } catch (error) {
    handlePrismaErrors(error);
  }
}

export async function updateOrganization(data: Organization) {
  return await prisma.user.update({
    where: { id: data.id },
    data: data,
  });
}
