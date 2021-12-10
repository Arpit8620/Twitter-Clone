module.exports.isLoggedIn = (req ,res , next)=>{
    if(!req.isAuthenticated()){
        console.log("login First");
        // res.send("Login first");
    }
    next();
}