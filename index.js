const express =require ("express");
const App =express();
const route=require("./Router/Router");
const mongoose =require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors")
App.use(cors());
// parse application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
App.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/Blog")
.then(()=>{
    console.log("mongoose is working good");
})
.catch(()=>{
    console.log("mongoose is not working");
})





App.use("/post",route)

App.listen(8009,()=>{
    console.log("This is port in 8009 in live")
})