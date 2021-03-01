export type BlogAuthorAPI = {
  firstName: string;
  lastName?: string | null;
  profilePicture?: {
    title?: string;
    description?: string;
    file?: any;
  };
};
