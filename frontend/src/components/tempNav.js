import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'




const TempNav = () => {

    

    const [loggedin, setloggedin] = useState(null)

    useEffect(() => {
        
        
        
        loggedIn()
        
    }, [])

    const loggedIn = () =>{
        if(window.localStorage.length === 1){
            setloggedin(true)
        }else{
            setloggedin(false)
        }
    }
    return (
        <div className="flex-container">
            <div id="navbody">
                <Link id="homeLink" className="navLink" to={"/"}>Home</Link>

                <Link id="blogLink" className="navLink" to={"/blogs"}>Blogs!</Link>

                <Link id="usersLink" className="navLink" to={"#"}>Users</Link>

                {loggedin === true && 
                    <Link id="logoutLink" className="navLink" to={"/logout"}>logout</Link>
                }

                {loggedin === false && 
                <Link id="loginLink" className="navLink" to={"/login"}>login</Link>
                }

                
            </div>
        </div>
    );
}

export default TempNav;
