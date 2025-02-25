const express = require("express");
const cors = require("cors");
const db_connection = require("./db/db_connection");
const contactRequest = require("./models/contactModel");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

db_connection();

app.post("/contactus", (request, response) => {
    const {name, email, message} = request.body;
    try {
        const newContactRequest = new contactRequest({name, email, message});
        response.status(200).json({message: "Submitted Successfully!"});
        newContactRequest.save();
    }
    catch(err){
        response.status(500).json({message: err});
    }
})

app.listen(port, () => {
    console.log("Server started successfully!");
})

