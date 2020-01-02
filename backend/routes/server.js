const express = require("express")
const router = express.Router()

const pool = require('../db')


const SHOW_ALL_USER_Q = `select * from user`


router.get('/', (req, res)=>{
    res.send("Hello")
})


router.get('/api/users', (req, res)=>{
    pool.query(SHOW_ALL_USER_Q, (error, result, fields)=>{
        if(error)
            console.log(error);
        else{
            res.send(result)
        }
    })
})



module.exports = router