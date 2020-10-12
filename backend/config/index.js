const dotenv = require('dotenv');
const Path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

const envFound = dotenv.config({ path: Path.resolve(process.cwd(), `./.env.${process.env.NODE_ENV}`) });

if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

module.exports = {
    port: parseInt(process.env.PORT, 10),
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE
  };