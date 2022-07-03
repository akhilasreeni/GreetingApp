const express = require('express');
const app = new express; 

const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set("views", "./src/views");
app.get('/',function(req,res){
    res.render('landing',{title:"Greeting App"});
})

app.listen(port,()=>{
    console.log("Server running on port 3000")
});