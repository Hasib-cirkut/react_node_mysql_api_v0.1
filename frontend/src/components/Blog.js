import React, {useEffect, useState} from 'react';
import Navbar from './NavBar'
import { Nav } from 'react-bootstrap';

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

            <div id="Blogusername"><h3>{body.username}</h3></div>

                <div id="main-content">
                    {body.body}
                </div>

            </div>
            
        </div>
    );
}

export default Blog;
