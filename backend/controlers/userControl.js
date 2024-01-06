const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.sinupRoute = async(req, res) =>{

    try{

        const {name , email ,password } = req.body

        const saltround = 10;
        bcrypt.hash(password , saltround, async(error , hash)=>{

            let result = await User.create({
                name,
                email,
                password : hash
            })
            res.status(201).json({ msg: 'Regitered', data: result })
        })


        // console.log('name' , email)
    }catch(err){
        console.log(err)
    }
}

function generateWebToken(id){
    return jwt.sign({userId : id}, 'fgdfjghdsfjkghsdfkjlghfdjkljdslfkghfdsjklkgjkldfsh')
}

exports.logInRoute = async(req, res) =>{
    try{

        const {name , email , password} = req.body

        const user = await User.findOne({ where : {email : email}})
        // console.log('name', user )
        if(!user){
            res.status(201).json({msg : 'Wrong email' })
        }

        bcrypt.compare(password , user.password , (err,result)=>{
            if(err){
                res.status(201).json({msg : 'Password is wrong'})
            }if(result){
                res.status(201).json({msg : 'login',email : email, token : generateWebToken(user.id)})
            }else{
                res.status(201).json({msg : 'Something is wrong'})
            }
        })

        // res.status(201).json({msg : 'Login', user : user})


    }catch(err){
        console.log(err)
    }
}