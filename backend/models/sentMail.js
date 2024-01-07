const Sequelize = require('sequelize')

const sequelize = require('../utill/database')

const sent = sequelize.define('sents',{

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
        defaultValue : true
    }
})

module.exports = sent