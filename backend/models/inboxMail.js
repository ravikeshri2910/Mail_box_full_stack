const Sequelize = require('sequelize')

const sequelize = require('../utill/database')

const inbox = sequelize.define('inboxes',{

    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },

    to : {
        type :Sequelize.STRING
    },

    from : {
        type : Sequelize.STRING
    },

    subject : {
        type : Sequelize.STRING
    },

    body : {
        type : Sequelize.STRING
    },

    unRead : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }
})

module.exports = inbox