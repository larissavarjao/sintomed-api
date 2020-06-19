require("dotenv").config();
const _ = require("lodash");
const path = require("path");
const MIGRATION_DIR = path.resolve("data/migrations");
const SEEDS_DIR = path.resolve("data/seeds");

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
    seeds: {
      directory: SEEDS_DIR,
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
    seeds: {
      directory: SEEDS_DIR,
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
    seeds: {
      directory: SEEDS_DIR,
    },
  },
};
