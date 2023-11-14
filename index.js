// backend/index.js

const express = require("express");
const mongoose = require("mongoose");
const petRoute = require("./controller/petRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.uaws1k5.mongodb.net/animaldb");
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/petRoute", petRoute);

app.listen(4000, () => {
    console.log("Server started at 4000");
});
