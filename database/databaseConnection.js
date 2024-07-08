const mongoose = require("mongoose") //cjs
//import 'mongoose' -- ejs

async function connectToDb(){  //function connectToDb =() =>{ 
    await mongoose.connect("mongodb+srv://chaudharydipika17:Esther.13@cluster0.nfn4acw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("connected to db")
}

module.exports = connectToDb;

//module.exports = mongoose -- cjs
//export default mongoose -- ejs