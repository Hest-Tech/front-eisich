const dotenv = require('dotenv');

dotenv.config();
module.exports = {
    mode: process.env.APP_ENV,
    pass_key: process.env.PASS_KEY,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    dev_db_url: process.env.DEV_DATABASE_URL,
    test_db_url: process.env.TEST_DATABASE_URL,
    db_url: process.env.DATABASE_URL,
    port: process.env.PORT
};