const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    name : {
        type : String
    },
    email : {
        type : String
    },
    subject : {
        type : String
    },
    message : {
        type : String
    },
    contactDate : {
        type : Date,
        default : new Date
    }
});


// Module Export
module.exports = mongoose.model('Contact', contactSchema);