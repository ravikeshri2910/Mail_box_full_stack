// models/email.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); // Your Sequelize connection
const User = require('./user'); // User model

const Email = sequelize.define('emails', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sender : {
    type : Sequelize.STRING,
  },
  receiver : {
    type : Sequelize.STRING
  },
  senderId : {
    type : Sequelize.INTEGER,
  },
  receiverId : {
    type : Sequelize.INTEGER
  },
  openedBySender: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  openedByReceiver: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});



module.exports = Email;
