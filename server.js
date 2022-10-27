require("dotenv").config();
const http = require("http");
const express = require('express');
const app = express();
const user_routes = require('./routes/user-routes');

//Connect to the Database. 
require("./config/dbconnect");

app.use(express.json());

const server = http.createServer(app);

//giving the server access to the route logic.  
user_routes(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
    console.log(`Server Running on PORT: ${port}`);
});
