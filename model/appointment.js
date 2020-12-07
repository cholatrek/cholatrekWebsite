const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const appointmentSchema = new Schema({
    
    
    name : {
       type: String
    },
    
    email:{
        type:String
    },
    
    appointmentType :{
        type:String
    }
})

module.exports = mongoose.model('appointment', appointmentSchema);