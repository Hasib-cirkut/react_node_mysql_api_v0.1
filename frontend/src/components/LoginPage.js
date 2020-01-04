import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {Redirect} from 'react-router-dom'
import {isLoggedIn} from './Auth'

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
        return(<Redirect to={"/home"} />)
    }

    else if(passMatched === 'matched'){
        return(<Redirect to={"/home"} />)
    }else{
        return (
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter username" ref={register({ required: true })} />
                        { usernameFound === 'notFound' &&

                            <React.Fragment>

                                <Form.Text className="text-muted">
                                    username not found in our database. don't worry, we will fire our database admin :p
                                </Form.Text>

                            </React.Fragment>

                        }
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name = "password" placeholder="Password" ref={register({ required: true })} />

                        { passMatched === 'notMatched' &&

                            <React.Fragment>

                                <Form.Text className="text-muted">
                                    Password didn't matched. Next time register with easier passwords :p
                                </Form.Text>

                            </React.Fragment>

                        }
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default LoginPage;
