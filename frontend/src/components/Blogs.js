import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'

import AddBlog from './AddBlog'

const Blogs = () => {


    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () =>{
        let data = await fetch('http://localhost:5000/api/blogs')
        data = await data.json()

        setblogs(data)

        console.log(data);
        
    }

    return (
        <div>
            {
                blogs.map(item => (
                    <div key={item.uKey}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.username}</Card.Subtitle>
                                <Card.Text>
                                    {item.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}

export default Blogs;
