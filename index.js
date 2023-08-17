const express = require('express');
const app=express()
const cors=require("cors")
const PORT=process.env.PORT || 3000
app.use(cors())
app.get('/',(req,resp)=>{
    console.log("get is called");
    resp.send("get is called")
})
app.post('/',(req,resp)=>{
    console.log("post is called");
    resp.send("post is called")
})
app.listen(PORT,()=>{
    console.log("server started")
})