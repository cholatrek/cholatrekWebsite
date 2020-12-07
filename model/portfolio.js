const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const blogSchema = new Schema({

    portfolioImage : {
        type:String
    },
    portfolioVideo:{
        type:String
    },
    
    excerpt:{
        type:String
    },

    overview:{
        type:String
    },

    author:{
        type:String
    },

    position:{
        type:String
    },

    analysis:{
        type:String
    },

    design:{
        type:String
    },

    implementation:{
        type:String
    },
    testing:{
        type:String
    },

    title : {
       type: String
    },
    
    category:{
        type:String
    },

    date: {
        type:Date
    }
    
})

module.exports = mongoose.model('portfolio', blogSchema);