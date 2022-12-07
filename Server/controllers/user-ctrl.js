const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
const { SendCookie } = require("./Utils/send-cookie");
dotenv.config();
const config = process.env;

const validateSignUp = (req) => {
  if (req.body.userName) {
    console.log(req.body);
    return true;
  }
  return false;
};

const validateSignIn = async (payload) => {
  console.log(">>>>validateSignIn");
  try {
    // Get user input
    const { userName, password } = payload;
    console.log("ValidateSignIn");
    console.log(payload, userName, password);

    // Validate user input
    if (!(userName && password)) {
      return false;
    }
    // Validate if user exist in our database
    const user = await User.findOne({ userName });
    console.log(user.password, password);
    if (user && user.password === password) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

const generateNewSignInToken = async ({ userName, password }) => {
  console.log(">>>>generateNewSignInToken");
  console.log(userName);
  const user = await User.findOne({ userName });
  const token = jwt.sign({ user_id: user._id, userName }, config.TOKEN_KEY, {
    expiresIn: "2h",
  });
  console.log("token", token);

  // save user token
  user.token = token;
  console.log(user);
  user.save();

  return token;
};

const generateRefreshToken = async ({ userName }) => {
  const token = jwt.sign({ userName }, config.TOKEN_KEY, {
    expiresIn: "2h",
  });

  return token;
};

function createUser(req, res) {
  console.log("createUser -> hit");

  const body = req.body;

  if (!validateSignUp(req)) {
    return res.status(400).json({
      success: false,
      error: "You must provide a User",
    });
  }

  const user = new User();
  user.name = "Test_Delete";
  user.userName = req.body.userName;
  user.email = req.body.email;
  user.dateOfBirth = req.body.dateofBirth;
  user.phoneNumber = req.body.phoneNumber;
  user.password = req.body.password;

  console.log("this is user saved", user);

  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: "User created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "User not created!",
      });
    });
}

async function signInUser(req, res) {
  try {
    console.log(">>>>signInUser");

    if (!validateSignIn(req.body)) throw "invalid";
    const refreshToken = await generateRefreshToken(req.body.userName);
    const privatetoken = await generateNewSignInToken(req.body);
    SendCookie({res:res,user:req.body.userName,statusCode:200,refreshToken:refreshToken,privatetoken:privatetoken});
    // return res.status(201).json({
    //   success: true,
    //   userName: req.body.userName,
    //   token: await generateNewSignInToken(req.body),
    // });



  } catch (ex) {
    return res.status(400).send("Invalid Credentials");
  }
}

async function UserProfile(req, res) {
  console.log("UserProfile>>>>");
  console.log({ userName: req.userName });
  const user = await User.findOne({ userName: req.userName });
  return res.status(201).json({
    user,
  });
}

module.exports = { createUser, signInUser, UserProfile };
