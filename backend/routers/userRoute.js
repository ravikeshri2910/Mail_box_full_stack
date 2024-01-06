const express = require('express')

const userControl = require('../controlers/userControl')

const auth = require('../midleWare/auth')
const mailControl = require('../controlers/mailControl')
const router = express.Router();


router.post('/sinup-data', userControl.sinupRoute);

router.post('/login-data', userControl.logInRoute)

router.post('/sent', auth.authenticateUser , mailControl.inboxRouter);

router.get('/sent-data', auth.authenticateUser , mailControl.getSentData);

router.get('/inbox-data', auth.authenticateUser , mailControl.getInboxData);

router.delete('/delete-inbox-data/:id', auth.authenticateUser , mailControl.inboxDeleteData);

router.delete('/delete-sent-data/:id', auth.authenticateUser , mailControl.deleteSentData);

module.exports = router ;