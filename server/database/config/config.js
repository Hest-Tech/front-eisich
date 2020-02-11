const {
    dev_db_url,
    test_db_url,
    db_url
} = require('../../config/config')

module.exports = {
    development: {
        url: dev_db_url,
        dialect: 'postgres',
    },
    test: {
        url: test_db_url,
        dialect: 'postgres',
    },
    production: {
        url: db_url,
        dialect: 'postgres',
    },
}