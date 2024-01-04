const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./utill/database');

const userRoute = require('./routers/userRoute')

// const express = require('express');
const app = express();

//app.use(express.json()); // Add this line to parse JSON data in requests


// const app = express()
// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const User = require('./models/user');


app.use('/user',userRoute)


sequelize
        .sync()
       // .sync({force:true}) // this is use to forcly delete all tables and creates new tables
        .then(result =>{
            app.listen(8000)
            // console.log(result)
        })
        .catch(err => (console.log('error')))

