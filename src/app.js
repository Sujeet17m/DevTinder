const express = require("express");

const app = express();



app.use("/helo",(req, res)=> {
    res.send("helloooo")
});

app.use("/test",(req, res)=> {
    res.send("testing")
});

app.use((req, res)=> {
    res.send("chalo")
});

app.listen(7777,()=>{
    console.log("hii");
    
});
