# backend-auth

## Description

- Backend API server and NoSQL data setup using JWT for user Authentication. 

## Tech Used

![logo](./assets/pics/icons8-json-web-token-48.png)
- JSON WebToken.
   - What is this? 
   - - In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned.  In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are: Header, Payload and Signature...This application uses JWT for Authorization purposes.  To learn more you can check out the docs [here](https://jwt.io/introduction).

![logo](./assets/pics/dot_env.png)
- dotenv (to protect secret variables). 
    - What is this? 
    - - It's a npm that helps keep sensitive environment variables secure by allowing them to be stored in a .env file which can then be called upon throughout the application without actually being "part" of the code.  To learn more you can check out the docs [here](https://www.npmjs.com/package/dotenv).

![logo](./assets/pics/icons8-encrypt-50.png)
- bcryptjs
    - What is this?
    - - An npm package that is used to encrypt passwords so that they are not visible outside the initial payload sent in by the client (IE: They are encypted in the database as well as the server responses).  Feel free to see the docs [here](https://www.npmjs.com/package/bcryptjs).

![mongoose-logo](./assets/pics/icons8-mongoose-48.png)
- mongoose
    - What is this? 
    - - An Object modeler for node.js to be used in conjunction with a MongoDB database (which is what this application utilizes).  In short; it just makes working with MongoDB easier. Again, feel free to check out their docs [here](https://mongoosejs.com/docs/guide.html).

![mongodb-logo](./assets/pics/icons8-mongodb-48.png)
- MongoDB (Specifically Atlas)
    - What is this?
    - - MongoDB Atlas is a great tool that essentially hosts our data in the cloud.  I've used it for many projects and I find it very easy to work with; check out the docs [here](https://www.mongodb.com/docs/atlas/getting-started/).

## Instructions. 

- Clone repo and create a .env file at the root location (BACKEND-AUTH/.env)
- npm install to DL dependencies. 
- update the .env file with the following variables:
```
API_PORT=<Port Number of your choice>
MONGO_URI=<Your MongoDB Atlas DB connection URL> 
TOKEN_KEY=<A random string of your choice>
```
- - NOTE: See the [MongoDB Docs](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.59728367.316205287.1666741547-1706705617.1649982287&_gac=1.23994056.1666741547.Cj0KCQjwkt6aBhDKARIsAAyeLJ11sorPN1vRz_BsBR8Jhjc7_KoTZCqLAyQQH2uO6rZ76ahUnhcIXVAaAp2KEALw_wcB) for assistance if you've never worked with MongoDB Atlas before. 

- Using system terminal run 'npm run dev'. 

## Some Cred
Tech Icons Courtesy of <a target="_blank" href="https://icons8.com">Icons8</a>