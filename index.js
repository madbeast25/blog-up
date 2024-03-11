import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
var d=new Date();
var time=d.getHours();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var Heading="";
var full_post="";

function helper(req,res,next){
      Heading=req.body["Heading"];
      full_post=req.body["content"];
      next();
}

app.use(helper);


app.get("/",(req,res)=>{
   res.render("home.ejs",{greet:time});
});

app.get("/post",(req,res)=>{
   res.render("post.ejs");
});

app.post("/posts",(req,res)=>{
   
    res.render("posts.ejs",{
      Title:Heading,
      post:full_post,
    });
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

