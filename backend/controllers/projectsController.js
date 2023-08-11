const WebDevProject = require('../models/WebDevProject');

// Add Web Developer Projects
const webDevProj_post = (req, res) => {
    const {
        project,
        dateCreated,
        latestVersion,
        url,
        repository,
        description,
        skills,
        order
    } = req.body;

    WebDevProject.create({
        project,
        dateCreated,
        latestVersion,
        url,
        repository,
        description,
        skills,
        order
    }).then((project) => {
        res.status(201).json(project);
    }).catch((err) => {
        res.status.json(err);
    })
};

// Module Exports
module.exports = {
    webDevProj_post
};