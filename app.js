const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server is Up and Running")
})
app.get("/",(req,res)=>{
    res.sendFile("E:/Youssef/WEB/FullStackWithReactHongKong/conFusion/confusion/index.html")
})