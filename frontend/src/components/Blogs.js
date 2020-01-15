import React, {useState, useEffect} from 'react';
import {DropdownButton, Dropdown, Card} from 'react-bootstrap'
import Navbar from './NavBar'
import {Link} from 'react-router-dom'
import './css/blogs.css'

const Blogs = () => {


    const [blogs, setblogs] = useState([])
    const [search, setSearch] = useState("All")

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () =>{
        

        let data = await fetch('http://localhost:5000/api/blogs')
        data = await data.json()

        setblogs(data)
        
    }


    const handleDropDown = async (event) =>{
        event.preventDefault();

        //reset blogs state
        setblogs([])

        setSearch(event.target.value)

        let data= await fetch(`http://localhost:5000/api/blogs/${event.target.value}`)

        data = await data.json()
        
        setblogs(data)
        
    }

    return (
        <div>
            <Navbar></Navbar>

            <DropdownButton id="dropdown-basic-button" title={search} style={{marginTop: "20px"}}>
                <Dropdown.Item as="button" onClick={handleDropDown} value="Programming">Programming</Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleDropDown} value="Music">Music</Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleDropDown} value="Travelling">Travelling</Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleDropDown} value="Other">Other</Dropdown.Item>
            </DropdownButton>

            <div className="blog-container">
            {
                blogs.map(item => (
                    <Link to={`blogs/${item.uKey}`} id="Blogs-Item-Link">
                        <div id="blog-item" key={item.uKey}>
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">by {item.username}</Card.Subtitle><br />

                                    <Card.Subtitle ><span style={{color: "#45c8fb"}}>{item.genre}</span></Card.Subtitle>
                                    <Card.Subtitle ></Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>
                    
                ))
            }
            </div>
        </div>
    );
}

export default Blogs;
