const express = require('express');
const router = express.Router();
const Testimonial = require('../model/Testimonial');
const multer = require('multer');
const path =  require('path');





const storage = multer.diskStorage({
    destination: './public/uploads/testimonial',
    filename:function(req,file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)  );
    }
});


const upload = multer({
    storage: storage
}).fields([

    {
        name: 'testimonialImage',
        
    }
    
]
    

)

router.get('/testimonial', (req,res)=>{
    res.render('Testimonial', {
        title: ' Testimonial',
    })
})


router.post('/testimonial', (req,res)=>{
   
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log( req.files.testimonialImage[0].filename);
            
            const testimonial = new Testimonial({
                name : req.body.name,
                role: req.body.role,
                content:req.body.content, 
                date:req.body.date, 
                testimonialImage:'/uploads/testimonial/' + req.files.testimonialImage[0].filename
            }).save((err,testimonial)=>{
                if(err){ 
                    console.log(err)
                }else{
                    res.redirect('/');
                }
            })

        }
    })
});



router.post('/testEdit/:id', (req,res)=>{

    // console.log(req.params.id)
    let items = {}

    items.title =  req.body.title

                items.name = req.body.name
                items.role = req.body.role
                items.content = req.body.content
                items.date = req.body.date
                
    
    
    console.log(items.title)
    let query  = { _id : req.params.id};
    
   

    Testimonial
        .update(query, items, function(err){

            if(err){

                console.log(err)

            }else{

                res.redirect('/admin/testimonials')
            }
        });

})

//delete a blog post
router.post('/testDelete/:id', (req,res)=>{

Testimonial.findByIdAndRemove({ _id : req.params.id }).then((Testimonial)=>{
    res.redirect('/admin/testimonials')
});

});  




module.exports = router;