import React, {useEffect, useState} from 'react';
import Navbar from './NavBar'
import {Link} from 'react-router-dom'
import './css/blog.css'


const Blog =  ({match}) => {
    const {id} = match.params

    const [body, setBody] = useState({})

    useEffect(() => {

        async function fetchData() {
            let result = await fetch(`http://localhost:5000/api/blogs/blog/${id}`)

            result = await result.json()
        
            setBody(result[0])

            }
            
            fetchData();

    }, []);


    return (
        <div>
            <Navbar />
            <div>

            <div id="Blogtitle"><h1>{body.title}</h1></div>

            <Link to={`/user/${body.username}`}><div id="Blogusername"><h3>{body.username}</h3></div></Link>

                <div id="main-content">
                    {body.body}
                </div>

                <div id="BlogLovesText">
                    <h3>{body.loves}</h3> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                </div>

            </div>
            
        </div>
    );
}

export default Blog;
