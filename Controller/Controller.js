const Post=require("../model/post")
// import all modules
const Comment =require("../model/comment")
const like =require("../model/Like");

const HomePage=async(req,res)=>{
    res.send("home page")
}
const DummyPage=(req,res)=>{
    res.send("This is my dummy page:");
}


const CreateComments=async (req,res)=>{


    // this is second method in 
    // in this method we useing that create it
    let {post,body,user}=req.body;
    let comment=new Comment({
        post,body,user
    });

    const savedComment =await comment.save();

}





module.exports={
    HomePage,
    DummyPage
}