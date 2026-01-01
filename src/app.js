// const express = require("express");
// const app = express();

// app.get("/user", (req, res) => {
//     res.send({ firstName: "sujeet", lastName: "das" });
// });

// app.post("/user", (req, res) => {
//     res.send("User created successfully!");
// });

// app.put("/user", (req, res) => {
//     res.send("User updated successfully!");
// });

// app.delete("/user", (req, res) => {
//     res.send("User deleted successfully!");
// });

// app.listen(7777, () => {
//     console.log("Server is running on port 7777");
// }); 

// const express = require("express");
// const app = express();

// app.use("/user",[(req,res,next) => {
//     console.log("handling req 1");
//     next();
// },
// (req,res,next) => {
//     console.log("handling req 2");
//     next();
// }],
// [(req,res) => {
//     console.log("handling req 3");
//     res.send("User route");
// }]);

// app.listen(7777, () => {
//     console.log("Server is running on port 7777");
// });

// //middleware for admin authentication
// const express = require("express");

// const app = express();

// const { adminAuth} = require("./middlewares/auth");
// const { userAuth } = require("./middlewares/auth");


// app.use("/admin", adminAuth, (req, res) => {
//     res.send("Welcome Admin!");
// });

// app.get("/admin/dashboard", adminAuth, (req, res) => {
//     res.send("Admin Dashboard");
// });

// app.get("/admin/settings", adminAuth, (req, res) => {
//     res.send("Admin Settings");
// });

// app.get("/user", userAuth, (req, res) => {
//     res.send("Welcome User!");
// });

// //error handling middleware
// //error handling using try catch
// app.get("/user/profile", userAuth, (req, res) => {
//     try{
//         // Simulate some operation that throws an error
//         // res.send("User Profile");
//         throw new Error("Simulated error in user profile");
//     } catch (err) {
//         console.error("Error encountered:", err.message);
//         res.status(500).send("Internal Server Error");
        

//     }
// });

// //this line should be at the end of all routes
// app.use("/", (err, req, res, next) => {
//     if(err){
//         console.error("Error encountered:", err.message);
//         res.status(500).send("Internal Server Error");
//     }
    
// });

// app.listen(7777, () => {
//     console.log("Server is running on port 7777");
// });

const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    name: "A B Devilliers",
    email: "ABD@gmail.com",
    password: "secret123"
  });

  try {
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Error registering user: " + err.message);
  }
});


connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected", err);
  });
