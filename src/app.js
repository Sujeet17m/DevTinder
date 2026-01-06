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
const bcrypt = require("bcryptjs");
const validator = require("validator");

const app = express();

app.use(express.json());



// User registration route dynamic implementation
app.post("/signup", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Error registering user: " + err.message);
  }
});



app.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email: email});
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(isPasswordValid) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid password");
    }
  }
  catch (err) {
    res.status(500).send("Error logging in: " + err.message);
  }
  
});

// app.get("/user" , async (req, res) => {
//   const email = req.body.email;
//   try {
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       res.status(404).send("User not found"); 
//     } else {
//       res.status(200).json(user);
//     }
//   } catch (err) {
//     res.status(500).send("Error fetching user: " + err.message);
//   }
// });

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Error fetching users: " + err.message);
  }
});

app.get("/set-cookie", async (req, res) => {
  try {
    res.cookie("dummycookie", "sujeet-history")

    res.status(200).send("Cookie received: " + cookie);
    
  } catch (error) {
    
    res.status(500).send("Error fetching cookie: " + error.message);
  }
});

app.delete("/user", async (req, res)=>{
  const userId = req.body._id;
  try {
    const user = await User.findByIdAndDelete(userId);
    if(!user){
      res.status(404).send("User not found");
    } else {
      res.status(200).send("User deleted successfully");
    }
    res.status(200).send("User deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting user: " + err.message);
  } 
});

// app.patch("/user", async (req, res) => {
//   const { _id, ...updatedData } = req.body;

//   try {
//     const user = await User.findByIdAndUpdate(
//       _id,
//       updatedData,
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const updatedData = req.body;
  try {
    const user = await User.findByIdAndUpdate( userId , updatedData, { new: true, runValidators: true });
    console.log(user);
    res.status(200).send("User updated successfully");

    
  } catch (err) {
    res.status(500).send("Error updating user: " + err.message);
  }
});




app.delete("/feed", async (req, res)=>{
  try {
    const result = await User.deleteOne({_id: req.body._id});
    if(result.length === 0){
      res.status(404).send("User not found");
    } else {
      // res.status(200).send("User deleted successfully");
      //to avoid duplicate response error
      return res.status(200).send("User deleted successfully");

    }
  } catch (err) {
    res.status(500).send("Error deleting user: " + err.message);
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
