import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userName: "Abc",
    email: "abc@email.com",
    dateofBirth: "03/11/1999",
    phoneNumber: "",
    password:"",
};


export const singUpSlice = createSlice({
    name: 'signUp',
    initialState,

    reducers: {

        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setDateOfBirth: (state, action) => {
            state.dateofBirth = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setPassword:(state,action)=>{
            state.password = action.payload;
        }

    }
});

export const {setUserName,setEmail,setDateOfBirth,setPhoneNumber,setPassword}= singUpSlice.actions;

export default singUpSlice.reducer;
