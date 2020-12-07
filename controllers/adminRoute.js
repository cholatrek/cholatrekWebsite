const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');
const multer = require('multer');
const path =  require('path');
const Quotation = require('../model/quotation');
const Testimonial = require('../model/Testimonial');
const Portfolio = require('../model/portfolio')
const Institute = require('../model/institute')
const Registration = require('../model/registration') 

router.get('/blogPost', (req,res)=>{
    res.render('blogUpload', {
        title: ' Blog Upload',
        message: req.flash('message')
    })
})


//create an admin blog
router.get('/blogDisplay', (req,res)=>{
   Blog
    .find({})
    .sort({_id : -1})
    .exec((err,blog)=>{
        res.render('adminBlog', {
            title: 'Blog Display',
            blog:blog
        })
    })
    
})


router.get('/',(req,res)=>{
    res.render('admin/MyAdmin', {
        title: 'Admin Panel',
        user: req.user,
        message:req.flash('message')
    })
});


router.get('/quotation', (req,res)=>{

    Quotation
            .find({})
            .sort({_id : -1})
            .exec((err, quotation)=>{
                res.render('admin/quotation', {
                    title: 'Admin quotation',
                    quotation:quotation
                });
            })
});


router.get('/registration', (req,res)=>{
    Registration
                .find({})
                .sort({_id : -1})
                .exec((err,registration)=>{
                    res.render('admin/registration', {
                        title: 'Admin Registration',
                        registration:registration
                    })
                })
   
});

router.get('/blog', (req,res)=>{

    Blog
        .find({})
        .sort({_id : -1 })
        .exec((err,blog)=>{
            res.render('admin/blog', {
                title: 'Admin Blog',
                blogs:blog
            })
        })

  
});

router.get('/testimonials', (req,res)=>{
    Testimonial
            .find({})
            .sort({_id : -1})
            .exec((err,testimonial)=>{
                res.render('admin/testimonials', {
                    title: 'Admin Testimonials',
                    testimonial:testimonial
                })
            })
   
});


router.get('/institute', (req,res)=>{
    Institute
            .find({})
            .sort({_id:-1})
            .exec((err,institute)=>{
                res.render('admin/institute', {
                    title: 'Admin Institute',
                    institute:institute
                })
            })
   
});

router.get('/portfolio', (req,res)=>{
    Portfolio
            .find({})
            .sort({_id : -1})
            .exec((err, portfolio)=>{
                res.render('admin/portfolio', {
                    title: 'Admin Portfolio',
                    portfolio:portfolio
                })
            })
    
})



router.get('/Testimonial',(req,res)=>{
    res.render('testimonial', {
        title: 'Testimonial Page',
      
    })
})









module.exports = router;