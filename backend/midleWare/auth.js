const jwt = require('jsonwebtoken')
const Users = require('../models/user')

exports.authenticateUser = (req, res , next)=>{
    try{
        const token = req.header('Authorization')

        const user = jwt.verify(token , 'fgdfjghdsfjkghsdfkjlghfdjkljdslfkghfdsjklkgjkldfsh')

        // console.log('user' , user)

        Users.findByPk(user.userId).then(user =>{
            req.user = user;
            // console.log('autothe')
            // console.log('user >>>>'+JSON.stringify(req.user));
            next();
        }).catch(err => {throw new Error(err)})
    }catch(err){
        console.log(err)
    }
}

