import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Profile from './features/profile/Profile';
import SignIn from './features/signIn/SignIn';
import SignUp from './features/signUp/SignUp';




function App() {

  const signIn = useSelector((state) => state.signIn);
  return (
    <div className="App">      
        
     {!signIn.isSigned ? <SignIn/> : <Profile/>}
       
    </div>
  );
}

export default App;
