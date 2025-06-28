const express = require("express");

const app = express();



// app.use("/hello",(req, res)=> {
//     res.send("helloooo")
// });

// app.get(/.*fly$/, (req, res) => {
//     res.send({ firstName: "sujeet", lastName: "das" });
// });

// app.get("/user/:userId/:name/:password", (req, res) => {
//     console.log(req.params);
//     res.send({ firstName: "sujeet", lastName: "das" });
// });

// app.get("/user",(req,res) => {
//     res.send({firstName : "sujeet", lastName : "das"})
// });

// app.post("/user", (req , res)=> {
//     res.send("saved in db successfully!")
// });

// app.patch("/user", (req , res)=> {
//     res.send("patched succesfully")
// });

// app.delete("/user", (req , res)=> {
//     res.send("deleted successfully!")
// });

// app.options("/user",(req,res)=>{
//     res.send("sended succesfully")
// });

// app.head("/user",(req,res)=>{
//     res.send("headed done")
// });

// app.use("/test",(req, res)=> {
//     res.send("testing")
// });

// app.use("/",(req, res)=> {
//     res.send("hii from every router")
// });

app.use(
    "/user",
    (req,res,next) => {
        console.log("response 1");
        // res.send("handling the route 1");
        next();
    },
    (req,res, next)=>{
        console.log("response 2");
        // res.send("handling route handler 2");
        next();
    },
    [
        (req, res , next) =>{
            console.log("response 3");
            // res.send("handling response 3");
            next();
        }
    ],
    (req,res,next)=>{
        console.log("response 4");
        res.send("response 4");
        next();
        
    }
);

 
// app.use((req, res)=> {
//     res.send("chalo")
// });

app.listen(7777,()=>{
    console.log("listening from server");
    
});
