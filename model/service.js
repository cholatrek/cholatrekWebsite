const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const serviceSchema = new Schema({
    
    
    name : {
       type: String
    },
    
    email:{
        type:String
    },
    
    servicetype :{
        type:String
    },

    message: {
        type:String
    }
})

module.exports = mongoose.model('services', serviceSchema);