import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Form, Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import Navbar from './NavBar'

export default function AddBlog() {
    const { register, handleSubmit, watch, errors } = useForm()

    const [blog, setblog] = useState([])
    const [redirect, setRedirect] = useState(false)

    const onSubmit = async temp => {
        
        setblog(temp)

        let result = await fetch('http://localhost:5000/blogs/addBlog' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(temp)
            })
        result = await result.json()

        if(result.result === 'Success')
            setRedirect(true)
    }

    //console.log('Local Storage Length: ', window.localStorage.length);
    

    if(window.localStorage.length < 1){
        console.log('here');
        
        return(<Redirect to={"/login"} />)
    }

    else if(redirect){
        return(<Redirect to={"/blogs"} />)
    }else{
        return (

            <React.Fragment>
                <Navbar></Navbar>
                <div style={{padding: "50px"}}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="username" rows="3" ref={register({ required: true })} />
            
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Title" rows="3" ref={register({ required: true })} />
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Blog Body</Form.Label>
                        <Form.Control as="textarea" name="body" rows="3" ref={register({ required: true })} />
                    </Form.Group>
            
                    <Button type="submit">ADD</Button>
                </Form>
                </div>
            </React.Fragment>
        )
    }
}