const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const TestimonialSchema = new Schema({
    testimonialImage : {
        type:String
    },
    
    role :{
        type:String
    },

    name: {
        type:String
    },

    date:{
        type:String
    }, 

    content: {
        type:String
    }
})

module.exports = mongoose.model('Testimonial', TestimonialSchema);