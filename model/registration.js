const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const registrationSchema = new Schema({
    
    
    name : {
       type: String
    },
    
    phone:{
        type:String
    },
    
    email :{
        type:String
    },
    means:{
        type:String
    },
    skill : {
        type: String
    },

    aspiration:{
        type:String
    }
 
})

module.exports = mongoose.model('registration', registrationSchema);