
const mail = require('../models/mail')
const user = require('../models/user')

exports.inboxRouter = async (req, res) => {
    try {
        // console.log(req.user)

        const { receiverMail, subject, body } = req.body

        const receiver = await user.findOne({
            where: {
                email: receiverMail
            }
        })
        console.log('inbox', receiverMail)
        console.log('inbox', receiver)

        if (!receiver) {

            res.status(201).json({ msg: 'User not found' })
        }
        const inboxMail = await mail.create({
            sender: req.user.email,
            receiver: receiver.email,
            senderId : req.user.id,
            receiverId : receiver.id,
            subject: subject,
            body: body
        })


        res.status(201).json({ useremail: req.user, inboxMail })

        // res.status(201).json({msg : subject})
    } catch (err) {
        console.log(err)
    }
}


exports.getInboxData = async (req, res) => {

    try {
        const id = req.user.id;
        const data = await mail.findAll({ where: { receiverId: id } });

        // console.log('email', email)
        res.status(200).json({ msg: data });

    } catch (err) {
        console.log(err)
    }
}

exports.getSentData = async (req, res) => {

    try {

        const id = req.user.id

        console.log('req.user6 ' , req.user)
        const data = await mail.findAll({ where: { senderId: id } })
        res.status(201).json({ msg: data })

    } catch (err) {
        console.log(err)
    }
}

exports.inboxDeleteData = async(req, res) =>{

    try{

        const id = req.params.id

        const data = await mail.findOne({
            where : {
                id : id
            }
        })

        if(data.senderId){
            data.receiverId = null
            await data.save()
        }
        else if(!data.senderId){
            await mail.destroy({
                where : {
                    id : id
                }
            })
        }

        res.status(201).json({msg : data})
    }catch(err){
        console.log(err)
    }
}

exports.deleteSentData = async(req , res) =>{
    try{

        const id = req.params.id

        const data = await mail.findOne({
            where : {
                id : id
            }
        })

        if(data.receiverId){
            data.senderId = null
            await data.save()
        }
        else if(!data.receiverId){
            await mail.destroy({
                where : {
                    id : id
                }
            })
        }

        res.status(201).json({msg : data})
    }catch(err){
        console.log(err)
    }
}

exports.getOneMailData = async (req, res) => {
    try {

        const id = req.params.id

        const data = await mail.findOne({
            where: {
                id: id
            }
        })


        res.status(201).json({ msg: data, id })
    } catch (err) {
        console.log(err)
    }
}

exports.updateOpenedByReceiver = async (req, res) => {
    try {

        const id = req.params.id

        const data = await mail.findOne({
            where: {
                id: id
            }
        })

        // console.log('data' , data)

        if (data) {
            // Update the 'unRead' column value to 'true'
            data.openedByReceiver = true;
            await data.save(); // Save the changes to the database
            // console.log('Column updated successfully!');
        } else {
            console.log('Inbox entry not found.');
        }

        res.status(201).json({ msg: 'Receiver' })

    } catch (err) {
        console.log(err)
    }
}



