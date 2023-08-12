const Skill = require('../models/Skill');

// Retrieve Skills
const skills_get = (req, res) => {

    Skill.find({})
        .then((skills) => {
            res.status(201).json(skills);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
};

// Add Skills
const skills_post = (req, res) => {

    // reqest body
    const { dev, graphic } = req.body;

    Skill.create({dev, graphic})
        .then((skills) => {
            res.status(201).json(skills);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
};

// Edit Skills
const skills_put = (req, res) => {

    // reqest body
    const { _id, dev, graphic } = req.body;

    Skill.updateMany(
        {
            _id
        },
        {
            $set : {
                dev,
                graphic
            }
        },
        {
            new: true
        }
    ).then((update) => {
        res.status(200).json(update);
    }).catch((err) => {
        res.json(err);
    });
};

// Module Exports
module.exports = { skills_get, skills_post, skills_put };