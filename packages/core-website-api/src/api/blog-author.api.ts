import { PartialOrNull } from '../utilities';

export type BlogAuthorAPI = PartialOrNull<{
  firstName: string;
  lastName: string;
  profilePicture: {
    title: string;
    description: string;
    file: any;
  };
}>;
