const express = require("express");

const app = express();



app.use("/hello",(req, res)=> {
    res.send("helloooo")
});

app.use("/test",(req, res)=> {
    res.send("testing")
});

// app.use("/",(req, res)=> {
//     res.send("hii from every router")
// });

 
app.use((req, res)=> {
    res.send("chalo")
});

app.listen(7777,()=>{
    console.log("listening from server");
    
});
