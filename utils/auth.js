const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cryptPW = async (pw) => {
    const hashedPw = await bcrypt.hash(pw, 10);
    return hashedPw;
};

const assignToken = (userObj, key, expObj) => {
   const token = jwt.sign(userObj, key, expObj);
   return token;
};

const validatePW = async (reqPW, userPW) => {
    const isValid = await bcrypt.compare(reqPW, userPW)
    console.log(isValid);
    return isValid;
}

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};


module.exports = {cryptPW, assignToken, validatePW, verifyToken};