const mongoose = require("mongoose");

const db_connection = async() => {
    try {
    await mongoose.connect("mongodb://localhost:27017/optimus_arts");
    console.log("MongoDB connected successfully!");
}
catch(err){
    console.log(err)
}
}

module.exports = db_connection;
