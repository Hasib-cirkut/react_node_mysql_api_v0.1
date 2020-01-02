import React, {useState, useEffect} from 'react'



const User = ({ match }) =>{
    const [user, setUser] = useState([])

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () =>{
        let id = match.params.userid
        let user = await fetch(`http://localhost:5000/api/users/${id}`)
        user = await user.json()

        setUser(user)
        
    }

    return(
        <div>
            {
                user.map(item=>(
                    <div key = {item.uKey}>
                        <h4>{item.firstname}</h4>
                        <h4>{item.lastname}</h4>
                        <h4>{item.home}</h4>
                    </div>
                ))
            }
        </div>
    )

    

}

export default User;