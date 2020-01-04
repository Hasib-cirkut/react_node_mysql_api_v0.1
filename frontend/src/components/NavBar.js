import React from 'react';
import {Nav, Form, FormControl, Navbar, Button} from 'react-bootstrap'
import Link from 'react-router-dom/Link'
import {isLoggedIn} from './Auth'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Hola!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        {isLoggedIn === true &&
                        <Nav.Link href="/logout">Logout</Nav.Link>
                        }

                        {isLoggedIn === false &&
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
