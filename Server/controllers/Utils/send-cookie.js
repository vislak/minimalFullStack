
const SendCookie = ({res,user,privatetoken,statusCode=200,refreshToken})=>{

   console.log({user,privatetoken,statusCode,refreshToken});

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: false
    }

    res.status(statusCode).cookie('token', privatetoken, options).json({
        
        user,refreshToken
    });

}

module.exports = {SendCookie};