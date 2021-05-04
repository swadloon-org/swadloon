import typeDefs from './graphql/schema.graphql';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { Resolvers, User } from '../types/graphql-types';

const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet',
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy',
  },
];

const resolvers: Resolvers<{ auth: boolean }> = {
  Query: {
    user(parent, args, context, info) {
      if (!args.id) {
        return users[0];
      }
      return users.find((user) => user.id === args.id) as User;
    },
    users(parent, args, context, info) {
      return users as User[];
    },
  },
  User: {
    id: {
      selectionSet: 'id',
      resolve: (parent, args, context, info) => {
        return parent.id as string;
      },
    },
    name: (user) => user.name as string,
  },
};

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

export const graphqlServer = graphqlHTTP({
  schema,
  graphiql: true,
  customFormatErrorFn: (error) => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack ? error.stack.split('\n') : [],
    path: error.path,
  }),
});
