import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import {Redirect, Link} from 'react-router-dom'
import {isLoggedIn} from './Auth'

import Navbar from './NavBar'

import './css/login.css'

const LoginPage = () => {

    const { register, handleSubmit, watch, errors } = useForm()

    
    const [usernameFound, setUsernameFound] = useState('initState')
    const [passMatched, setPassMatched] = useState('initState')

    

    const onSubmit = async (prop) =>{

        let result = await fetch(`http://localhost:5000/api/users/password` , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(prop)
            })
        result = await result.json()

        console.log(result);
        

        if(result.result === 'userNotFound'){
            setUsernameFound('notFound')
        }else{
                //Username found
                setUsernameFound('found')

                if(result.result === 'matched'){
                    setPassMatched('matched')
                    localStorage.setItem('user', prop.username)

                }else{
                    setPassMatched('notMatched')
                }
        }
        
    }

    if(isLoggedIn){
        return(<Redirect to={"/"} />)
    }

    else if(passMatched === 'matched'){
        return(<Redirect to={"/"} />)
    }else{
        return (

            <div>
                <Navbar />   
            

            <div className="flex-container">


            <div id="loginBody">
                <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                    <span id="loginSpan">username</span><br />
                    <input id="formInput" name="username"  ref={register({ required: true })}/><br /><br /><br />

                    { usernameFound === 'notFound' &&

                    <React.Fragment>

                        <text id="usernameNotFoundText">
                            username not found in our database
                        </text>

                    </React.Fragment>

                    }
    
                    <span id="loginSpan2">password</span><br />
                    <input type="password" id="formInput2" name = "password" ref={register({ required: true })} /><br /><br /><br />

                    { passMatched === 'notMatched' &&

                    <React.Fragment>

                        <text id="passDidntMatchText">
                            Password didn't match
                        </text>

                    </React.Fragment>

                    }
    
                    <span id="accountText">Don't have an account ?</span><br />
                    
    
                    <Link to={"/register"} id="signupText">SIGN UP TODAY</Link><br />
    
                    <input type="submit" id="submitButton" />
                </form>
            </div>
    
            </div>
            </div>


        )
    }
}

export default LoginPage;
