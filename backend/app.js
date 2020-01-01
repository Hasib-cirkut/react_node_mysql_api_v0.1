const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const server = require('./routes/server')
require('dotenv').config()



const app = express()

app.use(cors())
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())


const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'test'
});

connection.connect(err=>{
    if(err){
        console.error(err)
    }else{
        console.log('DB connection established');
    }
})

//Redirect root endpoint to server.js
app.use('/', server)



app.listen(3000, ()=>{
    console.log('Server Running on 3000')
})