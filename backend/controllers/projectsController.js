const WebDevProject = require('../models/WebDevProject');
const GraphicDesignProject = require('../models/GraphicDesignProject');

// Retrieve All Web Developer Projects
const webDevProj_get = (req, res) => {

    WebDevProject.find(
        {},
        {
            project: 1,
            subtitle: 1,
            order: 1
        }
    ).then((projects) => {
        res.status(200).json(projects);
    }).catch((err) => {
        res.json(err);
    });
};

// Retrieve Single Web Developer Project
const webDevProjById_get = (req, res) => {
    const id = req.params.id;
    WebDevProject.findById(id).then((project) => {
        res.status(200).json(project);
    }).catch((err) => {
        res.json(err);
    });
};

// Add Web Developer Projects
const webDevProj_post = (req, res) => {

    const {
        project,
        subtitle,
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
        subtitle,
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
        res.json(err);
    })
};

// Edit Web Developer Projects
const webDevProj_patch = (req, res) => {

    const id = req.params.id;
    const requestBody = req.body;

    WebDevProject.findByIdAndUpdate(id, requestBody, { new: true })
    .then((update) => {
        res.status(200).json(update);
    }).catch((err) => {
        res.json(err);
    });
};

// Retrieve All Graphic Design Projects
const graphicDesignProj_get = (req, res) => {

    GraphicDesignProject.find(
        {},
        {
            category: 1,
        }
    ).then((projects) => {
        res.status(200).json(projects);
    }).catch((err) => {
        res.json(err);
    });
};

// Retrieve Single Graphic Design Project
const graphicDesignProjByCategory_get = (req, res) => {
    const slug = req.params.category;
    const category = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    GraphicDesignProject.findOne({category}).then((project) => {
        res.status(200).json(project);
    }).catch((err) => {
        res.json(err);
    });
};

// Add Graphic Design Project
const graphicDesignProj_post = (req, res) => {

    const {
        category,
        projects
    } = req.body;

    GraphicDesignProject.create({
        category,
        projects
    }).then((project) => {
        res.status(201).json(project);
    }).catch((err) => {
        res.json(err);
    })
};

// Edit Graphic Design Projects
const graphicDesignProj_put = (req, res) => {

    const slug = req.params.category;
    const category = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const requestBody = req.body;
    
    GraphicDesignProject.findOneAndUpdate({category}, requestBody, { new: true })
    .then((update) => {
        res.status(200).json(update);
    }).catch((err) => {
        console.log(err)
        res.json(err);
    });
};

// Module Exports
module.exports = {
    webDevProj_get,
    webDevProjById_get,
    webDevProj_post,
    webDevProj_patch,
    graphicDesignProj_get,
    graphicDesignProjByCategory_get,
    graphicDesignProj_post,
    graphicDesignProj_put
};