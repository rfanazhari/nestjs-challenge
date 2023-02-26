import { ServerConfig } from '../../config';

module.exports = {
  development: {
    dialect: ServerConfig.DB_DIALECT,
    username: ServerConfig.DB_USER,
    password: ServerConfig.DB_PASSWORD,
    database: ServerConfig.DB_NAME_DEV,
    host: ServerConfig.DB_HOST,
    port: ServerConfig.DB_PORT,
  },
  production: {
    dialect: ServerConfig.DB_DIALECT,
    username: ServerConfig.DB_USER,
    password: ServerConfig.DB_PASSWORD,
    database: ServerConfig.DB_NAME_PROD,
    host: ServerConfig.DB_HOST,
    port: ServerConfig.DB_PORT,
  },
}