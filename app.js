const express = require('express');
const nodemailer = require('nodemailer');
const app = new express; 

const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set("views", "./src/views");

const previewroute=require('./src/routes/previewroute');
const greetingroute= require('./src/routes/greetingroute');

app.use(express.urlencoded({extended:true}));
//app.use('/public', express.static('public'));
app.use("/preview", previewroute);
app.use("/greeting",greetingroute);


app.get('/',function(req,res){
    res.render('landing',{title:"Greeting App"});
})

app.listen(port,()=>{
    console.log("Server running on port")
});