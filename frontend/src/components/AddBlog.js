import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {Form, Button, Dropdown, DropdownButton} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import Navbar from './NavBar'

import './css/addBlog.css'

export default function AddBlog() {
    const { register, handleSubmit, watch, errors } = useForm()

    const [blog, setblog] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [genre, setGenre] = useState("Other")

    const onSubmit = async temp => {
        
        

        temp['author'] = window.localStorage['user']
        temp['genre'] = genre

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

    const handleDropDown = (event) =>{
        console.log(event.target.value);
        
        setGenre(event.target.value)
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

                <div id="addBlogMain">
                    <form onSubmit={handleSubmit(onSubmit)}>
            

                    <input type="text" name="title" id="title" placeholder="Title" rows="3" ref={register({ required: true })} />

                
                        <DropdownButton id="dropdown-basic-button" title={genre} style={{marginTop: "40px",marginLeft: "50px"}}>
                            <Dropdown.Item as="button" onClick={handleDropDown} value="Programming">Programming</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleDropDown} value="Music">Music</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleDropDown} value="Travelling">Travelling</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handleDropDown} value="Other">Other</Dropdown.Item>
                        </DropdownButton>
    
                        <textarea name="body" id="body" ref={register({ required: true })}></textarea>
            
                    <button type="submit" id="addBlogButton"><span style={{color: "white"}}>ADD </span></button>
                </form>
                </div>

            </React.Fragment>

        )
    }
}