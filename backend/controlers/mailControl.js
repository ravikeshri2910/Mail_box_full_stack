
const Inbox = require('../models/inboxMail')
const Sent = require('../models/sentMail')

exports.inboxRouter = async(req , res)=>{
    try{
        console.log('inbox')
        console.log(req.user)

        const{to , subject , body} = req.body

        const inboxMail = await Inbox.create({
            to : to,
            from : req.user.email,
            subject : subject,
            body : body
        })

        const sentMail = await Sent.create({
            to : to,
            from : req.user.email,
            subject : subject,
            body : body
        })
        res.status(201).json({  useremail: req.user, inboxMail , sentMail })

        // res.status(201).json({msg : subject})
    }catch(err){
        console.log(err)
    }
}


exports.getInboxData = async(req ,res) =>{

    try{
        const email = req.user.email;
        const data = await Inbox.findAll({ where: { to: email } });

        res.status(200).json({ msg: data });
        
    }catch(err){
        console.log(err)
    }
}

exports.getSentData = async(req ,res) =>{

    try{

        const email = req.user.email

        const data = await Sent.findAll({where:{from : email}})
        res.status(201).json({ msg: data})
        
    }catch(err){
        console.log(err)
    }
}

exports.inboxDeleteData = async(req, res) =>{

    try{

        const id = req.params.id

        const data = await Inbox.destroy({
            where : {
                id : id
            }
        })

        res.status(201).json({msg : data})
    }catch(err){
        console.log(err)
    }
}

exports.deleteSentData = async(req , res) =>{
    try{

        const id = req.params.id

        const data = await Sent.destroy({
            where : {
                id : id
            }
        })
        
        res.status(201).json({msg : data})
        
    }catch(err){
        console.log(err)
    }
}


