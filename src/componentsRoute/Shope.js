import React,{useState, useEffect} from 'react'
import {Link } from 'react-router-dom'


function Shope() {

const [users, setUsers] = useState([])

useEffect(() => {
    const fetchItem = async() => {
        const fetchUrl = "https://jsonplaceholder.typicode.com/photos"
        const data = await fetch(fetchUrl)
        const items = await data.json(data)
        console.log(items);
        setUsers(items)
    }

    fetchItem()
    
    
}, [])

    return (
        <div>
            <h1>shope</h1>
            <ul >
                {users.map(item => (
                <li key={item.id} >
                    <Link to={`/shope/${item.id}`}>{item.title}</Link>
               </li>
              ))}
            </ul>
        </div>
    )
}

export default Shope
