const Contact = require('../models/Contact');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const { createAccessToken } = require('../middlewares/createAccessToken');

// Retrieve All Messages
const contact_get = (req, res) => {
    Contact.find(
        {},
        {
            subject: 1,
            contactDate: 1
        }
    ).then((messages) => {
        res.status(200).json(messages);
    }).catch((err) => {
        res.json(err);
    })
};

// Open a Message
const openContact_get = (req, res) => {

    const id = req.params.id;

    Contact.findById(id)
    .then((message) => {
        res.status(200).json(message);
    }).catch((err) => {
        res.json(err);
    })
};

// Create Message
const contact_post = (req, res) => {
    const {
        name,
        email,
        subject,
        message,
        contactDate
    } = req.body;

    Contact.create({
        name,
        email,
        subject,
        message,
        contactDate
    }).then((message) => {
        res.status(200).json(message);
    }).catch((err) => {
        res.json(err);
    })
};

// create admin password
const password = (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    Admin.create({username, password: hashedPassword}).then((admin) => {
        const token = createAccessToken(admin);
        res.status(201).json(token);
    }).catch((err) => {
        res.status(400).json(err);
    });
};

// admin login
const login = (req, res) => {
    const { username, password } = req.body;

    Admin.findOne({ username })
    .then((admin) => {
      if (admin) {

        return bcrypt.compare(password, admin.password)
          .then((auth) => {
            if (auth) {

              const token = createAccessToken(admin);
              
              res.status(200).json({ access: token });
            } else {
              throw Error('Incorrect password.');
            }
          });
      } else {
        throw Error('Incorrect username.');
      }
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

// Module Export
module.exports = {
    contact_get,
    openContact_get,
    contact_post,
    password,
    login
};