const express = require('express')

const userControl = require('../controllers/user')

const auth = require('../middleWares/auth')
const mailControl = require('../controllers/mail')
const router = express.Router();


router.post('/sinup', userControl.sinupRoute);

router.post('/login', userControl.logInRoute)

router.post('/mail', auth.authenticateUser , mailControl.inboxRouter);

router.get('/inbox', auth.authenticateUser , mailControl.getInboxData);

router.get('/sent', auth.authenticateUser , mailControl.getSentData);

router.get('/mail/:id', auth.authenticateUser , mailControl.getOneMailData);

router.get('/mailopened/:id', auth.authenticateUser , mailControl.updateOpenedByReceiver);

router.delete('/delete-inbox/:id', auth.authenticateUser , mailControl.inboxDeleteData);

router.delete('/delete-sent/:id', auth.authenticateUser , mailControl.deleteSentData);


// router.get('/get-inboxMail-data/:id', auth.authenticateUser , mailControl.getOneInboxMailData);

module.exports = router ;