const {Sequelize} = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = config.dbHost;
const PORT = config.dbPort;
const DATABASE = config.dbName;

const URI = `mssql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const seq = new Sequelize(URI, {
    dialect: 'mssql',
    logging: true,
  });

setupModels(seq); //migraciones
  
module.exports = {seq};
  