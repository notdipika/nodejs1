const express = require("express")
const app = express()

app.set('view engine','ejs')

app.get("/",(req,res)=>{ //() should be in order req,res while the names can be changed.
    console.log(req)
    res.send("<h1>huhu this is home page </h1>")  //'<h1>' is tag while '<h1>Hello World </h1>' is element
})

app.get("/about",(req,res)=>{ 
    const name= "Dipika"
    res.render("about.ejs", {name})  //{name : name}
})

app.get("/contact",(req,res)=>{
    const contact= "Contact"
    res.render("contact.ejs", {contact})
})


app.listen(3000, ()=>{
    console.log("Nodejs project has started at port" + 3000)
})