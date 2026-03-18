const users = require('../models/userModels');

const getUsers = (req, res) => {
    res.json(users);
};

module.exports = { getUsers };