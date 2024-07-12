const jst = require("jsonwebtoken")
const User = require("../model/userModel")

const promisify = require("util").promisify

const isAuthenticated = (req,res,next)=>{
    const token =req.cookies.token
    console.log("token")
    if(!token|| token === null){
        return res.send("Please login")
    }
    //else block
    jwt.verify(token, process.env.secret, async (err,result)=>{
        if(err){
            return res.send("Invalid token")
        }
        else{
            // console.log ("Valid Token ", result)
            const data = await User.findById(result.userId)
            if(!data){
                res.send("Invalid userID in the token")
            }else{
                req.userId = result.userId
                next()
            }
        }
    
    // next()
})
}

module.exports = isAuthenticated