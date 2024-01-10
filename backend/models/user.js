// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); // Your Sequelize connection

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
