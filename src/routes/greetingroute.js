const express=require('express');
const greetingroute= express.Router();
//var nodemailer = require('nodemailer');

greetingroute.get('/' ,function(req,res)
{
    res.render('greeting',{
        Uname:""
    }
)
})

greetingroute.get('/landing' ,function(req,res)
{
    res.render('landing')
})

greetingroute.post("/", function(req,res){
    console.log("adnbzbzjkbks");

    var Item={
    recipient:req.body.recipient,
    email:req.body.email
    }
    console.log(Item);
    res.render("greeting" ,
    {
    
        recipient:Item.recipient
    })
  });

module.exports=greetingroute;