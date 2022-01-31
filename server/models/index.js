const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Organization = sequelize.define('organization', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const OrganizationInfo = sequelize.define('organization_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  full_name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
});

Organization.hasOne(OrganizationInfo, { as: 'info' });
OrganizationInfo.belongsTo(Organization);

module.exports = {
  Organization,
  OrganizationInfo,
};
