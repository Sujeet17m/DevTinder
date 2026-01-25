const adminAuth = (req, res, next) => {
    console.log("Admin authentication middleware");
    // Simulate admin check

    const token = "xyzadmin";
    const isAdmin = token === "xyzadmin";
    if (!isAdmin) {
        res.status(401).send("Unauthorized: Admins only");
    } else {
        next();
};
};

const userAuth = (req, res, next) => {
    console.log("User authentication middleware");
    // Simulate user check  
    const token = "xyzuser";
    const isUser = token === "xyzuser" || token === "xyzadmin";
    if (!isUser) {
        res.status(401).send("Unauthorized: Users only");
    } else {
        next();
    }   
};

module.exports = { adminAuth, userAuth };