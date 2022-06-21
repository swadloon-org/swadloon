import { Organization } from './organization.model.js';

export const defaultOrganization: Organization = {
  id: '1234',
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Company Name',
  slug: 'company-name',
  // roles: [],
  // designSystems: [],
  // projects: [],
  // integrations: {
  //   github: {
  //     enabled: false,
  //   },
  //   figma: {
  //     enabled: true,
  //   },
  // },
};
