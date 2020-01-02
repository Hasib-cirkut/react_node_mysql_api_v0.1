const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const server = require('./routes/server')
require('dotenv').config()

const pool = require('./db')



const app = express()

app.use(cors())
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())


//Redirect root endpoint to server.js
app.use('/', server)



app.listen(5000, ()=>{
    console.log('Server Running on 3000')
})
