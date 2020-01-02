export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 5000,
  environment: process.env.NODE_ENV,
  secretkey: process.env.APP_SECRET,
  dbhost: process.env.DB_HOST,
  dbport: parseInt(process.env.DB_PORT, 10) || 5432,
  dbname: process.env.DB_NAME,
  dbuser: process.env.DB_USERNAME,
  dbpass: process.env.DB_PASSWORD,
});
