const express = require('express')

const userControl = require('../controlers/userControl')

const router = express.Router();


router.post('/sinup-data', userControl.sinupRoute);

router.post('/login-data', userControl.logInRoute)

module.exports = router ;