const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const db_connect = () => {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("DB Connected.")
    })
    .catch((error) => {
        console.log("***DB CONNECTION FAILED***" + "//" + " => " + error);
    })
};

module.exports = db_connect();