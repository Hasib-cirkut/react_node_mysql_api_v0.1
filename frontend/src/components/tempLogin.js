import React from 'react';
import './css/login.css'
import {Link} from 'react-router-dom'


const TempLogin = () => {
    return (
        <div className="flex-container">

        <div id="loginBody">
            <form id="loginForm">
                <span id="loginSpan">username</span><br />
                <input id="formInput" /><br /><br /><br />

                <span id="loginSpan2">password</span><br />
                <input type="password" id="formInput2" /><br /><br /><br />

                <span id="accountText">Don't have an account</span><br />
                

                <Link to={"#"} id="signupText">SIGN UP TODAY</Link><br />

                <input type="submit" id="submitButton" />
            </form>
        </div>

        </div>
    );
}

export default TempLogin;
