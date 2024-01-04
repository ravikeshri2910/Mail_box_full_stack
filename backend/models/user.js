const Sequelize = require('sequelize');

const sequelize = require('../utill/database')

const user = sequelize.define('users',{

    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING,
        unique : true
    },
    password : {
        type : Sequelize.STRING
    }

})

module.exports = user;