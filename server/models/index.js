const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Organization = sequelize.define('Organization', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  caption: { type: DataTypes.STRING, unique: true, allowNull: true },
});

module.exports = {
  Organization,
};
