
const mongoose =require("mongoose");
const Schema = new mongoose.Schema({
    post:{
        // refer the id in another id 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //this is the refernce the post
    },
    user:{
        type:String,
        required:true,
    }
})

module.exports= mongoose.model("Like",Schema);