const express = require('express');
const router = express.Router();
const Service = require('../model/service');
const path =  require('path');

router.post('/servicesform', (req,res)=>{
    const service = new Service({
        Name : req.body.Name,
        Email : req.body.Email,
        servicetype : req.body.servicetype,
        Message : req.body.Message
    }).save((err,service)=>{
        if(err){
            console.log(err)
        }else{
            req.flash('message', "Your request have been sent!")
            res.redirect('/services')
        }
        
    });
});

module.exports = router;