var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var Contact = require('../model/contact')


router.post('/contact', (req,res)=>{
    // console.log(req.body.contactName)
    // res.send('i can go anywhere');

     


    const output = `
        <p> Hello Cholatrek Admin, you have just received a form input from someone who wants to contact you </p>
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
                <td>${ req.body.subject}<td>
            </tr>
            <tr>
                <td>BirthDate:<td>
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
          pass: 'Kollybright150@' // generated ethereal password
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

    const contact = new Contact({
      

        name : req.body.name,

        email : req.body.email,

        subject : req.body.subject,

        message : req.body.message

    }).save((err,contact)=>{
        if(err){
            console.log('error')
        }else{
            res.redirect('/contact')
        }

    });
    
      
    
    }
    

   
)





module.exports = router;