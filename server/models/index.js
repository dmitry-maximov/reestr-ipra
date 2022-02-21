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

const Service = sequelize.define('service', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.TEXT },
});

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const OrganizationService = sequelize.define('organization_service', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'ADMIN' }, //т к. лк пользователя нет считаем что войти может только админ
});

Organization.hasOne(OrganizationInfo, { as: 'info' });
OrganizationInfo.belongsTo(Organization);

Type.hasMany(Service);
Service.belongsTo(Type);

Organization.belongsToMany(Service, { through: OrganizationService });
Service.belongsToMany(Organization, { through: OrganizationService });

module.exports = {
  Organization,
  OrganizationInfo,
  Service,
  Type,
  OrganizationService,
  User,
};
