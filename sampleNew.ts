import express from "express";

const app=express();

app.get('/',(req:express.Request,res:express.Response)=>{
   res.send("Hello World");
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})