import React, {useState} from 'react';
import './css/register.css'
import Navbar from './NavBar'
import { useForm } from 'react-hook-form'
import {Redirect, Link} from 'react-router-dom'

const Register = () => {

    const [usernameTaken, setUsernameTaken] = useState(false)
    const [passwordDidntMatch, setPasswordDidntMatch] = useState(false)
    const [emailTaken, setEmailTaken] = useState(false)
    const [redirect, setRedirect] = useState(false)
    
    let err = {
        ut: false,
        pm: false,
        et: false
    }

    
    const { register, handleSubmit, errors, setError} = useForm()

    const onSubmit = async data => {


        let result = await fetch(`http://localhost:5000/api/users/${data.username}`)

        result = await result.json()
        
        

        if(result.length > 0){
            
            setUsernameTaken(true);
            err.ut = true;
        }
        

        let result2 = await fetch(`http://localhost:5000/api/users/email/${data.email}`)
        
        result2 = await result2.json()

        if(result2.length > 0){
            
            setEmailTaken(true)
            err.et = true;
        }

        if(data.password !== data.confirmpassword){
            setPasswordDidntMatch(true);
            err.pm = true
        }


        if(!err.et && !err.pm && !err.ut){

            let result = await fetch('http://localhost:5000/api/users/register' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            result = await result.json()

            if(result.result === 'Success'){
                setRedirect(true)
            }
       
                
        }
        
    }
    

    return (


            <React.Fragment>

                {redirect && <Redirect to={"/login"} />}
                
                <Navbar/>

                
                <div className="flex-container">
                
                    <form className="main" onSubmit={handleSubmit(onSubmit)}>
                        <span className="formSpan">username</span><br />
                        <input className="formInput" name="username"  ref={register({ required: true })}/><br /><br /><br />
                        {usernameTaken && 'Username already taken'}

                        <span className="formSpan">First Name</span><br />
                        <input className="formInput" name="firstname"  ref={register({ required: true })}/><br /><br /><br />

                        <span className="formSpan">Last Name</span><br />
                        <input className="formInput" name="lastname"  ref={register({ required: true })}/><br /><br /><br />

                        <span className="formSpan">password</span><br />
                        <input type="password" name="password" className="formInput"  ref={register({ required: true, minLength: 5 })}/><br /><br /><br />
                        {errors.password && 'Password must be 5 character long'}

                        <span className="formSpan">confirm password</span><br />
                        <input type="password" name="confirmpassword" className="formInput" ref={register({ required: true })}/><br /><br /><br />
                        {passwordDidntMatch && 'password didn\'t matched'}

                        <span className="formSpan">email</span><br />
                        <input type="email" name="email" className="formInput"  ref={register({ required: true })}/><br /><br /><br />
                        {emailTaken && 'There is already an account registered to this email'}

                        <input type="submit" className="submitButton" />

                        <p id="loginText">Already have and account? <Link to={"/login"} style={{textDecoration: "none", color: "green"}}>Login</Link></p>
                    </form>
                </div>
            </React.Fragment>
        
    );
}

export default Register;
