const mongoose =require("mongoose");
const Schema = new mongoose.Schema({
    title:{
      
        type:String,
       required:true
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    },
    likes:[{
        // store a another schema it in the from
        types:mongoose.Schema.Types.ObjectId,
                // comment write in the see it what you exported it in the schema of like
        ref:"like"
    }],
    comments:[{
        types:mongoose.Schema.Types.ObjectId,
        // comment write in the see it what you exported it in the schema of comments
        ref:"comment"
    }]
})

module.exports= mongoose.model("Post",Schema);