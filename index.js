const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true});
const db = mongoose.connection;

db.on("open",()=>(
    console.log("db is connected")
));



let port = 5000;

app.listen(port, () => {
    console.log(`server lisenting on port:${port}`);
})