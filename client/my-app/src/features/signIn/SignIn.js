import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './SignIn.module.css'
import { userSignIn } from "./signInAPI";

import { setUserName, setPassword, setSigned } from "./signInSlice";


const SignIn = () => {

    const signIn = useSelector((state) => state.signIn);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {

        let labelName = event.target.name;

        switch (labelName) {
            case 'userName':
                dispatch(setUserName(event.target.value));
                break;           
            case 'password':
                dispatch(setPassword(event.target.value));
                break;
            default:
            // code block
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit ", { signIn });
        userSignIn(signIn).then(res => { 

            if(res.data.success)
            {
                console.log(res.data);
                //store the token in local storage (not recom)
                localStorage.setItem('jwt-token',res.data.token);
                dispatch(setSigned());
                
            }


        });

    }
    return (<>
        <div className={style.container_signup}>

            <h4>I am truested User  </h4>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName
                    <input type="text" name="userName" value={signIn.userName} onChange={handleInputChange} />
                </label>

                <label>
                    Password
                    <input type="password" name="password" value={signIn.password} onChange={handleInputChange} />
                </label>


                <input type="submit" value="Verify Me" />
            </form>
        </div>

       

    </>)

}

export default SignIn;