import React from 'react';
import './css/register.css'
import {Link} from 'react-router-dom'
import Navbar from './NavBar'

const Register = () => {
    return (

            <React.Fragment>
                <Navbar/>
                <div className="flex-container">
                    <form className="main">
                        <span className="formSpan">username</span><br />
                        <input className="formInput" /><br /><br /><br />

                        <span className="formSpan">First Name</span><br />
                        <input className="formInput" /><br /><br /><br />

                        <span className="formSpan">Last Name</span><br />
                        <input className="formInput" /><br /><br /><br />

                        <span className="formSpan">password</span><br />
                        <input type="password" className="formInput" /><br /><br /><br />

                        <span className="formSpan">confirm password</span><br />
                        <input type="password" className="formInput" /><br /><br /><br />

                        <span className="formSpan">email</span><br />
                        <input type="email" className="formInput" /><br /><br /><br />

                        <input type="submit" className="submitButton" />

                        <p id="loginText">Already have and account? <Link to={"/login"} style={{textDecoration: "none"}}>Login</Link></p>
                    </form>
                </div>
            </React.Fragment>
        
    );
}

export default Register;
