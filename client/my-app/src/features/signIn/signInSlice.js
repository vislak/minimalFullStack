import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userName: "visluck",    
    password:"123",
    isSigned:false
};


export const signInSlice = createSlice({
    name: 'signUp',
    initialState,

    reducers: {

        setUserName: (state, action) => {
            state.userName = action.payload;
        },       
        setPassword:(state,action)=>{
            state.password = action.payload;
        },
        setSigned : (state,action)=>{
            state.isSigned= true;
        },
        logout:(state)=>{
            state.isSigned=false;
        }

    }
});

export const {setUserName,setPassword,setSigned,logout}= signInSlice.actions;

export default signInSlice.reducer;
