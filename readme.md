# backend-auth

## Description

- Backend API server and NoSQL data setup using JWT for user Authentication. 

## Tech Used

- JSON WebToken. 
- dotenv (to protect secret variables). 
- bcryptjs
- mongoose

## Instructions. 

- Clone repo and create a .env file at the root location (BACKEND-AUTH/.env)
- npm install to DL dependencies. 
- update the .env file with the following variables:
```
API_PORT=<Port Number of your choice>
MONGO_URI=<Your MongoDB Atlas DB connection URL> 
```
- - NOTE: See the [MongoDB Docs](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.59728367.316205287.1666741547-1706705617.1649982287&_gac=1.23994056.1666741547.Cj0KCQjwkt6aBhDKARIsAAyeLJ11sorPN1vRz_BsBR8Jhjc7_KoTZCqLAyQQH2uO6rZ76ahUnhcIXVAaAp2KEALw_wcB) for assistance if you've never worked with MongoDB Atlas before. 

- Using system terminal run 'npm run dev'. 