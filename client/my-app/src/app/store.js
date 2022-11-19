import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import signUpReducer from '../features/signUp/signUpSlice';
import signInReducer from '../features/signIn/signInSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    signUp : signUpReducer,
    signIn: signInReducer
  },
});
