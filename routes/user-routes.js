const User = require("../models/user");
const {cryptPW, assignToken} = require("../utils/auth");

const user_routes = (server) => {
    server.post('/register', async (req, res) => {
        try {
            // Get user input
            const { userName, email, password } = req.body;
        
            // Validate user input
            if (!(email && password && userName)) {
              res.status(400).send("Email, password and username are required.");
            }
        
            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await User.findOne({ email });
        
            if (oldUser) {
              return res.status(409).send("Email Already Exists; Please Login.");
            }
        
            //Encrypt user password
            encryptedPassword = await cryptPW(password);
            // Create user in our database
            const user = await User.create({
              userName,
              email: email.toLowerCase(), // sanitize: convert email to lowercase
              password: encryptedPassword,
            });

            // create and save user token
            user.token = assignToken({user_id: user._id, email }, process.env.TOKEN_KEY, {expiresIn: "2h"});
        
            // return new user
            res.status(201).json(user);
          } catch (err) {
            console.log(err);
          }
    });

    server.post("/login", async (req, res) => {
        //login logic here. 
    })
};

module.exports = user_routes;