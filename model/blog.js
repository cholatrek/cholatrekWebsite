const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const blogSchema = new Schema({

    imgUrl : {
        type:String
    },
    
    author:{
        type:String
    },
    
    title : {
       type: String
    },
    
    category:{
        type:String
    },
    
    content :{
        type:String
    },

    date: {
        type:Date
    }
    
})

module.exports = mongoose.model('blog', blogSchema);