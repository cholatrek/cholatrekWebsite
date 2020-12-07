const express = require('express');
const router = express.Router();
const Blog = require('../model/blog');
const multer = require('multer');
const path =  require('path');



const storage = multer.diskStorage({
    destination: './public/uploads/blog',
    filename:function(req,file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)  );
    }
});

const upload = multer({
    storage : storage
}).fields([

    { name: 'blogImage' }
    

]
    
)



//get blog post
router.get('/',(req,res)=>{
    Blog
    .find({})
    .exec((err,blog)=>{
        res.render('blog', {
            title: 'Blog Details',
            blog:blog
        })
    })
});


//create a blog post

router.post('/blogPost', (req,res,next)=>{
    // upload2.single('myImage2')
    //  res.send(req.file.filename);
    
   
    upload(req,res,(err)=>{
       
        if(err){
            res.send(err);
        }else{
            // console.log(req.files.blogImage[0].destination);
           
            console.log(req.files)
            console.log(req.files.blogImage[0].destination + '/' +  req.files.blogImage[0].filename)


            const blog = new Blog({
                title: req.body.title,
                author : req.body.author,
                date : req.body.date,
                category : req.body.category,
                content: req.body.content,
                imgUrl : req.files.blogImage[0].destination + '/' +  req.files.blogImage[0].filename
            }).save((err,blogger)=>{
                if(err) return console.error(err);
                console.log('very good')
                res.redirect('/admin/blog')
                
            });
        }
    })
    
});





//get single blog update
router.get('/:id', (req,res)=>{
    Blog
        .findOne({ _id : req.params.id})
        .exec((err,blog)=>{

            Blog
                .find({})
                .sort({_id:-1})
                .exec((err,blogList)=>{
                    if(err){
                        console.log(err)
                    }else{
                        res.render('blog-single', {
                            title: 'Cholatrek | Blog',
                            blog:blog,
                            blogList:blogList
                        })
                    }
                })
          
            
        })
})


// router.get('/category/:category', (req,res)=>{
   

//             Blog
//                 .find({category : req.params.category})
//                 .exec((err,blog)=>{
//                     if(err){
//                         console.log(err)
//                     }else{
//                         res.render('categories', {
//                             title: 'Cholatrek | Blog',
//                             blog:blog,
                            
//                         })
//                     }
//                 })
          
            
//         })


router.get('/category/leadership', (req,res)=>{
    Blog
        .find({ category: 'leadership' })
        .sort({_id : -1 })
        .exec((err,blog)=>{
            res.render('categories', {
              title:' Cholatrek Blog | Leadership'  ,
              blog:blog,
              category:'leadership'
            })
        })
})


router.get('/category/motivation', (req,res)=>{
    Blog
        .find({ category: 'motivation' })
        .sort({_id : -1 })
        .exec((err,blog)=>{
            res.render('categories', {
              title:' Cholatrek Blog | Motivational'  ,
              blog:blog,
              category:'Motivational'
            }) 
        })  
}) 
  


router.get('/category/design', (req,res)=>{
    Blog
        .find({ category: 'design' })
        .sort({_id : -1 })
        .exec((err,blog)=>{
            res.render('categories', {
              title:' Cholatrek Blog | Design'  ,
              blog:blog,
              category:'Design'
            })
        })
})

router.get('/category/techupdates', (req,res)=>{
    Blog
        .find({ category: 'tech' })
        .sort({_id : -1 })
        .exec((err,blog)=>{
            res.render('categories', {
              title:' Cholatrek Blog | Tech Updates'  ,
              blog:blog,
              category: 'Tech Updates'
            })
        })
})




//edit a blog post
router.post('/blogEdit/:id', (req,res)=>{

    // console.log(req.params.id)
    let items = {}

    items.title =  req.body.title

                items.title = req.body.title
                items.author = req.body.author
                items.date = req.body.date
                items.category = req.body.category
                items.content = req.body.content
    
    
    console.log(items.title)
    let query  = { _id : req.params.id};
    
   

    Blog
        .update(query, items, function(err){

            if(err){

                console.log(err)

            }else{

                res.redirect('/admin/blog')
            }
        });

})

//delete a blog post
router.post('/blogDelete/:id', (req,res)=>{

Blog.findByIdAndRemove({ _id : req.params.id }).then((Blog)=>{
    res.redirect('/admin/blog')
});

});  






module.exports = router;