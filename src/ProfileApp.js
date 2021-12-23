import React,{useState} from 'react'
import ProfileForm from './componentsTodos/ProfileForm'
import ProfileList from './componentsTodos/ProfileList'

function ProfileApp() {

const [userName, setUserName] = useState('')
const [profiles, setProfiles] = useState([])
const [status, setStatus] = useState('all')
const [filterProfile, setFilterProfile] = useState([])

// useEffects for save
// useEffect(() => {

//     saveLocalProfiles()
//     getLocalProfiles()

// }, [])

//      // save locally functions
//      const saveLocalProfiles = () => {
//         localStorage.setItem('profiles', JSON.stringify('profiles'))
//     }

//     const getLocalProfiles = () => {
//         if(localStorage.getItem('profiles') ===null){
//             localStorage.setItem('profiles', JSON.stringify([]))
//         }else{
//         let profileLocal = JSON.parse(localStorage.getItem('profiles'))
//         setProfiles(profileLocal)
//         }
//     }

    return (
        <div>
          <div>
            <h1>profile app</h1>
            <ProfileForm 
                 userName={userName}
                 setUserName={setUserName}
                 profiles={profiles}
                 setProfiles={setProfiles}
                 status={status}
                 setStatus={setStatus}
                 filterProfile={filterProfile}
                 setFilterProfile={setFilterProfile}/>
           <div>
          
           <ul>
                {profiles.map(profile =>(
                            <ProfileList
                                key={profile.id} 
                                profiles={profiles}
                                setProfiles={setProfiles}
                                profile={profile}
                                />
                                
                                ))}
            </ul>
           </div>
          </div>
        </div>
    )
}

export default ProfileApp
