const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Organization = sequelize.define('organization', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  addres: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
});

const OrganizationInfo = sequelize.define('organization_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullName: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  route: { type: DataTypes.TEXT },
  schedule: { type: DataTypes.STRING },
  supervisor: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  registration: { type: DataTypes.DATE },
});

Organization.hasOne(OrganizationInfo, { as: 'info' });
OrganizationInfo.belongsTo(Organization);

module.exports = {
  Organization,
  OrganizationInfo,
};
