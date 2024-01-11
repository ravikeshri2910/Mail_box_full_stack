const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./utils/database');
require('dotenv').config(); // Load .env file

const userRoute = require('./routes/user')
// const mailRoute = require('./routers/mailRoute')

const app = express();

app.use(cors());
app.use(bodyParser.json());


const Email = require('./models/mail')
const User = require('./models/user')



app.use('/user',userRoute)
// app.use('/mail',mailRoute)


sequelize
     .sync()
      // .sync({force:true}) // this is use to forcly delete all tables and creates new tables
        .then(result =>{
            app.listen(process.env.PORT)
            // console.log(result)
        })
        .catch(err => (console.log(err)))

