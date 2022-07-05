const express=require('express');
const greetingroute= express.Router();
const nodemailer = require('nodemailer');

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
    console.log("Greeting Route started");

    var Item={
    sender:req.body.sender,
    recipient:req.body.recipient,
    email:req.body.email
    }
    console.log(Item);
    res.render("greeting" ,
    {
    
        recipient:Item.recipient
    })
    var mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'diwaliwishes.2022@gmail.com',
            pass: 'qavgggxdriwfrzve'
        }
    });
    //qavgggxdriwfrzve
    let mailDetails = {
        from: 'xyz@gmail.com',
        to: Item.email,
        subject: 'Happy Diwali 2022',
        text: 'Hello '+Item.recipient+','+'Lets celebrate the festival in the true sense by spreading joy and light up the world of others. Have a happy, safe and blessed Diwali! May you get prosperity and fortune on this auspicious and pious occasion of Diwali. Wishing the goodness of this festive season dwells within you and stays throughout the year. -----'+Item.sender
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
  });




module.exports=greetingroute;