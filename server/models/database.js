const mongoose =  require("mongoose");

mongoose.connect();

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("connected");
});

