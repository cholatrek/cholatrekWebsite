const express = require('express');
const router = express.Router();
const Testimonial = require('../model/Testimonial');
const Portfolio = require('../model/portfolio')
const Blog = require('../model/blog');




router.get('/', (req,res)=>{

    Portfolio
            .find({})
            .sort({_id : -1})
            .exec((err,portfolio)=>{

                Blog
                    .find({})
                    .sort({_id : -1})
                    .exec((err,blog)=>{
                        res.render('index', {
                            title : 'Cholatrek | Homepage ',
                            portfolio:portfolio,
                            blog:blog,
                            message:req.flash('message')
                        })
                    })
               
            })
   
})


router.get('/about', (req,res)=>{
    res.render('about', {
        title: 'Cholatrek|About',

    })
})

router.get('/services', (req,res)=>{
    Testimonial
            .find({})
            .sort({_id : -1})
            .exec((err, testimonial)=>{
                res.render('services',  {
                    title: 'Cholatrek|Services',
                    message:req.flash('message'),
                    testimonial:testimonial
                    
                })
            })
    
})


router.get('/faqs', (req,res)=>{
    res.render('faqs',  {
        title: 'Cholatrek | Faq '
    })
});



router.get('/blog', (req,res)=>{
    Blog
        .find({})
        .sort({_id : 0-1})
        .exec((err,blog)=>{
            res.render('blog', {
                title: 'Cholatrek | Blog ',
                blog: blog
            })
        })
 
});


router.get('/single-case', (req,res)=>{
    res.render('single-cases', {
         title: ' Single Page',
        
    })
})

router.get('/case-studies', (req,res)=>{
    Portfolio
            .find({}) 
            .sort({_id : -1})
            .exec((err,portfolio)=>{
                res.render('case-studies', {
                    title: 'Cholatrek | case-studies ',
                    portfolio:portfolio 
                })  
            })
   
})

router.get('/institute', (req,res)=>{
    res.render('institute', {
        title: 'Cholatrek | Institute ',
        message : req.flash(('message'))
    })
})

router.get('/registration', (req,res)=>{
    res.render('registration', {
        title: 'Cholatrek | Registration ',
        message : req.flash(('message'))
    })
})



router.get('/contact', (req,res)=>{
    res.render('contact-us', {
        title: 'Cholatrek | Contact Us '
    })
})



module.exports = router;