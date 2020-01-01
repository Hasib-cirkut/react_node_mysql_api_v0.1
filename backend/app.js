const express = require('express')
const mysql = require('mysql')
require('dotenv').config()



const app = express()


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



app.listen(3000, ()=>{
    console.log('Server Running')
})