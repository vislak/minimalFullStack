import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './SignUp.module.css'
import { createUser } from "./signUpAPI";

import { setUserName, setEmail, setDateOfBirth, setPhoneNumber, setPassword } from "./signUpSlice";


const SignUp = () => {

    const signUp = useSelector((state) => state.signUp);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {

        let labelName = event.target.name;

        switch (labelName) {
            case 'userName':
                dispatch(setUserName(event.target.value));
                break;
            case 'email':
                dispatch(setEmail(event.target.value));
                break;
            case 'dateOfBirth':
                dispatch(setDateOfBirth(event.target.value));
            case 'phoneNumber':
                dispatch(setPhoneNumber(event.target.value));
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
        console.log("submit ", { signUp });
        createUser(signUp).then(res => { 

            if(res.data.success)
            {


                
            }


        });

    }
    return (<>
        <div className={style.container_signup}>

            <h3> Please fill the form </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName
                    <input type="text" name="userName" value={signUp.userName} onChange={handleInputChange} />
                </label>




                <label>
                    Date Of Birth
                    <input type="text" name="dateOfBirth" value={signUp.dateofBirth} onChange={handleInputChange} />
                </label>

                <label>
                    Phone No.
                    <input type="text" name="phoneNumber" value={signUp.phoneNumber} onChange={handleInputChange} />
                </label>

                <label>
                    Password
                    <input type="password" name="password" value={signUp.password} onChange={handleInputChange} />
                </label>


                <input type="submit" value="Join Now" />
            </form>
        </div>

       

    </>)

}

export default SignUp;