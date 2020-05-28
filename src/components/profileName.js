import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ProfileAvatar = () => {
    const [userProfile, setUserProfile] = useState({})

    useEffect(()=>{
        axios.get("https://reqres.in/api/users/2")
        .then(result => {
            console.log(result.data)
            setUserProfile(result.data.data.avatar)
        })
    }, [])

    return(
        <img src={userProfile}/>
    )
}

export default ProfileAvatar