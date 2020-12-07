const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const instituteSchema = new Schema({
    
    
    fname : {
       type: String
    },

    lname : {
        type: String
     },
    
    phone:{
        type:String
    },
    
    email :{
        type:String
    },
    course:{
        type:String
    },
    skill : {
        type: String
    },
    enrolment:{
        type:String
    }
})

module.exports = mongoose.model('institute', instituteSchema);