import React from 'react'
import '../App.css'

function ProfileList(props) {

    // states
    const {profiles, setProfiles, profile} =props

    // functions
    const handleDelete = () => {
        setProfiles(profiles.filter( item => item.id!== profile.id))
    }

    const handleUpdate = () => {
       setProfiles( profiles.map(item =>{
        if (item.id ===profile.id) {
           return {...item, isCompleted:!item.isCompleted}
        }

        return item
    }))
    }



    return (
        <div>
                <div className="container">
                   
                <li className='list'>
                    <h5 className={profile.isCompleted?'red':''}>{profile.name}</h5>
                    <button onClick={handleDelete}>delete</button>
                    <button onClick={handleUpdate}>update</button>
                </li>          
                                
                     
                   
                </div>
        </div>
    )
}

export default ProfileList
