import React, { useState, useEffect } from "react";
import { profileDetail } from "./profileAPI";
import axiosConfig from '../../service/auth_axios';

import { logout } from "../signIn/signInSlice";
import { useDispatch } from "react-redux";


const Profile = ()=>{

    const [userName,setUserName]= useState('');
    const dispatch= useDispatch();
    useEffect(()=>{

        axiosConfig.get('/user/profile').then((res)=>{

            setUserName(res.data.user.userName);
            console.log(res.data);
        })

    },[]);

    const handleLogout=()=>{
        localStorage.setItem('jwt-token',"");
        dispatch(logout());
        
    }


    return (<>

        <h1> Signed in as user {userName} </h1>
        <button onClick={handleLogout}>Logout</button>

    </>)


}

export default Profile;