const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./utill/database');

const userRoute = require('./routers/userRoute')
const mailRoute = require('./routers/mailRoute')

const app = express();

app.use(cors());
app.use(bodyParser.json());


const User = require('./models/user');
const Inbox = require('./models/inboxMail')
const Sent = require('./models/sentMail')


app.use('/user',userRoute)
// app.use('/mail',mailRoute)


sequelize
     .sync()
       //.sync({force:true}) // this is use to forcly delete all tables and creates new tables
        .then(result =>{
            app.listen(8000)
            // console.log(result)
        })
        .catch(err => (console.log('error')))

