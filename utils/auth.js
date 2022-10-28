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


module.exports = {cryptPW, assignToken};