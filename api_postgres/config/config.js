import dotenv from 'dotenv';

const env = dotenv.config();

export default {
  port: process.env.EXPRESS_PORT,

  postgres_db: process.env.POSTGRES_DB,
  postgres_user: process.env.POSTGRES_USER,
  postgres_pass: process.env.POSTGRES_PASS,
  postgres_host: process.env.POSTGRES_HOST,
  postgres_port: process.env.POSTGRES_PORT
};
