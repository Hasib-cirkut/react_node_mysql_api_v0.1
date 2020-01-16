import React, {useState, useEffect} from 'react'

import Navbar from './NavBar'

import {Link} from 'react-router-dom'

import './css/user.css'

const User = ({ match }) =>{
    const [user, setUser] = useState({})
    const [blogs, setBlog] = useState([])

    useEffect(() => {
        fetchUser()
        fetchBlog()
    }, [])

    const fetchUser = async () =>{
        let id = match.params.id
        let user = await fetch(`http://localhost:5000/api/users/${id}`)
        user = await user.json()

        setUser(user[0])
        
    }

    const fetchBlog = async () =>{
        let id = match.params.id
        let blogs = await fetch(`http://localhost:5000/api/blogs/blogByUser/${id}`)
        blogs = await blogs.json()

        
        

        setBlog(blogs)
        
    }

    return(
        <div>
            <Navbar />

            <div id="UserIntroBar">

                <div id="UserIntroBarMiddlePart">
                    <h3>{user.firstname + " " + user.lastname}</h3>
                    <h6>Blog member since 2019</h6>

                    <p>
                        {user.shortquote}
                    </p>

                    <h5>{user.following} following {user.follower} followers</h5>

                    <button>
                        Follow
                    </button>
                </div>

            </div>

            <div id="UserBlogs">
                {
                    blogs.map(blog =>{
                        return(
                            <Link to={`/blogs/${blog.uKey}`} style={{textDecoration: "none"}}>
                                <div key={blog.uKey} id="UserBlog">
                                    <h4>{blog.title}</h4>
                                    <h5>{blog.genre}</h5>
                                    <p>{blog.body.substring(0, 40)}...</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )

    

}

export default User;