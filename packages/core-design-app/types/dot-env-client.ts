export type CLIENT_ENV = {
  APP_VERSION: string;
  APP_ENV: string;
};

declare let APP_VERSION: CLIENT_ENV['APP_VERSION'];
declare let APP_ENV: CLIENT_ENV['APP_ENV'];

export const clientEnv: CLIENT_ENV = {
  APP_VERSION: APP_VERSION,
  APP_ENV: APP_ENV,
};
