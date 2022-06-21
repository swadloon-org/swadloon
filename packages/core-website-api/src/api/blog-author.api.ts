import { PartialOrNull } from '../utilities.js';

export type BlogAuthorAPI = PartialOrNull<{
  firstName: string;
  lastName: string;
  profilePicture: {
    title: string;
    description: string;
    file: any;
  };
}>;
