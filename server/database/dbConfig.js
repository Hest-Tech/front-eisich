'use strict';

const { development } = require('./config/config');
const { Sequelize } = require('sequelize');
const db = new Sequelize(development.url);

(async () => {
    try {
        await db.authenticate();
        console.log('==> Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

module.exports = { db }