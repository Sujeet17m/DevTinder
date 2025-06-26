const express = require("express");

const app = express();

app.use("/test",(req,res)=> {
    res.send("hello from the server");
});

app.use("/hello",(req,res)=> {
    res.send("hello heloo helllo");
});
app.listen(3001 , () => {
    console.log("server is listening");
    
});
