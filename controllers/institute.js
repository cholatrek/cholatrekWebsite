const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();
const Institute = require('../model/institute');


router.post('/institute', (req,res)=>{

    const output = `
    <p> Hello Cholatrek Admin, you have just received a form input from a new member registering at institute </p>
    <h3>The table below shows the contact details</h3>
    
    <table border ="1" cell-padding="2" >
        <tr>
            <td> User Name:<td>
            <td>${ req.body.fname}<td>
        </tr>
        <tr>
            <td> User Date:<td>
            <td>${ req.body.lname}<td>
        </tr>
        <tr>
            <td>User Email:<td>
            <td>${ req.body.email}<td>
        </tr>
        <tr>
            <td>phone Number:<td>
            <td>${ req.body.phone}<td>
        </tr>
        <tr>
            <td>Course Registered:<td>
            <td>${ req.body.course}<td>
        </tr>
        <tr>
            <td>Currently have a skill?:<td>
            <td>${ req.body.skill}<td>
        </tr>
        <tr>
            <td>Why Enrol?:<td>
            <td>${ req.body.enrolment}<td>
        </tr>
       
    </table>

`;

let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@cholatrek.org', // generated ethereal user
      pass: 'Kollybright150@' // generated ethereal password
    },

    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let infos =({
       
    from: '"Cholatrek 👻" <info@cholatrek.org>', // sender address
    to: "skolly150@gmail.com segun-kola@cholatrek.org info@cholatrek.org", // list of receivers
    subject: "NEW COURSE REGISTRATION ✔", // Subject line
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




    const institute =  new Institute({

        fname : req.body.fname,
        lname:  req.body.lname,
        phone : req.body.phone,
        email : req.body.email,
        skill : req.body.skill,
        course:req.body.course,
        reason:req.body.reason

        
  
    }).save((err,institute)=>{
        if(err){
            console.log(err)
        }else{
            req.flash('message', 'Registration Successful, We would get in touch with you ')
            res.redirect('/institute')
        }
    })
} );

module.exports = router;