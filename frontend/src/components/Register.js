import React from 'react';
import './css/register.css'

const Register = () => {
    return (
        
            <div className="flex-container">
            <form className="main">
                <span className="formSpan">username</span><br />
                <input className="formInput" /><br /><br /><br />

                <span className="formSpan">password</span><br />
                <input type="password" className="formInput" /><br /><br /><br />

                <span className="formSpan">confirm password</span><br />
                <input type="password" className="formInput" /><br /><br /><br />

                <span className="formSpan">email</span><br />
                <input type="email" className="formInput" /><br /><br /><br />

                <input type="submit" className="submitButton" />
            </form>
            </div>
        
    );
}

export default Register;
