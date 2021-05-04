/**
 * Env variables to configure the react + graphqli application
 */
export type CLIENT_ENV = {
  APP_GRAPHQL_ENDPOINT: string;
};

declare let APP_GRAPHQL_ENDPOINT: CLIENT_ENV['APP_GRAPHQL_ENDPOINT'];

export const clientEnv: CLIENT_ENV = {
  APP_GRAPHQL_ENDPOINT: APP_GRAPHQL_ENDPOINT,
};
