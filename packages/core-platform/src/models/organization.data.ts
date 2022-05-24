import { Organization } from './organization.model';

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
