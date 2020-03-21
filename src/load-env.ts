import * as dotenv from 'dotenv-extended';
import * as pathSys from 'path';

const envName = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : '';
const isTest = envName === 'testing';
const path = pathSys.resolve(__dirname, `../.env.${envName}`);

dotenv.load({
  silent: true,
  path,
  defaults: pathSys.resolve(__dirname, '../.env'),
  schema: pathSys.resolve(__dirname, '../.env.sample'),
  errorOnMissing: !isTest,
  errorOnExtra: false,
  errorOnRegex: false,
  includeProcessEnv: true,
  overrideProcessEnv: true,
});
