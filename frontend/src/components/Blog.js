import React, {useEffect, useState} from 'react';
import Navbar from './NavBar'
import {Link} from 'react-router-dom'
import './css/blog.css'
import { func } from 'prop-types';


const Blog =  ({match}) => {
    const {id} = match.params

    const [body, setBody] = useState({})
    const [loveCount, setLoveCount] = useState(0)
    const [loved, setLoved] = useState(false)

    useEffect(() => {

        async function fetchData() {
            let result = await fetch(`http://localhost:5000/api/blogs/blog/${id}`)

            result = await result.json()
        
            setBody(result[0])

            result = await fetch(`http://localhost:5000/api/users/loves/${localStorage.user}/${id}`)

            result = await result.json()
            
                if(result.length === 0){
                    setLoved(false);
                }else{
                    setLoved(true);
                }
            }

            async function getBlogLoves(){
                let loveCount = await fetch(`http://localhost:5000/api/blogs/countLoves/${id}`)

                loveCount = await loveCount.json()

                setLoveCount(loveCount[0].loveCount)
            }

            

            
            fetchData();
            getBlogLoves();

    }, []);



    const blogLoveClick = async (event) =>{

        event.preventDefault()

        if(loved === false){

            let result = await fetch(`http://localhost:5000/api/users/updateloves/${localStorage.user}/${id}`)

            result = await result.json()

            setLoved(!loved)

            let loveCount = await fetch(`http://localhost:5000/api/blogs/countLoves/${id}`)

                loveCount = await loveCount.json()

                setLoveCount(loveCount[0].loveCount)

            

        }else{
            let result = await fetch(`http://localhost:5000/api/users/deleteloves/${localStorage.user}/${id}`)

            result = await result.json()

            setLoved(!loved)

            let loveCount = await fetch(`http://localhost:5000/api/blogs/countLoves/${id}`)

                loveCount = await loveCount.json()

                setLoveCount(loveCount[0].loveCount)

        }

    }


    return (
        <div>
            <Navbar />
            <div id="blog-main">

            <div id="Blogtitle">

                <div id="BlogLoveIcon" onClick={blogLoveClick}>
                    {   !loved && 
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                    }

                    {
                        loved &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                    }
                </div>

                <h1>{body.title}</h1>
                
            </div>

            

            <div id="Blogusername"><Link to={`/user/${body.username}`} style={{textDecoration: "none"}}><h3>{body.username}</h3></Link></div>

                <div id="main-content">
                    {body.body}
                </div>

                <div id="BlogLovesText">
                    <h3>{loveCount}</h3> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                </div>

            </div>
            
        </div>
    );
}

export default Blog;
