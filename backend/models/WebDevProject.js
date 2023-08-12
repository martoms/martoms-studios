const mongoose = require('mongoose');

const webDevProjectSchema = new mongoose.Schema({

    project : {
        type : String
    },
    subtitle : {
        type : String
    },
    dateCreated : {
        type : Date
    },
    latestVersion : {
        type : Date
    },
    url : {
        type : String
    },
    repository : {
        platform : {
            type : String
        },
        url : {
            type : String
        }
    },
    description : {
        type : String
    },
    skills : {
        type : Array
    },
    order : {
        type : Number
    }

});

// Module Export
module.exports = mongoose.model('WebDevProject', webDevProjectSchema);