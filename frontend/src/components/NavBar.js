import React, {useState, useEffect} from 'react';
import {Nav, Form, FormControl, Navbar, Button} from 'react-bootstrap'

const NavBar = () => {


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
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Hola!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        {loggedin === true &&
                        <Nav.Link href="/logout">Logout</Nav.Link>
                        }

                        {loggedin === false &&
                        <Nav.Link href="/login">Login</Nav.Link>
                        }
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
