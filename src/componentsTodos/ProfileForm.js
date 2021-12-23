import React, {useEffect} from 'react'

function ProfileForm(props) {

// props state and functions
    const {userName, setUserName, profiles, setProfiles, status, setStatus, filterProfile, setFilterProfile} =props

// functions
const handleSubmit = (e) => {
    e.preventDefault()

    const newProfile = { id:Math.random()*100, name:userName, isCompleted:false}
    setProfiles(
        [...profiles, 
            newProfile
            ])
    setUserName('')
}
// use effects
useEffect(() => {


const handleFilter = () => {
    switch (status) {
        case "complete":
            setFilterProfile(profiles.filter(item => item.isCompleted === true))
            break;
        case "unComplete":
            setFilterProfile(profiles.filter(item => item.isCompleted === false))
            break;
        default:
            setFilterProfile(profiles)
            break;
    }
}
    handleFilter()
    
}, [profiles, status])




    return (
        <div>
            <div>
                <input
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)} 
                    type="text" />
                <button 
                    onClick={handleSubmit} >submit</button>
            </div>
            <div>
                <form >
                    <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="all">all</option>
                        <option value="complete">completed</option>
                        <option value="unComplete">uncompleted</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default ProfileForm

