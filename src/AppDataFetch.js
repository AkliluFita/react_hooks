import React ,{useState, useEffect} from 'react'

function AppDataFetch() {


    const url = 'https://api.github.com/users';

    const [users, setUsers] = useState([])

    async function  getUsers () {
        fetch(url)
        .then(Response => Response.json())
        .then(users=> setUsers(users))  
    }

    useEffect(() => {
        getUsers()
       
    }, [users])


    return (
        <div>
            <h1>fetch user data</h1>
            <ul className='users'>
            {users.map(user =>{
                        const{login, id, avatar_url, html_url} =user
                        return(
                            
                            <li key={id}>
                               <h4 >{login}</h4> 
                                <img  src={avatar_url} alt=""/>
                                <a  href={html_url}>profile</a>
                            </li>
                        )
                    })}
           </ul>
        </div>
    )
}

export default AppDataFetch
