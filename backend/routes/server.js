const express = require("express")
const router = express.Router()

const pool = require('../db')


const SHOW_ALL_USER_Q = `select * from user`


router.get('/', (req, res)=>{
    res.send("Hello")
})



//get all blogs
router.get('/api/blogs', (req, res)=>{
    pool.query('select title, username, uKey, genre from blogs', (error, result, fields)=>{
        if(error)
            console.log(error);
        else{
            res.send(result)
        }
    })
})

//get blogs by genre
router.get('/api/blogs/:id', (req, res)=>{

    
    pool.query('select * from blogs where genre = ?', [req.params.id], (error, result, fields)=>{
        if(error)
            console.log(error);
        else{
            res.send(result)
        }
    })
})

//get blogs by uKey
router.get('/api/blogs/blog/:id', (req, res)=>{


    pool.query('select * from blogs where uKey = ?', [req.params.id], (error, result, fields)=>{
        if(error)
            console.log(error);
        else{
            res.send(result)
        }
    })
})

//Get blogs by user
router.get('/api/blogs/blogByUser/:id', (req, res)=>{

    
    pool.query('select * from blogs where username = ?', [req.params.id], (error, result, fields)=>{
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
    
    pool.query(`select username, email, firstname, lastname, shortquote, following, follower from users where username = ?`,[username], (error, result)=>{
        if(error)
        console.log(error);
        else{
            res.send(result)
        }
    })
})

router.get('/api/users/email/:id', (req, res)=>{
    let email = req.params.id
    
    pool.query(`select * from users where email = ?`,[email], (error, result)=>{
        if(error)
        console.log(error);
        else{
            res.send(result)
        }
    })
})

router.post('/api/users/register', (req, res)=>{

    let {username, firstname, lastname, password, email} = req.body;

    

    let q = `INSERT INTO users values(?, ?, ?, ?, ?)`

    pool.query(q, [username, email, password, firstname, lastname], (error, result)=>{
        if(error)
            console.log(error);
        else{
            res.send({result: 'Success'})
        }
    })
})

router.post('/blogs/addBlog', (req, res)=>{
    let username = req.body.author
    let title = req.body.title
    let body = req.body.body
    let genre = req.body.genre

    let q = `INSERT INTO blogs values('', ?, ?, ?, ?)`

    pool.query(q, [username, title, body, genre], (error, result)=>{
        if(error)
            console.log(error);
        else{
            res.send({result: 'Success'})
        }
    })
})

router.post('/api/users/password', (req, res)=>{
    let username = req.body.username
    let password = req.body.password
    

    let q = `SELECT password from users where username=?`

    pool.query(q, [username], (error, result)=>{
        if(error)
            console.log(error);
        else{

            

            if(result.length === 0){
                res.send({result: 'userNotFound'})
            }else{

                
                let dbPassword = result[0].password

                if(dbPassword === password){
                    
                    res.send( {result: 'matched'})
                
                }else{
                    res.send({result: 'notMatched'})
                }
            }
        }
    })
})


// get loves of user 
router.get('/api/users/loves/:id/:id2', (req, res)=>{

    let username = req.params.id
    let blog_id = req.params.id2

    pool.query(`select * from loves where username = ? and blog_id = ?`, [username, blog_id], (error, result)=>{

        
        res.send(result)
    })

})

//Update loves of users
router.get('/api/users/updateloves/:id/:id2', (req, res)=>{
    let username = req.params.id
    let blog_id = req.params.id2

    pool.query('insert into loves values(?, ?)', [username, blog_id], (error, result)=>{
        if(error){
            console.error(error)
        }else{
            res.send({
                response: 'loves table updated'
            })
        }
    })
})


router.get('/api/users/deleteloves/:id/:id2', (req, res)=>{
    let username = req.params.id
    let blog_id = req.params.id2

    pool.query('DELETE FROM loves WHERE username = ? and blog_id = ?', [username, blog_id], (error, result)=>{
        if(error){
            console.error(error)
        }else{
            res.send({
                response: 'loves table updated'
            })
        }
    })
})


router.get('/api/blogs/countLoves/:id', (req, res)=>{ 

    let blog_id = req.params.id

    pool.query('select count(blog_id) as loveCount FROM loves WHERE blog_id = ?', [blog_id], (error, result)=>{
        if(error){
            console.error(error)
        }else{
            res.send(result)
        }
    })
})

module.exports = router