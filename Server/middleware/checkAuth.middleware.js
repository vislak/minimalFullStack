const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
    try {

        console.log(">>>AuthenticateMiddleware");
        const bearerHeader = req.header("authorization");
        console.log({ bearerHeader });

        let parts = bearerHeader.split(' ');
        if (parts.length !== 2) throw 'error';
        let scheme = parts[0];
        let credentials = parts[1];


        if (/^Bearer$/i.test(scheme)) {
            token = credentials;
            //verify token

            const decrypt = jwt.verify(token, process.env.TOKEN_KEY, { complete: true })
            console.log(decrypt,req.body);

            req.userName= decrypt.payload.userName;
            if (!decrypt?.payload) return res.status(400).json("error")
        }


        return next();


    } catch (err) {
      return  res.status(400).send({
            error: "auth failed, check auth-  token222"
        });
    }
};