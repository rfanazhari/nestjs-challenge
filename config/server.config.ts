import * as env from 'env-var';
import * as dotenv from 'dotenv';
dotenv.config();

export class ServerConfig {
  public static readonly APP_PORT: number = env
    .get('APP_PORT')
    .required()
    .asPortNumber();
  public static readonly NODE_ENV: string = env
    .get('NODE_ENV')
    .required()
    .asString();
  public static readonly DEVELOPMENT: string = 'development';
  public static readonly PRODUCTION: string = 'production';
  public static readonly SEQUELIZE: string = 'SEQUELIZE';
  public static readonly DB_DIALECT: string = env
    .get('DB_DIALECT')
    .required()
    .asString();
  public static readonly DB_USER: string = env
    .get('DB_USER')
    .required()
    .asString();
  public static readonly DB_PASSWORD: string = env
    .get('DB_PASSWORD')
    .required()
    .asString();
  public static readonly DB_NAME_DEV: string = env
    .get('DB_NAME_DEV')
    .required()
    .asString();
  public static readonly DB_HOST: string = env
    .get('DB_HOST')
    .required()
    .asString();
  public static readonly DB_PORT: number = env
    .get('DB_PORT')
    .required()
    .asIntPositive();
  public static readonly DB_NAME_PROD: string = env
    .get('DB_NAME_PROD')
    .required()
    .asString();
}
