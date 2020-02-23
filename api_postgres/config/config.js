import dotenv from 'dotenv';
import knexFile from '../knexfile';

const env = dotenv.config();

export default {
  port: process.env.EXPRESS_PORT,
  knex: knexFile.dev
};
