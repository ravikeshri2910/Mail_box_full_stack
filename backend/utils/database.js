// const Sequelize = require('sequelize');
const Sequelize = require('sequelize');


const sequelize = new Sequelize('mailbox','root','RAVI8271ravi@',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;

// require('dotenv').config()

// const sequelize = new Sequelize('mailbox', 'root', 'RAVI8271ravi@',{
//     dialect : 'mysql',
//     host : 'localhost'
// })

// module.exports = sequelize