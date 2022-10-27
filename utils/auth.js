const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cryptPW = async (pw) => {
    const hashedPw = await bcrypt.hash(pw, 10);
    return hashedPw;
};


module.exports = cryptPW