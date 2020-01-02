const express = require("express")
const router = express.Router()

const pool = require('../db')


const SHOW_ALL_USER_Q = `select * from user`


router.get('/', (req, res)=>{
    res.send("Hello")
})

router.get('/api/blogs', (req, res)=>{
    pool.query('select * from blogs', (error, result, fields)=>{
        if(error)
            console.log(error);
        else{
            res.send(result)
        }
    })
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

router.get('/api/users/:id', (req, res)=>{
    let username = req.params.id
    
    pool.query(`select * from users where username = ?`,[username], (error, result)=>{
        if(error)
        console.log(error);
        else{
            res.send(result)
        }
    })
})

router.post('/blogs/addBlog', (req, res)=>{
    let username = req.body.username
    let title = req.body.title
    let body = req.body.body

    let q = `INSERT INTO blogs values('', ?, ?, ?)`

    pool.query(q, [username, title, body], (error, result)=>{
        if(error)
            console.log(error);
    })
})



module.exports = router