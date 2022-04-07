import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';

export const Section = list({
  // Here are the fields that `User` will have. We want an email and password so they can log in
  // a name so we can refer to them, and a way to connect users to posts.
  fields: {
    name: text({ isIndexed: true, validation: { isRequired: true } }),
    variant: text({
      validation: {
        match: {
          regex: /primary|secondary/,
          explanation: 'Please select the visual importance',
        },
      },
    }),
    // Relationships allow us to reference other lists. In this case,
    // we want a user to have many posts, and we are saying that the user
    // should be referencable by the 'author' field of posts.
    // Make sure you read the docs to understand how they work: https://keystonejs.com/docs/guides/relationships#understanding-relationships
    // sections: relationship({ ref: 'Post.author', many: true }),
  },
  // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
  // ui: {
  //   listView: {
  //     initialColumns: ['name'],
  //   },
  // },
});
