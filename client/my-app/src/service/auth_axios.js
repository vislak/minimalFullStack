import axios from "axios";
const axiosUrl = process.env.REACT_APP_BASE_URL;
console.log({axiosUrl});


let tokenVal='';
try{
 
 tokenVal= localStorage.getItem("jwt-token"); 

}
catch(err)
{
  tokenVal='';
}

const accessToken= tokenVal;


console.log({accessToken});
const auth_axios = axios.create({

  baseURL: axiosUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`
  },
})
 
export default auth_axios;

// axios.interceptors.request.use(
//   config => {
//     if (!config.headers.Authorization) {
//       const token = JSON.parse(localStorage.getItem("jwt-token")).token;

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   error => Promise.reject(error)
// );