const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();

const Registration = require('../model/registration')


router.post('/registration', (req,res)=>{

    const output = `
    <p> Hello Cholatrek Admin, you have just received a form input from a new member who just registered for a programme </p>
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
            <td>${ req.body.phone}<td>
        </tr>
        <tr>
            <td>Full Name:<td>
            <td>${ req.body.means}<td>
        </tr>
        <tr>
            <td>Full Name:<td>
            <td>${ req.body.skill}<td>
        </tr>
        <tr>
            <td>Full Name:<td>
            <td>${ req.body.aspiration}<td>
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
    subject: "NEW QUOTATION ✔", // Subject line
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




    const registration =  new Registration({

        name : req.body.name,
        phone : req.body.phone,
        email : req.body.email,
        skill : req.body.skill,
        means : req.body.means,
        aspiration:req.aspiration
        
  
    }).save((err,registration)=>{
        if(err){
            console.log(err)
        }else{
            req.flash('message', 'Your request was submitted, we will get in touch with you! ')
            res.redirect('/registration')
        }
    })
} );

module.exports = router;