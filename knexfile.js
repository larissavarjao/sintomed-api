require("dotenv").config();
const _ = require("lodash");
const path = require("path");
const MIGRATION_DIR = path.resolve("data/migrations");

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_PORT,
      password: process.env.POSTGRES_PASS,
    },
    migrations: {
      directory: MIGRATION_DIR,
    },
  },
  test: {
    client: "pg",
    connection: {
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: "sintomed-test",
      port: process.env.POSTGRES_PORT,
      password: process.env.POSTGRES_PASS,
    },
    migrations: {
      directory: MIGRATION_DIR,
    },
  },
  production: process.env.DATABASE_URL || {
    client: "pg",
    connection: {
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_PORT,
      password: process.env.POSTGRES_PASS,
    },
    migrations: {
      directory: MIGRATION_DIR,
    },
  },
};
