require('dotenv').config();

const env = {
  FB_EMAIL: process.env.FB_EMAIL,
  FB_PASSWORD: process.env.FB_PASSWORD,
  SENDING_TYPE:process.env.SENDING_TYPE
};


module.exports = env;
