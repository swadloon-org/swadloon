import type { PartialOrNull } from '@newrade/core-types';

export type BlogAuthorAPI = PartialOrNull<{
  firstName: string;
  lastName: string;
  profilePicture: {
    title: string;
    description: string;
    file: any;
  };
}>;
