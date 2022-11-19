const api = require('../../service/auth_axios');


export const profileDetail= ()=> api.get('/user/profile');
