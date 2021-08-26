const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();
const Quotation = require('../model/quotation');


const Contact = require('../model/contact')

// coupled alingside nodemailer
router.post('/quotation', (req,res)=>{

    const output = `
    <p> Hello Cholatrek Admin, you have just received a form input from a new member who just registered for the programme </p>
    <h3>The table below shows the contact details</h3>
    
    <table border ="1" cell-padding="2" >
        <tr>
            <td>Date:<td>
            <td>${ req.body.name}<td>
        </tr>
        <tr>
            <td>Full Name:<td>
            <td>${ req.body.email}<td>
        </tr>
        <tr>
            <td>Gender:<td>
            <td>${ req.body.serviceType}<td>
        </tr>
        <tr>
            <td>Full Name:<td>
            <td>${ req.body.message}<td>
    </tr>
       
    </table>

`;

let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@cholatrek.org', // generated ethereal user
      pass: 'Skolly150@' // generated ethereal password
    },

    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let infos =({
       
    from: '"Cholatrek 👻" <info@cholatrek.org>', // sender address
    to: "skolly150@gmail.com segun-kola@cholatrek.org info@cholatrek.org cholatrek@gmail.com", // list of receivers
    subject: "NEW REGISTRATION ✔", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body 
  });


  transporter.sendMail(infos, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    console.log("Message sent: %s", info.messageId);
   
});




    const quotation =  new Quotation({
        name : req.body.name,
        email : req.body.email,
        serviceType : req.body.serviceType,
        message : req.body.message
    }).save((err,quotation)=>{
        if(err){
            console.log(err)
        }else{
            req.flash('message', 'Your request was submitted, we will get in touch with you! ')
            res.redirect('/services')
        }
    })
} );







;

module.exports = router;