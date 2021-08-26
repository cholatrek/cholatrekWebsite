var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var Appointment = require('../model/appointment')


router.post('/appointment', (req,res)=>{
    // console.log(req.body.contactName)
    // res.send('i can go anywhere');

     


    const output = `
        <p> Hello Cholatrek Admin, you have just received a form input from a new person seeking an appointment with you </p>
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
                <td>${ req.body.appointmentType}<td>
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
        subject: "CONTACT FORM ✔", // Subject line
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

        req.flash('message', "Successful! We'd contact you soon")
        res.redirect('/services')
      
    
    }
    

   
)



router.post('/appointment2', (req,res)=>{
    // console.log(req.body.contactName)
    // res.send('i can go anywhere');

     


    const output = `
        <p> Hello Cholatrek Admin, you have just received a form input from a new person seeking an appointment with you</p>
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
                <td>${ req.body.appointmentType}<td>
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
        to: "skolly150@gmail.com segun-kola@cholatrek.org info@cholatrek.org", // list of receivers
        subject: "CONTACT FORM ✔", // Subject line
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

        req.flash('message', "Successful! We'd contact you soon..." )
        res.redirect('/')
      
    
    }
    

   
)






module.exports = router;