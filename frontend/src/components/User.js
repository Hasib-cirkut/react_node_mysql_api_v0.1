import React, {useState} from 'react'



const User = () =>{
    const [user, setuser] = useState([])

    const fetchAllUser = async () =>{
        let result = await fetch('http://localhost:5000/api/users')

        result = await result.json()

        setuser(result)
    }

    const fetchUser = async () =>{
        let result = await fetch('http://localhost:5000/api/users')
    }


    return(
        <div>
            <button onClick={fetchAllUser}>All User</button>

            {
                user.map(item =>(
                    <div key={item.index}>
                    <h5 onClick={fetchUser}>{item.firstname}</h5>
                    </div>
                ))
            }
        </div>
    )

    

}

export default User;