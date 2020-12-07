const express = require('express');
const router =  express.Router();
const multer = require('multer')
const path = require('path')
const Portfolio  = require('../model/portfolio')
const Testimonial = require('../model/Testimonial')


const storage = multer.diskStorage({
    destination: './public/uploads/portfolio',
    filename:function(req,file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)  );
    }
})

const upload = multer({
    storage : storage
}).fields([
    {name: 'portfolioImage'},
    {name: 'portfolioVideo'},

]
    
)



router.post('/portfolio', (req,res,next)=>{
    // upload2.single('myImage2')
    //  res.send(req.file.filename);
 
    upload(req,res,(err)=>{
        if(err){
            res.send(err);
        }else{
            console.log(req.files)

            const portfolio = new Portfolio({
                
                title: req.body.title,
                category : req.body.category,
                date : req.body.date,
                implementation: req.body.implementation,
                design : req.body.design,
                testing : req.body.testing,
                overview: req.body.overview,
                author : req.body.author,
                position:req.body.position,
                analysis : req.body.analysis,
                excerpt : req.body.excerpt,
                portfolioImage: req.files.portfolioImage[0 ].destination + '/' +  req.files.portfolioImage[0].filename ,
                portfolioVideo : req.files.portfolioVideo[0].destination + '/' +  req.files.portfolioVideo[0].filename
            }).save((err,portfolio)=>{
                if(err) return console.error(err);
                console.log('very good');
                res.redirect('/admin/portfolio')
            });
        }
    })
    
});




//get single blog update
router.get('/single-case/:id', (req,res)=>{


    Portfolio
        .findOne({ _id : req.params.id})
        .exec((err,portfolio)=>{

            Testimonial
                    .find({})
                    .sort({_id:-1})
                    .exec((err,testimonial)=>{
                        res.render('single-cases', {
                            title: 'Cholatrek | Blog',
                            portfolio:portfolio,
                            testimonial: testimonial
                           
                        })
                    })

                       
                    })
     
                })



                router.post('/portfolioEdit/:id', (req,res)=>{

                    // console.log(req.params.sermonid)
                    let items = {}
                
                    items.title =  req.body.title
                
                    items.title = req.body.title,
                    items.category = req.body.category,
                    items.date = req.body.date,
                    items.implementation = req.body.implementation,
                    items.design = req.body.design,
                    items.testing = req.body.testing,
                    items.overview = req.body.overview,
                    items.author = req.body.author,
                    items.position = req.body.position,
                    items.analysis = req.body.analysis,
                    items.excerpt = req.body.excerpt,
                                
                    
                    
                    console.log(items.title)
                    let query  = { _id : req.params.id};
                    
                   
                
                    Portfolio
                        .update(query, items, function(err){
                
                            if(err){
                
                                console.log(err)
                
                            }else{
                
                                res.redirect('/admin/portfolio')
                            }
                        });
                
                })
                
                //delete a blog post
                router.post('/portfolioDelete/:id', (req,res)=>{
                
                Portfolio.findByIdAndRemove({ _id : req.params.id }).then((Portfolio)=>{
                    res.redirect('/admin/portfolio')
                });
                
                });  
                


module.exports= router