const Sequelize = require('sequelize')
const dbconfig = require('../config/database')

const dconnection = new Sequelize(dbconfig)

module.exports = connection