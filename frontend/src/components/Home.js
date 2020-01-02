import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Nav from './NavBar'
import AddBlog from './AddBlog';

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, Blogs!</h1>
                <p>
                    This is a site where you can anonymously post blogs about eveyryday things :D
                </p>
                <p>
                    <Link to={'/blogs'}><Button variant="primary">Read Some Blogs</Button></Link>
                </p>

                <p>
                <Link to={'/addBlog'}><Button variant="primary">Confess Something!</Button></Link>
                </p>
            </Jumbotron>

           
        </div>
    );
}

export default Home;
