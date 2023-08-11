const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({

    dev : {
        languages : {
            type : Array
        },
        frameworks : {
            type : Array
        },
        tools : {
            type : Array
        },
        databases: {
            type : Array
        },
        others : {
            type : Array
        }
    },
    graphic : {
        genre : {
            type : Array
        },
        tools : {
            type : Array
        }
    }
    
});


// Module Export
module.exports = mongoose.model('Skill', skillsSchema);