const mongoose = require('mongoose');

const graphicDesignProjectSchema = new mongoose.Schema({

    category : {
        type : String
    },
    projects : [
        {
            title : {
                type : String
            },
            purpose : {
                type : String
            },
            recepient : {
                type : String
            },
            createdOn : {
                type : Date
            },
            description : {
                type : String
            },
            tools : {
                type : Array
            },
            order : {
                type : Number
            }
        }
    ]

});

// Module Export
module.exports = mongoose.model('GraphicDesignProject', graphicDesignProjectSchema);