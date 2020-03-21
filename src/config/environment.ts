require('../load-env');

const env = {
  APP_PORT: process.env.APP_PORT || 5000,
  APP_SECRET: process.env.APP_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'production',
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

Object.assign(env, { isDevelopment: env.NODE_ENV === 'development' });

export { env };
