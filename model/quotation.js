const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const QuotationSchema = new Schema({
    
    
    name : {
       type: String
    },
    
    email:{
        type:String
    },
    
    serviceType :{
        type:String
    },

    message:{
        type:String
    }
})                                                              

module.exports = mongoose.model('quotation', QuotationSchema);