import React, {useState} from 'react'
import User from './User'

import {Link} from 'react-router-dom'



const Users = () =>{
    const [users, setusers] = useState([])

    const fetchAllUsers = async () =>{
        let result = await fetch('http://localhost:5000/api/users')

        result = await result.json()

        setusers(result)
    }

    const fetchUser = async () =>{
        let result = await fetch('http://localhost:5000/api/users')
    }


    return(
        <div>
            <button onClick={fetchAllUsers}>All User</button>

            {
                users.map(item =>(
                    <div key={item.uKey}>
                        <Link to={`/${item.uKey}`}>{item.firstname}</Link>
                    </div>
                ))
            }
        </div>
    )

    

}

export default Users;